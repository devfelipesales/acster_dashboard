// Necessário o "use client", pois o SessionProvider do next-auth usa do Context(global)
"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

export const AuthProvider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
