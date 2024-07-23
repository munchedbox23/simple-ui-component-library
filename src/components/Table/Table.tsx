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
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import cn from "classnames";

type TTableProps<D extends object = {}> = {
  columns: Column<D>[];
  data: D[];
};

const tableStyles = cva("table-auto w-full", {
  variants: {
    variant: {
      default: "border-collapse border border-gray-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const thStyles = cva("px-4 py-2 text-left", {
  variants: {
    variant: {
      default: "bg-gray-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const tdStyles = cva("px-4 py-2 border-t border-gray-300", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const paginationStyles = cva("flex items-center justify-between mt-4", {
  variants: {
    variant: {
      default: "bg-gray-100 p-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

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
      <motion.div className="overflow-x-auto">
        <table {...getTableProps()} className={cn(tableStyles())}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={`header-group-${i}`}
              >
                {headerGroup.headers.map((column, j) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={`header-${i}-${j}`}
                    className={cn(thStyles())}
                  >
                    {column.render("Header")}
                    {column.isSorted && (
                      <span className="ml-2">
                        {column.isSortedDesc ? (
                          <ArrowDropDown />
                        ) : (
                          <ArrowDropUp />
                        )}
                      </span>
                    )}
                  </th>
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
                    <td
                      {...cell.getCellProps()}
                      key={`cell-${i}-${j}`}
                      className={cn(tdStyles())}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
      <div className={cn(paginationStyles())}>
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
      </div>
    </>
  );
};
