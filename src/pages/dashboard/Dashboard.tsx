import { Link } from "react-router-dom";
import { BookCheck, Library, Trophy, TrendingUp, Clock, Target, User, Star } from "lucide-react";
import { currentUser, mockQuizzes, mockStudyResources, dailyFacts } from "../../data/mockData";

export function Dashboard() {
  const todaysFact = dailyFacts[Math.floor(Math.random() * dailyFacts.length)];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {currentUser.name.split(' ')[0]}!
          </h1>
          <p className="text-secondary-foreground mt-1">
            Ready to continue your UPSC preparation journey?
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/dashboard/quizzes" className="btn-primary">
            Start New Quiz
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Quizzes Completed</p>
              <p className="text-2xl font-bold text-foreground">{currentUser.quizzesCompleted}</p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <BookCheck className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Average Score</p>
              <p className="text-2xl font-bold text-foreground">{currentUser.averageScore}%</p>
            </div>
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-success" />
            </div>
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Badges Earned</p>
              <p className="text-2xl font-bold text-foreground">{currentUser.badgesEarned}</p>
            </div>
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-warning" />
            </div>
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Leaderboard Rank</p>
              <p className="text-2xl font-bold text-foreground">#3</p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Available Quizzes */}
        <div className="lg:col-span-2 space-y-6">
          <div className="exam-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Available Quizzes</h2>
              <Link to="/dashboard/quizzes" className="text-primary hover:text-primary-hover font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {mockQuizzes.slice(0, 3).map((quiz) => (
                <div key={quiz.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{quiz.title}</h3>
                      <p className="text-sm text-secondary-foreground">
                        {quiz.subject} • {quiz.timeLimit} mins • {quiz.difficulty}
                      </p>
                    </div>
                  </div>
                  <Link 
                    to={`/dashboard/quiz/${quiz.id}`}
                    className="btn-secondary text-sm"
                  >
                    Start Quiz
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Study Resources */}
          <div className="exam-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Study Resources</h2>
              <Link to="/dashboard/resources" className="text-primary hover:text-primary-hover font-medium">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockStudyResources.slice(0, 4).map((resource) => (
                <div key={resource.id} className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Library className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{resource.subject}</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{resource.title}</h3>
                  <p className="text-sm text-secondary-foreground">
                    {resource.type} • {resource.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          
          {/* Daily Fact */}
          <div className="exam-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">💡 Daily Insight</h3>
            <p className="text-secondary-foreground text-sm leading-relaxed">
              {todaysFact}
            </p>
          </div>

          {/* Progress Overview */}
          <div className="exam-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Progress Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-secondary-foreground">History</span>
                  <span className="text-foreground font-medium">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-secondary-foreground">Geography</span>
                  <span className="text-foreground font-medium">72%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-secondary-foreground">Political Science</span>
                  <span className="text-foreground font-medium">68%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-secondary-foreground">Economics</span>
                  <span className="text-foreground font-medium">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="exam-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                  <BookCheck className="w-4 h-4 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">Completed History Quiz</p>
                  <p className="text-xs text-secondary-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">Earned "Consistent Scholar" badge</p>
                  <p className="text-xs text-secondary-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                  <Library className="w-4 h-4 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">Studied Geography notes</p>
                  <p className="text-xs text-secondary-foreground">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}