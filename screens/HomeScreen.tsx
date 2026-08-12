import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';
import { getCategoriesWithPaths, getPathsForCategory } from '../content';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const categoriesWithPaths = getCategoriesWithPaths();

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <Text style={styles.heading}>What would you like to explore?</Text>
      }
      data={categoriesWithPaths}
      keyExtractor={(category) => category.id}
      renderItem={({ item }) => {
        const categoryPaths = getPathsForCategory(item.id);
        const onPress = () => {
          if (categoryPaths.length === 1) {
            navigation.navigate('Path', { pathId: categoryPaths[0].id });
          } else {
            navigation.navigate('Category', { categoryId: item.id });
          }
        };
        const pathCount = categoryPaths.length;
        return (
          <Pressable style={styles.card} onPress={onPress}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>
              {pathCount} path{pathCount === 1 ? '' : 's'}
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
    paddingTop: 32,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
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
  emoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 6,
  },
  meta: {
    fontSize: 13,
    color: '#7a5c00',
    fontWeight: '600',
  },
});
