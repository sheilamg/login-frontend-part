// contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getToken, removeToken } from '../utils/auth';
import { decodeToken } from '../utils/jwt'; // where I have the jwt token?

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decodedToken = decodeToken(token);
      setUser({ email: decodedToken.email });
    }
  }, []);

  const login = (token) => {
    setToken(token);
    const decodedToken = decodeToken(token);
    setUser({ email: decodedToken.email });
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};