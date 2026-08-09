import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PathScreen from '../screens/PathScreen';
import LessonScreen from '../screens/LessonScreen';
import { getLesson, getPath } from '../content';

export type RootStackParamList = {
  Home: undefined;
  Path: { pathId: string };
  Lesson: { lessonId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Bahá'í Micro-Deepening" }}
      />
      <Stack.Screen
        name="Path"
        component={PathScreen}
        options={({ route }) => ({
          title: getPath(route.params.pathId)?.title ?? 'Learning Path',
        })}
      />
      <Stack.Screen
        name="Lesson"
        component={LessonScreen}
        options={({ route }) => ({
          title: getLesson(route.params.lessonId)?.title ?? 'Lesson',
        })}
      />
    </Stack.Navigator>
  );
}
