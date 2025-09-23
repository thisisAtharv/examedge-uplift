import { Link, useLocation } from "react-router-dom";
import { BookOpen, User, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export function Navbar() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

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
              {user ? (
                <div className="flex items-center gap-4">
                  <Link
                    to="/dashboard"
                    className="text-secondary-foreground hover:text-primary transition-colors px-4 py-2"
                  >
                    Dashboard
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors px-4 py-2"
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}