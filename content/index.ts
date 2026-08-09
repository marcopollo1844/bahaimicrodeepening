import { journeyOfTheSoulPath, worldsOfGodIntroLesson } from './paths/journeyOfTheSoul';
import { Lesson, LearningPath } from './schema';

export const paths: LearningPath[] = [journeyOfTheSoulPath];

export const lessons: Record<string, Lesson> = {
  [worldsOfGodIntroLesson.id]: worldsOfGodIntroLesson,
};

export function getPath(pathId: string): LearningPath | undefined {
  return paths.find((path) => path.id === pathId);
}

export function getLesson(lessonId: string): Lesson | undefined {
  return lessons[lessonId];
}

export function getLessonsForPath(pathId: string): Lesson[] {
  const path = getPath(pathId);
  if (!path) return [];
  return path.lessonIds
    .map((id) => lessons[id])
    .filter((lesson): lesson is Lesson => Boolean(lesson));
}

export function getNextLessonId(
  pathId: string,
  currentLessonId: string
): string | undefined {
  const path = getPath(pathId);
  if (!path) return undefined;
  const index = path.lessonIds.indexOf(currentLessonId);
  if (index === -1) return undefined;
  return path.lessonIds[index + 1];
}
