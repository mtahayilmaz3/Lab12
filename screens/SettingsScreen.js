import { View, Text, StyleSheet, Button, Switch } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  // Temaya göre renkleri belirle
  const isDarkMode = theme === 'dark';
  const backgroundColor = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Settings</Text>
      
      <View style={styles.preference}>
        <Text style={[styles.text, { color: textColor }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
        />
      </View>
      
      <Text style={[styles.info, { color: textColor }]}>
        Current Theme: {theme}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // Ortala
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
  },
  info: {
    marginTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});