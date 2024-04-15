"use client";
import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  //   const { children } = props;

  const data = {};

  return <AuthContext.Provider value={data}>
    {children}
  </AuthContext.Provider>;
}
