import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';
import { getLessonsForPath, getPathsForCategory } from '../content';

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

export default function CategoryScreen({ route, navigation }: Props) {
  const categoryPaths = getPathsForCategory(route.params.categoryId);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={categoryPaths}
      keyExtractor={(path) => path.id}
      renderItem={({ item }) => {
        const lessonCount = getLessonsForPath(item.id).length;
        return (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Path', { pathId: item.id })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.meta}>
              {lessonCount} lesson{lessonCount === 1 ? '' : 's'}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 24,
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginBottom: 10,
  },
  meta: {
    fontSize: 13,
    color: '#7a5c00',
    fontWeight: '600',
  },
});
