import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import useAuthService from "../../../shared/hooks/useAuthService";
import { IUser } from "../../../shared/provider/authProvider";
import {
  ILaboratory,
  ILaboratoryForDataGrid,
  IPagination,
} from "./useLaboratoryDataGrid";
import useLaboratoryService from "./useLaboratoryService";

export default () => {
  const pagination: IPagination = { pageNumber: 0, pageSize: 10 };
  const service = useLaboratoryService();

  const findAllByIdleRequest = useMutation<ILaboratory[], Error, IPagination>(
    service.findAllByIdle
  );
  const findAllRequest = useMutation<ILaboratory[], Error, IPagination>(
    service.findAll
  );

  const formik = useFormik({
    initialValues: {
      filter: 1,
    },
    onSubmit: (values) => {
      switch (values.filter) {
        case 2:
          findAllByIdleRequest.mutateAsync(pagination);
          break;

        default:
          findAllRequest.mutateAsync(pagination);
          break;
      }
    },
  });

  return { findAllRequest, findAllByIdleRequest, form: formik };
};
