import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';
import { getLessonsForPath, getPath } from '../content';

type Props = NativeStackScreenProps<RootStackParamList, 'Path'>;

export default function PathScreen({ route, navigation }: Props) {
  const path = getPath(route.params.pathId);
  const lessons = getLessonsForPath(route.params.pathId);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        path ? (
          <Text style={styles.pathDescription}>{path.description}</Text>
        ) : null
      }
      data={lessons}
      keyExtractor={(lesson) => lesson.id}
      renderItem={({ item, index }) => (
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate('Lesson', { lessonId: item.id })}
        >
          <Text style={styles.lessonNumber}>Lesson {index + 1}</Text>
          <Text style={styles.lessonTitle}>{item.title}</Text>
          <Text style={styles.lessonSubtitle}>{item.subtitle}</Text>
          <Text style={styles.lessonMeta}>{item.estimatedMinutes} min</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 24,
  },
  pathDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  lessonNumber: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#888',
    marginBottom: 6,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  lessonSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  lessonMeta: {
    fontSize: 13,
    color: '#7a5c00',
    fontWeight: '600',
  },
});
