export interface CourseObjective {
  id: string;
  description: string;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  description: string;
  objectives: CourseObjective[];
  credits: number;
}

export type ResourceType =
  | "PDF"
  | "Mind Map"
  | "Cheat Sheet"
  | "Link"
  | "Video"
  | "Study Note";

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  subjectId: string;
  moduleId?: string;
  url?: string;
  description?: string;
  markdownContent?: string;
}

export interface Flashcard {
  id: string;
  subjectId: string;
  moduleId?: string;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export type QuestionType = "MCQ" | "BOOLEAN";

export interface Question {
  id: string;
  subjectId: string;
  moduleId?: string;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
}

export interface QuizAttempt {
  questionId: string;
  selectedOption: string | null;
  isCorrect: boolean;
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High";
}

export interface NoteItem {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isError?: boolean;
  type?: "text" | "quote" | "fact";
}

export enum ViewState {
  DASHBOARD = "DASHBOARD",
  RESOURCES = "RESOURCES",
  PRACTICE = "PRACTICE",
  TOOLS = "TOOLS",
  TUTOR = "TUTOR",
}

export interface BotFeature {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  promptPrefix: string;
}

export interface DailyProgress {
  date: string; // ISO Date string YYYY-MM-DD
  minutesSpent: number;
}

export interface UserStats {
  focusTimeMinutes: number;
  streakDays: number;
  modulesCompleted: number;
  totalModules: number;
  globalRank: number;
  weeklyProgress: DailyProgress[];
  lastLoginDate: string;
}
