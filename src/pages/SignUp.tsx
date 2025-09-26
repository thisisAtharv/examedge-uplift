import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, Calendar, MapPin, Phone, BookOpen } from "lucide-react";

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    state: "",
    city: "",
    preferredSubjects: [] as string[],
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const subjects = ["History", "Geography", "Political Science", "Economics", "Environment", "Science & Technology"];
  const states = ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Rajasthan", "Uttar Pradesh", "Other"];

  const validateDateOfBirth = (date: string) => {
    const birthYear = new Date(date).getFullYear();
    return birthYear >= 1975 && birthYear <= 2005;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Validation
    if (!validateDateOfBirth(formData.dateOfBirth)) {
      newErrors.dateOfBirth = "Date of birth must be between 1975-2005";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Registration successful
      navigate('/dashboard');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubjectChange = (subject: string) => {
    const updatedSubjects = formData.preferredSubjects.includes(subject)
      ? formData.preferredSubjects.filter(s => s !== subject)
      : [...formData.preferredSubjects, subject];
    
    setFormData({ ...formData, preferredSubjects: updatedSubjects });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="exam-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Create Your Account</h2>
            <p className="text-secondary-foreground mt-2">Join thousands of successful UPSC aspirants</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <div className="relative">
                    <User className="w-5 h-5 text-secondary-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="First name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full pl-4 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-secondary-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-secondary-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Date of Birth <span className="text-sm text-secondary-foreground">(1975-2005)</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-secondary-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      name="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  {errors.dateOfBirth && <p className="text-error text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Gender</label>
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Location Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">State</label>
                  <select
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select state</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City</label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-secondary-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Study Preferences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Study Preferences
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Preferred Subjects (Select multiple)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {subjects.map(subject => (
                    <label key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.preferredSubjects.includes(subject)}
                        onChange={() => handleSubjectChange(subject)}
                        className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                      />
                      <span className="ml-2 text-sm text-foreground">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Security
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-secondary-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-foreground hover:text-primary"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-error text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-secondary-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-foreground hover:text-primary"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-error text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1"
                />
                <label className="ml-2 block text-sm text-secondary-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:text-primary-hover font-medium">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:text-primary-hover font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-error text-sm">{errors.agreeToTerms}</p>}
            </div>

            <button type="submit" className="btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-secondary-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-primary-hover font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}