import { render, screen, fireEvent } from "@testing-library/react";
import { Table } from "./Table";

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
];

const data = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

describe("Table component", () => {
  it("renders without crashing", () => {
    render(<Table columns={columns} data={data} />);
  });

  it("displays the correct data", () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
  });

  it("sorts the data correctly", () => {
    render(<Table columns={columns} data={data} />);
    fireEvent.click(screen.getByText("Name"));
    let rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("Jane");
    expect(rows[2]).toHaveTextContent("John");

    fireEvent.click(screen.getByText("Name"));
    rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("John");
    expect(rows[2]).toHaveTextContent("Jane");
  });

  it("changes page size correctly", () => {
    const largeData = Array.from({ length: 50 }, (_, i) => ({
      name: `User ${i + 1}`,
      age: (i + 1) * 2,
    }));

    render(<Table columns={columns} data={largeData} />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: 20 } });
    expect(screen.getAllByRole("row")).toHaveLength(21);
  });
});
