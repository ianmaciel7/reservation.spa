import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { ILaboratory } from "./useLaboratoryDataGrid";
import useLaboratoryService from "./useLaboratoryService";
import { Error } from "../../loginApp/hooks/useLoginForm";

export default () => {
  const [id, setId] = useState<number>();
  const params = useParams();

  const service = useLaboratoryService();

  const findRequest = useMutation<ILaboratory, Error, number>(service.findById);
  const editRequest = useMutation<ILaboratory, Error, ILaboratory>(
    service.patch
  );

  useMemo(() => {
    const paramId = parseInt(params.id as string, 10);
    if (!id && paramId !== 0) setId(paramId);
  }, [id, params.id]);

  useMemo(async () => {
    const shouldNotFetch =
      !findRequest.isIdle ||
      findRequest.isLoading ||
      id === 0 ||
      id === undefined;

    if (shouldNotFetch) return;
    await findRequest.mutateAsync(id as number);
  }, [findRequest, id]);

  const init: ILaboratory = {
    id: findRequest.data?.id || 0,
    name: findRequest.data?.name || "",
    number: findRequest.data?.number || 0,
    reservation: findRequest.data?.reservation || [],
    sector: findRequest.data?.sector || "",
  };

  const formik = useFormik({
    initialValues: init,
    enableReinitialize: true,
    onSubmit: (values) => {
      editRequest.mutateAsync(values);
    },
  });

  return { editRequest, findRequest, form: formik };
};
