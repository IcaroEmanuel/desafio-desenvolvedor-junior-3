import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";

export default function ProtectedLayout({ children }) {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você não tem acesso</h1>;
  }

  return children;
}
