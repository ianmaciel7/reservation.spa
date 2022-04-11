/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import GlobalContext, {
  AuthContextType,
  IGlobalContext,
} from "../context/globalContext";
import useLocalStorage from "../hooks/useLocalStorage";

// eslint-disable-next-line no-shadow
export enum ROLE {
  USER = "ROLE_USER",
  ADMIN = "ROLE_ADMIN",
}
export interface IUser {
  id: number;
  type: string[];
  hash: string;
}

const authSlice = (
  user: IUser | null,
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
) =>
  ({
    user,
    signIn: (u: IUser) => setUser(u),
    signOut: () => setUser(null),
  } as AuthContextType);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useLocalStorage<IUser | null>("auth", null);

  const value = React.useMemo(
    () => ({ auth: authSlice(user, setUser) } as IGlobalContext),
    [user, setUser]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
