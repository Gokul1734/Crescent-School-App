import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
       
        if (token) {
          setUser(JSON.parse(token)); // Set user if token exists
        }
      } catch (e) {
        console.log('Error checking login', e);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
