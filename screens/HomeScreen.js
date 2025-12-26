import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../context/AuthContext'; // useAuth'u import et

export default function HomeScreen({ navigation }) { // navigation prop'unu ekledik
  const { user, logout } = useAuth(); // Context'ten verileri al

  const handleLogout = () => {
    logout();
    navigation.replace('Login'); // Çıkış yapınca Login'e at
  };

  return (
    <View style={styles.container}>
      {/* user null olabilir diye kontrol ekliyoruz (optional chaining) */}
      <Text style={styles.text}>Welcome, {user?.username}</Text>
      
      <View style={{ marginTop: 20 }}>
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      </View>
      
      <View style={{ marginTop: 10 }}>
        <Button title="Logout" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: '500' },
});