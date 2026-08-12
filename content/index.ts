import {
  journeyOfTheSoulPath,
  worldsOfGodIntroLesson,
  hahutQuickLesson,
  hahutExploreLesson,
  hahutDeepDiveLesson,
} from './paths/journeyOfTheSoul';
import {
  consultationPath,
  searchForTruthQuickLesson,
  searchForTruthExploreLesson,
  searchForTruthDeepDiveLesson,
  unityCooperationQuickLesson,
  unityCooperationExploreLesson,
  unityCooperationDeepDiveLesson,
  detachmentQuickLesson,
  detachmentExploreLesson,
  detachmentDeepDiveLesson,
  equalityOfVoicesQuickLesson,
  equalityOfVoicesExploreLesson,
  equalityOfVoicesDeepDiveLesson,
  courtesyRespectQuickLesson,
  courtesyRespectExploreLesson,
  courtesyRespectDeepDiveLesson,
  collectiveDecisionQuickLesson,
  collectiveDecisionExploreLesson,
  collectiveDecisionDeepDiveLesson,
} from './paths/consultation';
import { Lesson, LearningPath } from './schema';

export const paths: LearningPath[] = [journeyOfTheSoulPath, consultationPath];

export const lessons: Record<string, Lesson> = {
  [worldsOfGodIntroLesson.id]: worldsOfGodIntroLesson,
  [hahutQuickLesson.id]: hahutQuickLesson,
  [hahutExploreLesson.id]: hahutExploreLesson,
  [hahutDeepDiveLesson.id]: hahutDeepDiveLesson,
  [searchForTruthQuickLesson.id]: searchForTruthQuickLesson,
  [searchForTruthExploreLesson.id]: searchForTruthExploreLesson,
  [searchForTruthDeepDiveLesson.id]: searchForTruthDeepDiveLesson,
  [unityCooperationQuickLesson.id]: unityCooperationQuickLesson,
  [unityCooperationExploreLesson.id]: unityCooperationExploreLesson,
  [unityCooperationDeepDiveLesson.id]: unityCooperationDeepDiveLesson,
  [detachmentQuickLesson.id]: detachmentQuickLesson,
  [detachmentExploreLesson.id]: detachmentExploreLesson,
  [detachmentDeepDiveLesson.id]: detachmentDeepDiveLesson,
  [equalityOfVoicesQuickLesson.id]: equalityOfVoicesQuickLesson,
  [equalityOfVoicesExploreLesson.id]: equalityOfVoicesExploreLesson,
  [equalityOfVoicesDeepDiveLesson.id]: equalityOfVoicesDeepDiveLesson,
  [courtesyRespectQuickLesson.id]: courtesyRespectQuickLesson,
  [courtesyRespectExploreLesson.id]: courtesyRespectExploreLesson,
  [courtesyRespectDeepDiveLesson.id]: courtesyRespectDeepDiveLesson,
  [collectiveDecisionQuickLesson.id]: collectiveDecisionQuickLesson,
  [collectiveDecisionExploreLesson.id]: collectiveDecisionExploreLesson,
  [collectiveDecisionDeepDiveLesson.id]: collectiveDecisionDeepDiveLesson,
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
