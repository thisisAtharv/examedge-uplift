import { Link } from "react-router-dom";
import { BookCheck, Target, TrendingUp, ArrowRight, Users, Award, Clock } from "lucide-react";

export function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Your Competitive Exams
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Comprehensive UPSC preparation with interactive quizzes, curated study materials, 
            and personalized progress tracking. Your journey to success starts here.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-all transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">10,000+</h3>
              <p className="text-secondary-foreground">Active Learners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">5,000+</h3>
              <p className="text-secondary-foreground">Practice Questions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">95%</h3>
              <p className="text-secondary-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ExamEdge?
            </h2>
            <p className="text-xl text-secondary-foreground max-w-2xl mx-auto">
              Everything you need to excel in your UPSC preparation, all in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="exam-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Curated Resources</h3>
              <p className="text-secondary-foreground">
                Access handpicked study materials, notes, and resources created by UPSC experts 
                and successful candidates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="exam-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Interactive Quizzes</h3>
              <p className="text-secondary-foreground">
                Test your knowledge with comprehensive quizzes covering all UPSC subjects. 
                Get instant feedback and detailed explanations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="exam-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Progress Tracking</h3>
              <p className="text-secondary-foreground">
                Monitor your performance with detailed analytics, identify weak areas, 
                and track your improvement over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl text-secondary-foreground mb-8">
            Join thousands of successful UPSC aspirants who chose ExamEdge for their preparation.
          </p>
          <Link
            to="/signup"
            className="btn-primary text-lg px-8 py-4"
          >
            Create Free Account
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}