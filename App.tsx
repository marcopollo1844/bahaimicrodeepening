import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import LessonScreen from './screens/LessonScreen';
import { worldsOfGodIntroLesson } from './content/paths/journeyOfTheSoul';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LessonScreen lesson={worldsOfGodIntroLesson} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
