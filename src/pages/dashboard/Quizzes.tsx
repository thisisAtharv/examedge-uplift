import { Link } from "react-router-dom";
import { BookCheck, Clock, Users, TrendingUp } from "lucide-react";
import { mockQuizzes } from "../../data/mockData";

const subjectColors = {
  "History": "bg-red-100 text-red-700",
  "Geography": "bg-green-100 text-green-700", 
  "Political Science": "bg-blue-100 text-blue-700",
  "Economics": "bg-purple-100 text-purple-700"
};

const difficultyColors = {
  "Easy": "bg-green-100 text-green-700",
  "Medium": "bg-yellow-100 text-yellow-700",
  "Hard": "bg-red-100 text-red-700"
};

export function Quizzes() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Quizzes</h1>
        <p className="text-secondary-foreground mt-1">
          Test your knowledge with comprehensive quizzes across all UPSC subjects
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Total Quizzes</p>
              <p className="text-2xl font-bold text-foreground">{mockQuizzes.length}</p>
            </div>
            <BookCheck className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Completed</p>
              <p className="text-2xl font-bold text-foreground">38</p>
            </div>
            <TrendingUp className="w-8 h-8 text-success" />
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Best Score</p>
              <p className="text-2xl font-bold text-foreground">95%</p>
            </div>
            <Users className="w-8 h-8 text-warning" />
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Avg. Time</p>
              <p className="text-2xl font-bold text-foreground">22m</p>
            </div>
            <Clock className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockQuizzes.map((quiz) => (
          <div key={quiz.id} className="exam-card group hover:shadow-exam-lg transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${subjectColors[quiz.subject as keyof typeof subjectColors]}`}>
                      {quiz.subject}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[quiz.difficulty]}`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{quiz.title}</h3>
                  <p className="text-secondary-foreground text-sm">
                    Test your knowledge of {quiz.subject.toLowerCase()} with comprehensive questions
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookCheck className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-secondary-foreground mb-6">
                <div className="flex items-center gap-1">
                  <BookCheck className="w-4 h-4" />
                  <span>{quiz.questions.length} Questions</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{quiz.timeLimit} Minutes</span>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  to={`/dashboard/quiz/${quiz.id}`}
                  className="btn-primary w-full group-hover:shadow-md transition-shadow"
                >
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Performance */}
      <div className="exam-card">
        <h2 className="text-xl font-semibold text-foreground mb-6">Recent Quiz Performance</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <BookCheck className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Indian Independence Movement</h3>
                <p className="text-sm text-secondary-foreground">History • Completed 2 hours ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-success">8/10</p>
              <p className="text-sm text-secondary-foreground">80%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <BookCheck className="w-5 h-5 text-warning" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Physical Geography of India</h3>
                <p className="text-sm text-secondary-foreground">Geography • Completed 1 day ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-warning">7/10</p>
              <p className="text-sm text-secondary-foreground">70%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <BookCheck className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Indian Constitution Basics</h3>
                <p className="text-sm text-secondary-foreground">Political Science • Completed 2 days ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-success">9/10</p>
              <p className="text-sm text-secondary-foreground">90%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}