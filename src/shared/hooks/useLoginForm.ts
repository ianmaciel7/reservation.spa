import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Authority, IUser } from "../auth/authProvider";
import useAuth from "../auth/useAuth";
import useAuthService, { ILogin } from "./useAuthService";
import useLocalStorage from "./useLocalStorage";

export interface Error {
  status: number;
  timestamp: string;
  message: string;
  debugMessage: string;
}

export default () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const service = useAuthService();
  const loginRequest = useMutation<IUser, Error, ILogin>(service.login);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      loginRequest.mutateAsync(values as ILogin);
    },
  });

  useEffect(() => {
    if (loginRequest.isSuccess) {
      const value = loginRequest.data;

      auth.signIn(value);

      if (auth != null) {
        const { type } = auth.user;
        if (type.includes(Authority.ADMIN)) navigate("management");
        navigate("/requester");
      }
    }
  }, [loginRequest.isSuccess, navigate]);

  return { loginRequest, form: formik };
};
