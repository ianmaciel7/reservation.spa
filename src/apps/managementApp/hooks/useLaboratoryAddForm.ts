/* eslint-disable @typescript-eslint/no-empty-function */
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { Error } from "../../../shared/hooks/useLoginForm";
import { ILaboratory } from "./useLaboratoryDataGrid";
import useLaboratoryService from "./useLaboratoryService";

export default () => {
  const service = useLaboratoryService();

  const addRequest = useMutation<ILaboratory, Error, ILaboratory>(service.add);

  const init: ILaboratory = {
    id: 0,
    name: "",
    number: 0,
    reservation: [],
    sector: "",
  };

  const formik = useFormik({
    initialValues: init,
    onSubmit: (values) => {
      addRequest.mutateAsync(values);
    },
  });

  return { addRequest, form: formik };
};
