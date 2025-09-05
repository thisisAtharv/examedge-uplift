import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookCheck, 
  Library, 
  Trophy, 
  Badge, 
  User, 
  LogOut,
  BookOpen
} from "lucide-react";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Quizzes",
    href: "/dashboard/quizzes",
    icon: BookCheck,
  },
  {
    name: "Study Resources",
    href: "/dashboard/resources",
    icon: Library,
  },
  {
    name: "Leaderboard",
    href: "/dashboard/leaderboard",
    icon: Trophy,
  },
  {
    name: "My Badges",
    href: "/dashboard/badges",
    icon: Badge,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd clear authentication state here
    navigate('/');
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-sidebar bg-card border-r border-border/50 shadow-exam-lg">
      <div className="p-6">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">ExamEdge</span>
        </Link>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="sidebar-nav-item w-full text-error hover:bg-error/10 hover:text-error"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}