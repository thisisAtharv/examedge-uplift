import { Search, Filter, BookOpen, Video, FileText, Clock, Star } from "lucide-react";
import { useState } from "react";
import { mockStudyResources } from "../../data/mockData";

export function StudyResources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const subjects = ["all", "History", "Geography", "Political Science", "Economics"];
  const types = ["all", "Notes", "Video", "Article"];

  const filteredResources = mockStudyResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "all" || resource.subject === selectedSubject;
    const matchesType = selectedType === "all" || resource.type === selectedType;
    
    return matchesSearch && matchesSubject && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Notes":
        return <FileText className="w-5 h-5" />;
      case "Video":
        return <Video className="w-5 h-5" />;
      case "Article":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Notes":
        return "bg-blue-100 text-blue-700";
      case "Video":
        return "bg-red-100 text-red-700";
      case "Article":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Study Resources</h1>
        <p className="text-secondary-foreground mt-1">
          Access curated study materials, notes, and resources for UPSC preparation
        </p>
      </div>

      {/* Search and Filters */}
      <div className="exam-card">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="w-5 h-5 text-secondary-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Subject Filter */}
          <div className="min-w-[180px]">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject === "all" ? "All Subjects" : subject}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="min-w-[160px]">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Total Resources</p>
              <p className="text-2xl font-bold text-foreground">{filteredResources.length}</p>
            </div>
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Notes</p>
              <p className="text-2xl font-bold text-foreground">
                {filteredResources.filter(r => r.type === "Notes").length}
              </p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Videos</p>
              <p className="text-2xl font-bold text-foreground">
                {filteredResources.filter(r => r.type === "Video").length}
              </p>
            </div>
            <Video className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <div className="exam-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground text-sm">Articles</p>
              <p className="text-2xl font-bold text-foreground">
                {filteredResources.filter(r => r.type === "Article").length}
              </p>
            </div>
            <BookOpen className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="exam-card group hover:shadow-exam-lg transition-all duration-300">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(resource.type)}`}>
                    {getTypeIcon(resource.type)}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-secondary-foreground text-sm mb-4">
                  {resource.subject}
                </p>
                <div className="flex items-center gap-4 text-sm text-secondary-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <button className="btn-primary w-full group-hover:shadow-md transition-shadow">
                  View Resource
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (
        <div className="exam-card text-center py-12">
          <BookOpen className="w-16 h-16 text-secondary-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No resources found</h3>
          <p className="text-secondary-foreground">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
        </div>
      )}

      {/* Recommended Resources */}
      <div className="exam-card">
        <h2 className="text-xl font-semibold text-foreground mb-6">📚 Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Ancient India Timeline</span>
            </div>
            <p className="text-sm text-secondary-foreground mb-2">
              Comprehensive notes covering ancient Indian history from Indus Valley to Gupta Empire
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-primary font-medium">History • 60 mins</span>
              <button className="text-sm text-primary hover:text-primary-hover font-medium">
                View →
              </button>
            </div>
          </div>

          <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Video className="w-5 h-5 text-success" />
              <span className="font-medium text-foreground">Constitutional Amendments</span>
            </div>
            <p className="text-sm text-secondary-foreground mb-2">
              Video series explaining important constitutional amendments and their significance
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-success font-medium">Political Science • 45 mins</span>
              <button className="text-sm text-success hover:text-success/80 font-medium">
                Watch →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}