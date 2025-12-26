import { createContext, useContext, useState } from 'react';

// Context'i oluşturuyoruz
const AuthContext = createContext(undefined);

// Provider bileşeni: State'i tutar ve çocuklarına dağıtır
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook: Context'i kolayca kullanmak için
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}