import React from "react";
import GlobalContext from "../context/globalContext";

const useAuth = () => React.useContext(GlobalContext).auth;

export default useAuth;
