/* eslint-disable arrow-body-style */
import axios, { AxiosError } from "axios";
import { IUser } from "../provider/authProvider";
import useLocalStorage from "./useLocalStorage";

const useApi = () => {
  const [auth, setAuth] = useLocalStorage<IUser>("auth", null);
  const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      Authorization: auth?.hash,
      "Access-Control-Allow-Origin": "*",
    },
  });

  api.interceptors.request.use(
    async (request) => Promise.resolve(request),
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    async (request) => {
      return Promise.resolve(request);
    },
    (error) => {
      return Promise.reject(error.response.data);
    }
  );

  return api;
};

export default useApi;
