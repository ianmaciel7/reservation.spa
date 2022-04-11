import React from "react";
import { AuthContext, AuthContextType } from "./useAuth";
import useLocalStorage from "../hooks/useLocalStorage";

// eslint-disable-next-line no-shadow
export enum Authority {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  id: number;
  type: string[];
  hash: string;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useLocalStorage<IUser | null>("auth", null);
  const value = React.useMemo(
    () =>
      ({
        user,
        signIn: (u) => setUser(u),
        signOut: () => setUser(null),
      } as AuthContextType),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
