import { Link, useLocation } from "react-router-dom";
import { BookOpen, User, LogIn } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

  return (
    <nav className="bg-card border-b border-border/50 shadow-exam-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ExamEdge</span>
          </Link>

          {/* Navigation Links */}
          {!isAuthPage && (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                to="/signup"
                className="btn-primary"
              >
                <User className="w-4 h-4 mr-2" />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}