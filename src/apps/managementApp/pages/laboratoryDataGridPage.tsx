/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { Column } from "react-table";
import { Container } from "react-bootstrap";
import DataGrid from "../../../shared/components/dataGrid";

function LaboratoryDataGridPage() {
  type IRow = {
    col1: string;
    col2: string;
  };

  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns: Column[] = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1",
        maxWidth: 70,
        minWidth: 50,
        width: 60,
      },
      {
        Header: "Column 2",
        accessor: "col2",
        maxWidth: 10,
        width: 10,
        Cell: ({ value }: any) => {
          console.log(value);
          return <DataGrid.ActionButtons id={value} />;
        },
      },
    ],
    []
  );

  return (
    <Container>
      <DataGrid rows={data} columns={columns} />
    </Container>
  );
}
export default LaboratoryDataGridPage;
