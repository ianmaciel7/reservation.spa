/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { Column } from "react-table";
import { Button, Container, Dropdown, Form, Stack } from "react-bootstrap";
import DataGrid from "../../../shared/components/dataGrid";
import useLaboratoryDataGrid from "../hooks/useLaboratoryDataGrid";
import ErrorFormAlert from "../../../shared/components/errorFormAlert";

type IRow = {
  col1: string;
  col2: string;
};

function LaboratoryDataGridPage() {
  const dataGrid = useLaboratoryDataGrid();
  const columns: Column[] = React.useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "name",
        maxWidth: 0,
      },
      {
        Header: "Localização",
        accessor: "location",
        maxWidth: 0,
      },
      {
        Header: "",
        accessor: "action",
        minWidth: 86,
        maxWidth: 100,
        Cell: ({ value }: any) => (
          <DataGrid.ActionButtons
            id={value}
            urlEdit={`edit/${value}`}
            urlRemove={`remove/${value}`}
          />
        ),
      },
    ],
    []
  );

  if (dataGrid.findAllRequest.isError || dataGrid.findAllByIdleRequest.isError)
    return <div>Error</div>;
  if (
    dataGrid.findAllRequest.isLoading ||
    dataGrid.findAllByIdleRequest.isLoading
  )
    return <>Carregando</>;
  return (
    <Container className="py-5">
      <h1>Laboratórios</h1>
      <br />
      <div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dataGrid.form.handleSubmit(e);
          }}
        >
          <Form.Group className="mb-3" controlId="filter">
            <Form.Label>Filtro</Form.Label>
            <Stack direction="horizontal" className="justify-content-between">
              <Form.Select
                className="w-50"
                name="filter"
                onChange={dataGrid.form.handleChange}
                value={dataGrid.form.values.filter}
              >
                <option value={1} defaultChecked>
                  Sem Filtro
                </option>
                <option value={2}>Ocioso</option>
              </Form.Select>
              <Button type="submit">Filtrar</Button>
            </Stack>
          </Form.Group>
          <br />
        </Form>
      </div>

      <div>
        <DataGrid.AddButton urlAdd="laboratories/add" />
        <DataGrid rows={dataGrid.rows} columns={columns} />
      </div>
    </Container>
  );
}
export default LaboratoryDataGridPage;
