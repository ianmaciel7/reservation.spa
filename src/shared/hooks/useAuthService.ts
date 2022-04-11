import React from "react";
import useApi from "./useApi";

export interface ILogin {
  username: string;
  password: string;
}

const useAuthService = () => {
  const api = useApi();
  const path = "auth";

  const endpoints = {
    async login({ username, password }: ILogin) {
      return (await api.post(`${path}/login`, { username, password })).data;
    },
  };

  return endpoints;
};

export default useAuthService;
