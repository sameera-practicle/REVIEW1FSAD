import React, { createContext, useState, useEffect } from "react";
import bcrypt from "bcryptjs";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = async (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(newUser.password, 10);

    const updatedUser = {
      ...newUser,
      password: hashedPassword
    };

    users.push(updatedUser);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const login = async (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find((u) => u.email === email);

    if (!foundUser) return null;

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) return null;

    localStorage.setItem("user", JSON.stringify(foundUser));
    setUser(foundUser);

    return foundUser;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};