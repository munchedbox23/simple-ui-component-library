import { FC } from "react";
import { useTable, useSortBy, Column, usePagination } from "react-table";
import {
  ArrowDropDown,
  ArrowDropUp,
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import styled from "styled-components";

type TTableProps<D extends object = {}> = {
  columns: Column<D>[];
  data: D[];
};

const TableContainer = styled.div`
  overflow-x: auto;
`;

const TableElement = styled.table`
  table-layout: auto;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #d1d5db;
`;

const ThElement = styled.th`
  padding: 0.5rem 1rem;
  text-align: left;
  background-color: #e5e7eb;
`;

const TdElement = styled.td`
  padding: 0.5rem 1rem;
  border-top: 1px solid #d1d5db;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f3f4f6;
`;

export const Table: FC<TTableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <TableContainer>
        <TableElement {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={`header-group-${i}`}
              >
                {headerGroup.headers.map((column, j) => (
                  <ThElement
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={`header-${i}-${j}`}
                  >
                    {column.render("Header")}
                    {column.isSorted && (
                      <span style={{ marginLeft: "0.5rem" }}>
                        {column.isSortedDesc ? (
                          <ArrowDropDown />
                        ) : (
                          <ArrowDropUp />
                        )}
                      </span>
                    )}
                  </ThElement>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={`row-${i}`}>
                  {row.cells.map((cell, j) => (
                    <TdElement {...cell.getCellProps()} key={`cell-${i}-${j}`}>
                      {cell.render("Cell")}
                    </TdElement>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </TableElement>
      </TableContainer>
      <PaginationContainer>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <FirstPage />
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <ChevronLeft />
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <ChevronRight />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <LastPage />
        </button>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            min={1}
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </PaginationContainer>
    </>
  );
};
