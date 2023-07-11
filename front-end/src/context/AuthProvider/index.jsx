import React, { createContext, useEffect, useState } from "react";
import { Login, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email, password) {
    const response = await Login(email, password);

    const payload = { token: response.accessToken, email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
