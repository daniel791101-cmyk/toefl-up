export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  userAnswerIndex?: number; // For reporting
}

export interface Passage {
  id: string;
  title: string;
  content: string[]; // Array of paragraphs
  topic: string;
}

export interface PracticeSession {
  id: string;
  title: string;
  date: string;
  type: 'Reading' | 'Listening' | 'Speaking' | 'Writing';
  score?: string; // e.g., "90%" or "Good"
  accuracy?: number;
  timeSpent: string;
  completed: boolean;
  status?: 'Completed' | 'In Progress';
}

export enum RoutePath {
  LOGIN = '/',
  DASHBOARD = '/dashboard',
  READING_LIB = '/reading',
  READING_PRACTICE = '/reading/practice',
  LISTENING_LIB = '/listening',
  LISTENING_PRACTICE = '/listening/practice',
  HISTORY = '/history',
  REPORT = '/report',
}
