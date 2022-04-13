import React from "react";
import useApi from "../../../shared/hooks/useApi";
import { ILaboratory, IPagination } from "./useLaboratoryDataGrid";

const useLaboratoryService = () => {
  const api = useApi();
  const path = "laboratories";

  const endpoints = {
    async findAll(pag: IPagination) {
      return (await api.get(`${path}/list`, { params: pag })).data;
    },
    async findAllByIdle(pag: IPagination) {
      return (await api.get(`${path}/list/idle`, { params: pag })).data;
    },
    async add(lab: ILaboratory) {
      return (await api.post(`${path}/add`, lab)).data;
    },
  };

  return endpoints;
};

export default useLaboratoryService;
