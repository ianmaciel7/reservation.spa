import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { ROLE, IUser } from "../provider/authProvider";
import useAuth from "./useAuth";
import useAuthService, { ILogin } from "./useAuthService";
import useLocalStorage from "./useLocalStorage";

export interface Error {
  status: number;
  timestamp: string;
  message: string;
  debugMessage: string;
}

const urlByRole = (user: IUser) => {
  const { type } = user;
  if (type.includes(ROLE.ADMIN)) {
    return "/management";
  }
  return "/requester";
};

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
        const url = urlByRole(auth.user as IUser);
        navigate(url);
      }
    }
  }, [auth, loginRequest.data, loginRequest.isSuccess, navigate]);

  return { loginRequest, form: formik };
};
