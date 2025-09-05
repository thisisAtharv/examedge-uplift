import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ExamEdge</span>
            </div>
            <p className="text-secondary-foreground">
              Empowering UPSC aspirants with comprehensive study materials, 
              interactive quizzes, and personalized learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary">Courses</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary">Study Materials</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-secondary-foreground">
                <Mail className="w-4 h-4" />
                <span>support@examedge.com</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground">
                <MapPin className="w-4 h-4" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground">
            © 2024 ExamEdge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}