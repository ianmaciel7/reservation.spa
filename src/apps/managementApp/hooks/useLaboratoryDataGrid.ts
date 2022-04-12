import React, { useEffect, useMemo, useState } from "react";

import { useMutation } from "react-query";
import { Column } from "react-table";
import DataGrid from "../../../shared/components/dataGrid";
import useLaboratoryFormFilter from "./useLaboratoryFormFilter";
import useLaboratoryService from "./useLaboratoryService";

export interface ILaboratoryForDataGrid {
  action: number;
  name: string;
  location: string;
}

export interface ILaboratory {
  id: number;
  name: string;
  number: number;
  sector: string;
  reservation: [];
}

export interface IPagination {
  pageNumber: number;
  pageSize: number;
}

const useLaboratoryDataGrid = () => {
  const pagination: IPagination = { pageNumber: 0, pageSize: 10 };
  const [rows, setRows] = useState<ILaboratoryForDataGrid[]>([]);
  const { findAllByIdleRequest, findAllRequest, form } =
    useLaboratoryFormFilter();

  useMemo(() => findAllRequest.mutate(pagination), []);

  useEffect(() => {
    if (findAllRequest.isSuccess) {
      const labs = findAllRequest.data?.map(
        (e) =>
          ({
            action: e.id,
            location: e.number + e.sector.toLocaleUpperCase(),
            name: e.name,
          } as ILaboratoryForDataGrid)
      );
      setRows(labs);
    }
  }, [findAllRequest.isSuccess]);

  useEffect(() => {
    if (findAllByIdleRequest.isSuccess) {
      const labs = findAllByIdleRequest.data?.map(
        (e) =>
          ({
            action: e.id,
            location: e.number + e.sector.toLocaleUpperCase(),
            name: e.name,
          } as ILaboratoryForDataGrid)
      );
      setRows(labs);
    }
  }, [findAllRequest.isSuccess]);

  return { findAllRequest, findAllByIdleRequest, rows, form };
};

export default useLaboratoryDataGrid;
