import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bahá'í Micro-Deepening</Text>
      <Text style={styles.subtitle}>Study, reflect, and apply the Writings</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
  },
});
