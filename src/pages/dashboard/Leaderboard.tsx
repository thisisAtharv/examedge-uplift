import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { mockUsers, currentUser } from "../../data/mockData";

export function Leaderboard() {
  // Sort users by total score (descending)
  const sortedUsers = [...mockUsers].sort((a, b) => b.totalScore - a.totalScore);
  const currentUserRank = sortedUsers.findIndex(user => user.id === currentUser.id) + 1;

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-secondary-foreground">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case 2:
        return "bg-gray-100 text-gray-700 border-gray-200";
      case 3:
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Leaderboard</h1>
        <p className="text-secondary-foreground mt-1">
          See how you rank among other UPSC aspirants
        </p>
      </div>

      {/* Current User Stats */}
      <div className="exam-card gradient-light-bg border-2 border-primary/20">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Your Current Rank</h2>
          <div className="text-4xl font-bold text-primary mb-2">#{currentUserRank}</div>
          <p className="text-secondary-foreground">
            You're in the top {Math.round((currentUserRank / sortedUsers.length) * 100)}% of learners!
          </p>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {sortedUsers.slice(0, 3).map((user, index) => (
          <div 
            key={user.id} 
            className={`exam-card text-center ${
              index === 0 ? 'transform scale-105 border-2 border-yellow-200 bg-yellow-50' :
              index === 1 ? 'border-2 border-gray-200 bg-gray-50' :
              'border-2 border-amber-200 bg-amber-50'
            }`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
              index === 0 ? 'bg-yellow-100' :
              index === 1 ? 'bg-gray-100' :
              'bg-amber-100'
            }`}>
              {getRankIcon(index + 1)}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{user.name}</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-secondary-foreground">Total Score</p>
                <p className="text-xl font-bold text-foreground">{user.totalScore.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-secondary-foreground">Avg Score</p>
                <p className="text-lg font-semibold text-foreground">{user.averageScore}%</p>
              </div>
              <div>
                <p className="text-sm text-secondary-foreground">Quizzes</p>
                <p className="text-lg font-semibold text-foreground">{user.quizzesCompleted}</p>
              </div>
            </div>
            {user.id === currentUser.id && (
              <div className="mt-3">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  You
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Full Leaderboard */}
      <div className="exam-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Full Rankings</h2>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Updated daily</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="py-3 px-4 font-semibold text-foreground">Rank</th>
                <th className="py-3 px-4 font-semibold text-foreground">Name</th>
                <th className="py-3 px-4 font-semibold text-foreground">Quizzes Completed</th>
                <th className="py-3 px-4 font-semibold text-foreground">Total Score</th>
                <th className="py-3 px-4 font-semibold text-foreground">Average Score</th>
                <th className="py-3 px-4 font-semibold text-foreground">Badges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sortedUsers.map((user, index) => (
                <tr 
                  key={user.id}
                  className={`hover:bg-muted/50 transition-colors ${
                    user.id === currentUser.id ? 'bg-primary/5 border-l-4 border-primary' : ''
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {getRankIcon(index + 1)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRankBadgeColor(index + 1)}`}>
                        #{index + 1}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        {user.id === currentUser.id && (
                          <span className="text-xs text-primary font-medium">You</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-foreground">{user.quizzesCompleted}</td>
                  <td className="py-4 px-4 font-semibold text-foreground">{user.totalScore.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{user.averageScore}%</span>
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${user.averageScore}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-warning" />
                      <span className="text-foreground">{user.badgesEarned}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Achievement Milestones */}
      <div className="exam-card">
        <h2 className="text-xl font-semibold text-foreground mb-6">Achievement Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Top 1%</p>
            <p className="text-xs text-secondary-foreground">Elite Performer</p>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <Medal className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Top 5%</p>
            <p className="text-xs text-secondary-foreground">Outstanding</p>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Top 10%</p>
            <p className="text-xs text-secondary-foreground">Excellent</p>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Top 25%</p>
            <p className="text-xs text-secondary-foreground">Above Average</p>
          </div>
        </div>
      </div>
    </div>
  );
}