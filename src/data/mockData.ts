// Mock data for ExamEdge Learning Platform

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  questions: Question[];
  timeLimit: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface User {
  id: string;
  name: string;
  email: string;
  quizzesCompleted: number;
  totalScore: number;
  averageScore: number;
  badgesEarned: number;
  joinDate: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

export interface StudyResource {
  id: string;
  title: string;
  subject: string;
  type: 'Notes' | 'Video' | 'Article';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
}

// Quiz Questions Data
export const historyQuestions: Question[] = [
  {
    id: 1,
    question: "Who was the first Governor-General of India?",
    options: ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie"],
    correctAnswer: 0,
    explanation: "Warren Hastings was the first Governor-General of India, serving from 1773 to 1785."
  },
  {
    id: 2,
    question: "The Sepoy Mutiny of 1857 began from which place?",
    options: ["Delhi", "Meerut", "Lucknow", "Kanpur"],
    correctAnswer: 1,
    explanation: "The Sepoy Mutiny of 1857 began from Meerut on May 10, 1857."
  },
  {
    id: 3,
    question: "Who founded the Indian National Congress?",
    options: ["A.O. Hume", "Dadabhai Naoroji", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale"],
    correctAnswer: 0,
    explanation: "A.O. Hume, a British civil servant, founded the Indian National Congress in 1885."
  },
  {
    id: 4,
    question: "The Battle of Plassey was fought in which year?",
    options: ["1757", "1764", "1761", "1760"],
    correctAnswer: 0,
    explanation: "The Battle of Plassey was fought on June 23, 1757, which marked the beginning of British rule in India."
  },
  {
    id: 5,
    question: "Who was known as the 'Iron Man of India'?",
    options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Lal Bahadur Shastri"],
    correctAnswer: 1,
    explanation: "Sardar Vallabhbhai Patel was known as the 'Iron Man of India' for his role in the integration of princely states."
  },
  {
    id: 6,
    question: "The Quit India Movement was launched in which year?",
    options: ["1940", "1942", "1944", "1946"],
    correctAnswer: 1,
    explanation: "The Quit India Movement was launched by Mahatma Gandhi on August 8, 1942."
  },
  {
    id: 7,
    question: "Who was the last Mughal Emperor?",
    options: ["Akbar Shah II", "Bahadur Shah II", "Shah Alam II", "Muhammad Shah"],
    correctAnswer: 1,
    explanation: "Bahadur Shah II was the last Mughal Emperor, who was exiled to Rangoon after the 1857 revolt."
  },
  {
    id: 8,
    question: "The Cabinet Mission came to India in which year?",
    options: ["1945", "1946", "1947", "1948"],
    correctAnswer: 1,
    explanation: "The Cabinet Mission came to India in 1946 to discuss the transfer of power from British to Indian hands."
  },
  {
    id: 9,
    question: "Who wrote 'Hind Swaraj'?",
    options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore"],
    correctAnswer: 1,
    explanation: "Mahatma Gandhi wrote 'Hind Swaraj' in 1909, outlining his vision of self-rule for India."
  },
  {
    id: 10,
    question: "The Dandi March was undertaken to protest against which tax?",
    options: ["Income Tax", "Salt Tax", "Land Revenue", "Cotton Tax"],
    correctAnswer: 1,
    explanation: "The Dandi March was undertaken by Mahatma Gandhi in 1930 to protest against the Salt Tax imposed by the British."
  }
];

// Quizzes Data
export const mockQuizzes: Quiz[] = [
  {
    id: "history-1",
    title: "Indian Independence Movement",
    subject: "History",
    questions: historyQuestions,
    timeLimit: 30,
    difficulty: "Medium"
  },
  {
    id: "geography-1",
    title: "Physical Geography of India",
    subject: "Geography",
    questions: [], // Would contain geography questions
    timeLimit: 25,
    difficulty: "Easy"
  },
  {
    id: "polity-1",
    title: "Indian Constitution Basics",
    subject: "Political Science",
    questions: [], // Would contain polity questions
    timeLimit: 35,
    difficulty: "Hard"
  },
  {
    id: "economics-1",
    title: "Indian Economy Overview",
    subject: "Economics",
    questions: [], // Would contain economics questions
    timeLimit: 30,
    difficulty: "Medium"
  }
];

// Users/Leaderboard Data
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    quizzesCompleted: 45,
    totalScore: 3420,
    averageScore: 87,
    badgesEarned: 12,
    joinDate: "2024-01-15"
  },
  {
    id: "2",
    name: "Rahul Gupta",
    email: "rahul.gupta@email.com",
    quizzesCompleted: 42,
    totalScore: 3280,
    averageScore: 85,
    badgesEarned: 10,
    joinDate: "2024-01-20"
  },
  {
    id: "3",
    name: "Atharv Singh",
    email: "atharv.singh@email.com",
    quizzesCompleted: 38,
    totalScore: 2950,
    averageScore: 78,
    badgesEarned: 8,
    joinDate: "2024-02-01"
  },
  {
    id: "4",
    name: "Ananya Patel",
    email: "ananya.patel@email.com",
    quizzesCompleted: 35,
    totalScore: 2800,
    averageScore: 80,
    badgesEarned: 9,
    joinDate: "2024-02-10"
  },
  {
    id: "5",
    name: "Vikram Kumar",
    email: "vikram.kumar@email.com",
    quizzesCompleted: 33,
    totalScore: 2640,
    averageScore: 82,
    badgesEarned: 7,
    joinDate: "2024-02-15"
  },
  {
    id: "6",
    name: "Sneha Reddy",
    email: "sneha.reddy@email.com",
    quizzesCompleted: 30,
    totalScore: 2340,
    averageScore: 79,
    badgesEarned: 6,
    joinDate: "2024-02-20"
  },
  {
    id: "7",
    name: "Arjun Mehta",
    email: "arjun.mehta@email.com",
    quizzesCompleted: 28,
    totalScore: 2240,
    averageScore: 81,
    badgesEarned: 5,
    joinDate: "2024-03-01"
  },
  {
    id: "8",
    name: "Kavya Joshi",
    email: "kavya.joshi@email.com",
    quizzesCompleted: 25,
    totalScore: 1950,
    averageScore: 78,
    badgesEarned: 4,
    joinDate: "2024-03-05"
  },
  {
    id: "9",
    name: "Rohan Agarwal",
    email: "rohan.agarwal@email.com",
    quizzesCompleted: 22,
    totalScore: 1760,
    averageScore: 80,
    badgesEarned: 3,
    joinDate: "2024-03-10"
  },
  {
    id: "10",
    name: "Ishika Verma",
    email: "ishika.verma@email.com",
    quizzesCompleted: 20,
    totalScore: 1540,
    averageScore: 77,
    badgesEarned: 3,
    joinDate: "2024-03-15"
  }
];

