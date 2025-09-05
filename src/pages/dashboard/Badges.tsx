import { Award, Lock, CheckCircle, Calendar, Target } from "lucide-react";
import { mockBadges } from "../../data/mockData";

export function Badges() {
  const earnedBadges = mockBadges.filter(badge => badge.earned);
  const lockedBadges = mockBadges.filter(badge => !badge.earned);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Badges</h1>
        <p className="text-secondary-foreground mt-1">
          Track your achievements and unlock new badges as you progress
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Total Badges</p>
              <p className="text-2xl font-bold text-foreground">{mockBadges.length}</p>
            </div>
            <Award className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Earned</p>
              <p className="text-2xl font-bold text-success">{earnedBadges.length}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Completion Rate</p>
              <p className="text-2xl font-bold text-primary">
                {Math.round((earnedBadges.length / mockBadges.length) * 100)}%
              </p>
            </div>
            <Target className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="exam-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">Progress Overview</h2>
          <span className="text-sm text-secondary-foreground">
            {earnedBadges.length} of {mockBadges.length} badges earned
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-3">
          <div 
            className="bg-primary h-3 rounded-full transition-all duration-500" 
            style={{ width: `${(earnedBadges.length / mockBadges.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Earned Badges */}
      {earnedBadges.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">🏆 Earned Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {earnedBadges.map((badge) => (
              <div key={badge.id} className="exam-card text-center group hover:shadow-exam-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{badge.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{badge.name}</h3>
                <p className="text-secondary-foreground text-sm mb-4">{badge.description}</p>
                <div className="flex items-center justify-center gap-2 text-success">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Earned</span>
                </div>
                {badge.earnedDate && (
                  <div className="flex items-center justify-center gap-1 mt-2 text-xs text-secondary-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(badge.earnedDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Locked Badges */}
      {lockedBadges.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">🔒 Locked Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {lockedBadges.map((badge) => (
              <div key={badge.id} className="exam-card text-center opacity-60 hover:opacity-80 transition-opacity">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-3xl grayscale">{badge.icon}</span>
                  <div className="absolute inset-0 bg-muted/50 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-secondary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{badge.name}</h3>
                <p className="text-secondary-foreground text-sm mb-4">{badge.description}</p>
                <div className="flex items-center justify-center gap-2 text-secondary-foreground">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm font-medium">Locked</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Badge Categories */}
      <div className="exam-card">
        <h2 className="text-xl font-semibold text-foreground mb-6">Badge Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📚</span>
              <h3 className="font-semibold text-blue-700">Study Achievements</h3>
            </div>
            <p className="text-sm text-blue-600">Badges for studying and learning milestones</p>
          </div>

          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎯</span>
              <h3 className="font-semibold text-green-700">Quiz Master</h3>
            </div>
            <p className="text-sm text-green-600">Badges for quiz performance and accuracy</p>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">⚡</span>
              <h3 className="font-semibold text-purple-700">Speed & Efficiency</h3>
            </div>
            <p className="text-sm text-purple-600">Badges for quick thinking and time management</p>
          </div>

          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🏆</span>
              <h3 className="font-semibold text-orange-700">Special Achievements</h3>
            </div>
            <p className="text-sm text-orange-600">Rare badges for exceptional accomplishments</p>
          </div>
        </div>
      </div>

      {/* Next Badge Goal */}
      <div className="exam-card gradient-light-bg border-2 border-primary/20">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">🎯 Next Badge Goal</h2>
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 relative">
            <span className="text-2xl grayscale">🌟</span>
            <div className="absolute inset-0 bg-muted/30 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-secondary-foreground" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Perfect Score</h3>
          <p className="text-secondary-foreground mb-4">Score 100% in any quiz</p>
          <p className="text-sm text-primary font-medium">
            You're getting close! Your best score is 95%
          </p>
        </div>
      </div>
    </div>
  );
}