export type LessonStepType =
  | 'read'
  | 'understand'
  | 'explore'
  | 'reflect'
  | 'discuss'
  | 'practice'
  | 'remember'
  | 'explain';

export interface Quotation {
  text: string;
  author: string;
  source: string;
}

export interface Citation {
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
  /** For 'explain' steps: a concise, source-grounded explanation revealed after the learner writes their own. */
  modelAnswer?: string;
  /** For 'explain' steps: attribution for modelAnswer, shown without repeating the full quotation text. */
  citation?: Citation;
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
  /** Label shown instead of "Lesson N" when this is a depth variant of another lesson's topic, e.g. "Quick" / "Explore" / "Deep Dive". */
  depthLabel?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  lessonIds: string[];
}
