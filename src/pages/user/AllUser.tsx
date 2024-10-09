import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TUser } from "../../types";
import UserCreate from "./UserCreate";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// const columns: TableColumnsType<TUser> = [
//   {
//     title: "No.",
//     render: (_, __, index) => `${index + 1}`, // Sequential user number
//   },
//   {
//     title: "First Name",
//     dataIndex: "firstName",
//     showSorterTooltip: { target: "full-header" },

//     sorter: (a, b) =>
//       a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase()),
//     sortDirections: ["ascend", "descend"],
//   },
//   {
//     title: "Last Name",
//     dataIndex: "lastName",
//     showSorterTooltip: { target: "full-header" },

//     sorter: (a, b) =>
//       a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()),
//     sortDirections: ["ascend", "descend"],
//   },
//   {
//     title: "Date Of Birth",
//     dataIndex: "dateOfBirth",
//     defaultSortOrder: "descend",
//     sorter: (a, b) =>
//       new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime(),
//     render: (date: string) => {
//       // Format date to DD/MM/YYYY
//       const dateObj = new Date(date);
//       const day = String(dateObj.getDate()).padStart(2, "0");
//       const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-based
//       const year = dateObj.getFullYear();
//       return `${day}/${month}/${year}`;
//     },
//   },
//   {
//     title: "City",
//     dataIndex: "city",
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//   },
//   {
//     title: "Phone Number",
//     dataIndex: "phone",
//   },
//   {
//     title: "Actions",
//     render: (_, record: TUser) => (
//       <>
//         <Button
//           onClick={() => handleEdit(record)}
//           type='primary'
//           style={{ marginRight: 8 }}
//         >
//           Edit
//         </Button>
//         <Button onClick={() => handleDelete(record.id)} type='danger'>
//           Delete
//         </Button>
//       </>
//     ),
//   },
// ];

// const data: TUser[] =
//   JSON.parse(localStorage.getItem("users") || "[]").map(
//     (user: TUser, index: number) => ({
//       ...user,
//       key: user.id || index.toString(), // Use user.id if available, otherwise fallback to index
//     })
//   ) || [];
const AllUser = () => {
  //   console.log({ users });
  const [data, setData] = useState<TUser[]>([]);
  const [isNewUser, setIsNewUser] = useState(false);
  const [editingUser, setEditingUser] = useState<TUser | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange: TableProps<TUser>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const loadData = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]").map(
      (user: TUser, index: number) => ({
        ...user,
        key: user.id || index.toString(),
      })
    );
    setData(users);
  };

  useEffect(() => {
    loadData();
  }, [isNewUser]);

  const handleEdit = (user: TUser) => {
    setEditingUser(user);
    setIsModalVisible(true);
    setIsModalOpen(!isModalOpen);
    console.log({ editingUser });
  };

  const handleDelete = (userId: string) => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = existingUsers.filter(
      (user: TUser) => user.id !== userId
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    loadData(); // Refresh the table data
    toast.success("User deleted successfully");
  };

  const columns: TableColumnsType<TUser> = [
    {
      title: "No.",
      render: (_, __, index) => `${index + 1}`, // Sequential user number
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      showSorterTooltip: { target: "full-header" },

      sorter: (a, b) =>
        a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase()),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      showSorterTooltip: { target: "full-header" },

      sorter: (a, b) =>
        a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Date Of Birth",
      dataIndex: "dateOfBirth",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime(),
      render: (date: string) => {
        // Format date to DD/MM/YYYY
        const dateObj = new Date(date);
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const year = dateObj.getFullYear();
        return `${day}/${month}/${year}`;
      },
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      render: (_, record: TUser) => (
        <>
          <Button
            onClick={() => handleEdit(record)}
            type='primary'
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(record.id)}
            color='danger'
            variant='solid'
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <div>
        <UserCreate
          setIsNewUser={setIsNewUser}
          isNewUser={isNewUser}
          editingUser={editingUser}
          isModalVisible={isModalVisible} // Pass this to UserCreate
          setIsModalVisible={setIsModalVisible}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      </div>
      <Table<TUser>
        columns={columns}
        dataSource={data}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AllUser;
