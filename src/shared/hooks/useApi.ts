/* eslint-disable arrow-body-style */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { IUser } from "../provider/authProvider";
import useLocalStorage from "./useLocalStorage";

const useApi = () => {
  const authType = "Basic";
  const [auth, setAuth] = useLocalStorage<IUser>("auth", null);
  const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  api.interceptors.request.use(
    async (request) => {
      const token = auth?.hash;

      if (token !== null && token !== undefined) {
        console.log(token);
        request.headers = {
          Authorization: `${authType} ${token}`,
        };
      }

      return Promise.resolve(request);
    },
    (error) => Promise.reject(error)
  );

  const captureResponseData = (config: AxiosRequestConfig): Promise<any> => {
    return api
      .request(config)
      .then((e) => Promise.resolve(e.data))
      .catch((e) => Promise.reject(e.response.data));
  };

  const wrapperAxios = {
    async post(url: string, data?: any) {
      return captureResponseData({
        url,
        method: "POST",
        data,
      } as AxiosRequestConfig);
    },
    async get(url: string, params?: any) {
      return captureResponseData({
        url,
        method: "GET",
        params,
      } as AxiosRequestConfig);
    },
    async patch(url: string, data?: any) {
      return captureResponseData({
        url,
        method: "PATCH",
        data,
      } as AxiosRequestConfig);
    },
  };

  return wrapperAxios;
};

export default useApi;
