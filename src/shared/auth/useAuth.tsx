import React from "react";
import { IUser } from "./authProvider";

export interface AuthContextType {
  user: IUser;
  signIn: (value: IUser) => void;
  signOut: () => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth;
