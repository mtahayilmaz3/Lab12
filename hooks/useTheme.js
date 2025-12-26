import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  // Uygulama açılınca kayıtlı temayı yükle
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const stored = await AsyncStorage.getItem('theme');
        if (stored) {
          setTheme(stored);
        }
      } catch (error) {
        console.error('Failed to load theme', error);
      }
    };
    loadTheme();
  }, []);

  // Temayı değiştir ve kaydet
  const toggleTheme = async () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    try {
      await AsyncStorage.setItem('theme', next);
    } catch (error) {
      console.error('Failed to save theme', error);
    }
  };

  return { theme, toggleTheme };
}