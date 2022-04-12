/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Button, Table } from "react-bootstrap";
import { Column, Row as RowPresentation, useTable } from "react-table";
import "./datagrid.scss";

interface IDataGrid {
  columns: Column[];
  rows: any[];
}

function ActionButtons({ id }: { id: number }) {
  return (
    <td className="action-buttons">
      <Button data-id={id}>Adicionar</Button>
      <Button data-id={id}>Remover</Button>
    </td>
  );
}

const generateStyle = (cell: any) => {
  const style: any = {};
  if (cell.column?.maxWidth !== 0) style.maxWidth = cell.column?.maxWidth;
  if (cell.column?.minWidth !== 0) style.minWidth = cell.column?.minWidth;
  if (cell.column?.width !== 0) style.width = cell.column?.width;

  return style;
};

function DataGrid({ columns, rows }: IDataGrid) {
  const tableInstance = useTable({ columns, data: rows });

  return (
    <Table striped bordered hover>
      <thead>
        {
          // Loop over the header rows
          tableInstance.headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...tableInstance.getTableBodyProps()}>
        {tableInstance.rows.map((row) => {
          tableInstance.prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps({
                    style: generateStyle(cell),
                  })}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

DataGrid.ActionButtons = ActionButtons;
export default DataGrid;
