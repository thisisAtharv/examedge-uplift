import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import { mockQuizzes, historyQuestions } from "../../data/mockData";

export function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = mockQuizzes.find(q => q.id === id);
  const questions = quiz?.id === "history-1" ? historyQuestions : [];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(quiz?.timeLimit ? quiz.timeLimit * 60 : 1800); // in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!quiz || questions.length === 0) {
      navigate('/dashboard/quizzes');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quiz, questions.length, navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answerIndex
    });
  };

  const handleQuestionJump = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = Object.values(answers).reduce((acc, answer, index) => {
      return acc + (answer === questions[index]?.correctAnswer ? 1 : 0);
    }, 0);
    
    // Navigate to results page with score
    navigate(`/dashboard/quiz/${id}/results`, { 
      state: { 
        score, 
        total: questions.length, 
        answers,
        timeSpent: (quiz?.timeLimit ? quiz.timeLimit * 60 : 1800) - timeLeft
      } 
    });
  };

  const speakQuestion = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US') || null;
      speechSynthesis.speak(utterance);
    }
  };

  if (!quiz || questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="exam-card mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{quiz.title}</h1>
            <p className="text-secondary-foreground">{quiz.subject} • {quiz.difficulty}</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
            <button
              onClick={handleSubmit}
              className="btn-primary"
            >
              Submit Quiz
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-secondary-foreground mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Question Area */}
        <div className="lg:col-span-3">
          <div className="exam-card">
            <div className="mb-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Q{currentQuestion + 1}. {currentQ.question}
                  </h2>
                </div>
                <button
                  onClick={() => speakQuestion(currentQ.question)}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Listen to question"
                >
                  <Volume2 className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === index
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </button>
              
              <button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="lg:col-span-1">
          <div className="exam-card sticky top-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Question Navigator</h3>
            
            <div className="grid grid-cols-5 gap-2 mb-6">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionJump(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    index === currentQuestion
                      ? 'bg-primary text-primary-foreground'
                      : answers[index] !== undefined
                      ? 'bg-success text-success-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/20'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded"></div>
                <span className="text-secondary-foreground">Current</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-success rounded"></div>
                <span className="text-secondary-foreground">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-muted rounded"></div>
                <span className="text-secondary-foreground">Not Visited</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-secondary-foreground mb-1">Questions Answered</p>
                <p className="text-xl font-bold text-foreground">
                  {Object.keys(answers).length} / {questions.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}