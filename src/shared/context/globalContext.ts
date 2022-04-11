import React from "react";
import { IUser } from "../provider/authProvider";

export interface AuthContextType {
  user: IUser | null;
  signIn: (value: IUser) => void;
  signOut: () => void;
}

export interface IGlobalContext {
  auth: AuthContextType;
}

const GlobalContext = React.createContext<IGlobalContext>({} as IGlobalContext);
export default GlobalContext;
