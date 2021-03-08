import { createContext, useCallback, useContext, useState } from 'react';
import React from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  is_deliveryman: boolean;
}

interface AuthState {
  user: User;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext({} as AuthContextData);

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must bem used within an AuthProvider');
  }
  return context;
}

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@FastFeet:user');
    const token = localStorage.getItem('@FastFeet:token');
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/user-sessions', {
      email,
      password,
    });
    const { user, token } = response.data;
    localStorage.setItem('@FastFeet:user', JSON.stringify(user));
    localStorage.setItem('@FastFeet:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@FastFeet:user');
    localStorage.removeItem('@FastFeet:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
