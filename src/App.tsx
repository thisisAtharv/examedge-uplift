import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthProvider";

// Layouts
import { PublicLayout } from "./components/layout/PublicLayout";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Public Pages
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ForgotPassword } from "./pages/ForgotPassword";

// Dashboard Pages
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Quizzes } from "./pages/dashboard/Quizzes";
import { Quiz } from "./pages/dashboard/Quiz";
import { QuizResults } from "./pages/dashboard/QuizResults";
import { StudyResources } from "./pages/dashboard/StudyResources";
import { Leaderboard } from "./pages/dashboard/Leaderboard";
import { Badges } from "./pages/dashboard/Badges";
import { Profile } from "./pages/dashboard/Profile";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="quiz/:id" element={<Quiz />} />
            <Route path="quiz/:id/results" element={<QuizResults />} />
            <Route path="resources" element={<StudyResources />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="badges" element={<Badges />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
