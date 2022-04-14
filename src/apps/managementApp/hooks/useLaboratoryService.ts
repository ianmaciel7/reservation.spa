import React from "react";
import useApi from "../../../shared/hooks/useApi";
import { ILaboratory, IPagination } from "./useLaboratoryDataGrid";

const useLaboratoryService = () => {
  const api = useApi();
  const path = "laboratories";

  const endpoints = {
    async findAll(pag: IPagination) {
      return api.get(`${path}/list`,pag);
    },
    async findAllByIdle(pag: IPagination) {
      return api.get(`${path}/list/idle`, pag);
    },
    async findById(id: number) {
      return api.get(`${path}/find/${id}`);
    },
    async add(lab: ILaboratory) {
      return api.post(`${path}/add`, lab);
    },
    async patch(lab: ILaboratory) {
      return api.patch(`${path}/patch`, lab);
    },
  };

  return endpoints;
};

export default useLaboratoryService;
