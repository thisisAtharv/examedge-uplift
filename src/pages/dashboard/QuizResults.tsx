import { useLocation, useParams, Link } from "react-router-dom";
import { Trophy, Clock, CheckCircle, XCircle, RotateCcw, Home } from "lucide-react";
import { mockQuizzes, historyQuestions } from "../../data/mockData";

export function QuizResults() {
  const { id } = useParams();
  const location = useLocation();
  const { score, total, answers, timeSpent } = location.state || {};
  
  const quiz = mockQuizzes.find(q => q.id === id);
  const questions = quiz?.id === "history-1" ? historyQuestions : [];
  
  if (!quiz || !score === undefined) {
    return <div>No results found</div>;
  }

  const percentage = Math.round((score / total) * 100);
  const timeSpentMinutes = Math.floor(timeSpent / 60);
  const timeSpentSeconds = timeSpent % 60;

  const getScoreColor = () => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-warning";
    return "text-error";
  };

  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent! Outstanding performance!";
    if (percentage >= 80) return "Great job! You're well prepared!";
    if (percentage >= 70) return "Good work! Keep practicing!";
    if (percentage >= 60) return "Not bad! Room for improvement.";
    return "Keep studying! You'll do better next time.";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Results Header */}
      <div className="exam-card text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-2">Quiz Completed!</h1>
        <p className="text-secondary-foreground mb-6">{quiz.title}</p>
        
        <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
          {score}/{total}
        </div>
        
        <div className={`text-2xl font-semibold mb-4 ${getScoreColor()}`}>
          {percentage}%
        </div>
        
        <p className="text-lg text-secondary-foreground mb-8">
          {getScoreMessage()}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/dashboard/quizzes" className="btn-primary">
            <RotateCcw className="w-4 h-4 mr-2" />
            Take Another Quiz
          </Link>
          <Link to="/dashboard" className="btn-secondary">
            <Home className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="exam-card text-center">
          <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Correct Answers</h3>
          <p className="text-2xl font-bold text-success">{score}</p>
        </div>

        <div className="exam-card text-center">
          <XCircle className="w-8 h-8 text-error mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Incorrect Answers</h3>
          <p className="text-2xl font-bold text-error">{total - score}</p>
        </div>

        <div className="exam-card text-center">
          <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Time Taken</h3>
          <p className="text-2xl font-bold text-primary">
            {timeSpentMinutes}m {timeSpentSeconds}s
          </p>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="exam-card">
        <h2 className="text-xl font-semibold text-foreground mb-6">Detailed Results</h2>
        <div className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={question.id} className="border border-border rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isCorrect ? 'bg-success text-success-foreground' : 'bg-error text-error-foreground'
                  }`}>
                    {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">
                      Q{index + 1}. {question.question}
                    </h3>
                    
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div 
                          key={optionIndex}
                          className={`p-3 rounded-lg border ${
                            optionIndex === question.correctAnswer
                              ? 'border-success bg-success/10 text-success'
                              : optionIndex === userAnswer && !isCorrect
                              ? 'border-error bg-error/10 text-error'
                              : 'border-border bg-muted/30'
                          }`}
                        >
                          <span className="font-medium mr-2">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>
                          {option}
                          {optionIndex === question.correctAnswer && (
                            <span className="ml-2 text-success font-medium">(Correct)</span>
                          )}
                          {optionIndex === userAnswer && !isCorrect && (
                            <span className="ml-2 text-error font-medium">(Your Answer)</span>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {question.explanation && (
                      <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Explanation:</h4>
                        <p className="text-secondary-foreground">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Performance Analysis */}
      <div className="exam-card">
        <h2 className="text-xl font-semibold text-foreground mb-6">Performance Analysis</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-secondary-foreground">Overall Score</span>
            <span className={`font-bold ${getScoreColor()}`}>{percentage}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-secondary-foreground">Time Efficiency</span>
            <span className="font-bold text-primary">
              {timeSpentMinutes < 20 ? "Excellent" : timeSpentMinutes < 25 ? "Good" : "Could be better"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-secondary-foreground">Accuracy</span>
            <span className={`font-bold ${getScoreColor()}`}>
              {score}/{total} questions
            </span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg">
          <h3 className="font-semibold text-primary mb-2">Recommendations:</h3>
          <ul className="text-secondary-foreground space-y-1">
            {percentage < 70 && (
              <li>• Focus more on {quiz.subject} fundamentals</li>
            )}
            {timeSpentMinutes > 25 && (
              <li>• Practice time management for better efficiency</li>
            )}
            <li>• Review the explanations for incorrect answers</li>
            <li>• Take more practice quizzes to improve your score</li>
          </ul>
        </div>
      </div>
    </div>
  );
}