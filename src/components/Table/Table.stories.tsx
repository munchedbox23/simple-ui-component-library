import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: { type: "object" },
      description: "Columns configuration for the table",
    },
    data: {
      control: { type: "object" },
      description: "Data to be displayed in the table",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleColumns = [
  { Header: "Name", accessor: "name" },
  { Header: "Account", accessor: "account" },
  { Header: "Email", accessor: "email" },
  { Header: "Group", accessor: "group" },
  { Header: "Phone", accessor: "phone" },
];

const sampleData = [
  {
    name: "John Doe",
    account: "johndoe",
    email: "john.doe@example.com",
    group: "Group A",
    phone: "+1234567890",
  },
  {
    name: "Jane Smith",
    account: "janesmith",
    email: "jane.smith@example.com",
    group: "Group B",
    phone: "+0987654321",
  },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};