// Badges Data
export const mockBadges: Badge[] = [
  {
    id: "1",
    name: "History Buff",
    description: "Complete 5 History quizzes with 80% accuracy",
    icon: "🏛️",
    earned: true,
    earnedDate: "2024-03-01"
  },
  {
    id: "2",
    name: "Geography Expert",
    description: "Score 90% or above in 3 Geography quizzes",
    icon: "🗺️",
    earned: true,
    earnedDate: "2024-03-10"
  },
  {
    id: "3",
    name: "Quick Learner",
    description: "Complete a quiz in under 15 minutes",
    icon: "⚡",
    earned: true,
    earnedDate: "2024-02-28"
  },
  {
    id: "4",
    name: "Consistent Scholar",
    description: "Take quizzes for 7 consecutive days",
    icon: "🎯",
    earned: true,
    earnedDate: "2024-03-05"
  },
  {
    id: "5",
    name: "Perfect Score",
    description: "Score 100% in any quiz",
    icon: "🌟",
    earned: false
  },
  {
    id: "6",
    name: "Quiz Master",
    description: "Complete 50 quizzes",
    icon: "👑",
    earned: false
  },
  {
    id: "7",
    name: "Knowledge Seeker",
    description: "Access 20 study resources",
    icon: "📚",
    earned: false
  },
  {
    id: "8",
    name: "Top Performer",
    description: "Reach top 3 on leaderboard",
    icon: "🏆",
    earned: false
  }
];

// Study Resources Data
export const mockStudyResources: StudyResource[] = [
  {
    id: "1",
    title: "Mughal Empire - Complete Notes",
    subject: "History",
    type: "Notes",
    difficulty: "Medium",
    duration: "45 mins"
  },
  {
    id: "2",
    title: "Indian Geography - Rivers and Mountains",
    subject: "Geography",
    type: "Video",
    difficulty: "Easy",
    duration: "30 mins"
  },
  {
    id: "3",
    title: "Fundamental Rights in Constitution",
    subject: "Political Science",
    type: "Article",
    difficulty: "Hard",
    duration: "25 mins"
  },
  {
    id: "4",
    title: "Economic Planning in India",
    subject: "Economics",
    type: "Notes",
    difficulty: "Medium",
    duration: "40 mins"
  },
  {
    id: "5",
    title: "Freedom Struggle Timeline",
    subject: "History",
    type: "Video",
    difficulty: "Easy",
    duration: "35 mins"
  }
];

// Current user data
export const currentUser: User = mockUsers[2]; // Atharv Singh

// Daily facts
export const dailyFacts = [
  "Did you know? The Indian Constitution is the longest written constitution in the world with 395 articles and 12 schedules.",
  "Fun Fact: India has 22 official languages recognized by the Constitution.",
  "Historical Note: The Ashoka Chakra on our flag has 24 spokes representing the 24 hours of the day.",
  "Geography Fact: India is the 7th largest country by area and 2nd most populous country in the world.",
  "Economic Insight: India's economy is the 5th largest in the world by nominal GDP."
];