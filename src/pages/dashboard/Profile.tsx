import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Trophy, Target, Edit } from "lucide-react";
import { currentUser } from "../../data/mockData";

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: currentUser.name.split(' ')[0],
    lastName: currentUser.name.split(' ')[1],
    email: currentUser.email,
    phone: "+91 98765 43210",
    dateOfBirth: "1995-06-15",
    city: "Delhi",
    state: "Delhi"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // In a real app, you'd save to backend here
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data
    setFormData({
      firstName: currentUser.name.split(' ')[0],
      lastName: currentUser.name.split(' ')[1],
      email: currentUser.email,
      phone: "+91 98765 43210",
      dateOfBirth: "1995-06-15",
      city: "Delhi",
      state: "Delhi"
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
        <p className="text-secondary-foreground mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Overview */}
      <div className="exam-card">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">
              {currentUser.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground">{currentUser.name}</h2>
            <p className="text-secondary-foreground">{currentUser.email}</p>
            <p className="text-sm text-secondary-foreground mt-1">
              Member since {new Date(currentUser.joinDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn-primary"
          >
            <Edit className="w-4 h-4 mr-2" />
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Information */}
        <div className="lg:col-span-2">
          <div className="exam-card">
            <h3 className="text-xl font-semibold text-foreground mb-6">Personal Information</h3>
            
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Date of Birth</label>
                    <input
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">City</label>
                    <input
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">State</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="Delhi">Delhi</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={handleSave} className="btn-primary">
                    Save Changes
                  </button>
                  <button onClick={handleCancel} className="btn-secondary">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-secondary-foreground" />
                  <span className="text-foreground">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary-foreground" />
                  <span className="text-foreground">{formData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary-foreground" />
                  <span className="text-foreground">{formData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-secondary-foreground" />
                  <span className="text-foreground">
                    {new Date(formData.dateOfBirth).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary-foreground" />
                  <span className="text-foreground">{formData.city}, {formData.state}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats & Progress */}
        <div className="space-y-6">
          {/* Performance Stats */}
          <div className="exam-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Performance Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm text-secondary-foreground">Quizzes Completed</span>
                </div>
                <span className="font-semibold text-foreground">{currentUser.quizzesCompleted}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-success" />
                  <span className="text-sm text-secondary-foreground">Average Score</span>
                </div>
                <span className="font-semibold text-foreground">{currentUser.averageScore}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-warning" />
                  <span className="text-sm text-secondary-foreground">Total Points</span>
                </div>
                <span className="font-semibold text-foreground">{currentUser.totalScore.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm text-secondary-foreground">Badges Earned</span>
                </div>
                <span className="font-semibold text-foreground">{currentUser.badgesEarned}</span>
              </div>
            </div>
          </div>

          {/* Learning Streak */}
          <div className="exam-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Learning Streak</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <p className="text-sm text-secondary-foreground">days in a row</p>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-xs text-primary font-medium">
                  🔥 You're on fire! Keep it up!
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="exam-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-foreground font-medium">Completed History Quiz</p>
                <p className="text-secondary-foreground text-xs">2 hours ago</p>
              </div>
              <div className="text-sm">
                <p className="text-foreground font-medium">Earned "Geography Expert" badge</p>
                <p className="text-secondary-foreground text-xs">1 day ago</p>
              </div>
              <div className="text-sm">
                <p className="text-foreground font-medium">Studied Constitution notes</p>
                <p className="text-secondary-foreground text-xs">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}