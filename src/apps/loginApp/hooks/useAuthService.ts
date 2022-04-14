import React from "react";
import useApi from "../../../shared/hooks/useApi";

export interface ILogin {
  username: string;
  password: string;
}

const useAuthService = () => {
  const api = useApi();
  const path = "auth";

  const endpoints = {
    async login({ username, password }: ILogin) {
      return api.post(`${path}/login`, { username, password });
    },
  };

  return endpoints;
};

export default useAuthService;
