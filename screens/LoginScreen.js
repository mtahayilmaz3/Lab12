import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const { login, user } = useAuth(); // Context'ten verileri al

  // Eğer kullanıcı zaten giriş yapmışsa (hafızadan geldiyse),
  // Login ekranında bekleme yapmadan Home ekranına gönder.
  useEffect(() => {
    if (user) {
      navigation.replace('Home');
    }
  }, [user, navigation]);

  const handleLogin = () => {
    // Boşluk kontrolü
    if (!username.trim()) {
      Alert.alert('Hata', 'Lütfen bir kullanıcı adı girin.');
      return;
    }
    
    login(username); // Global state'i güncelle (ve AsyncStorage'a kaydet)
    navigation.replace('Home'); // Home ekranına geç
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />
      
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});