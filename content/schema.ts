export type LessonStepType =
  | 'read'
  | 'understand'
  | 'explore'
  | 'reflect'
  | 'discuss'
  | 'practice'
  | 'remember';

export interface Quotation {
  text: string;
  author: string;
  source: string;
}

export interface ChoicePrompt {
  question: string;
  options: string[];
  correctOption: string;
}

export interface BlankedQuotation {
  textWithBlanks: string;
  answers: string[];
}

export interface LessonStep {
  type: LessonStepType;
  title: string;
  body?: string;
  quotation?: Quotation;
  prompt?: string;
  choice?: ChoicePrompt;
  blankedQuotation?: BlankedQuotation;
}

export interface Lesson {
  id: string;
  pathId: string;
  order: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  keyIdea: string;
  steps: LessonStep[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  lessonIds: string[];
}
