import { Image, Space, Table, Typography, Modal, message, Tag, Button } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserList, UserRemove } from "../../../redux/slice/userslice";
import { IUsers } from "../../../models/User";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import moment from "moment";
const { Text } = Typography;
const { confirm } = Modal;

type Props = {};

const UserManager = (props: Props) => {
  const [page, setPage] = useState(1);
  const { users } = useAppSelector((state: any) => state.UserReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(
      UserList(),
    );
  }, [dispatch]);
  const dataTable = users.map((item: any) => {
    return {
      name: item.name,
      birthday: item.birthday,
      email: item.email,
      id: item._id,
      firstName: item.firstName,
      gender: item.gender,
      lastName: item.lastName,
      note: item.note,
      phone: item.phone,
      role: item.role,
      createdAt: item.createdAt,
    };
  });
  const columns: ColumnsType<IUsers> = [
    {
      title: "#",
      key: "#",
      render: (_, item, index) => <Text>{(page - 1) * 10 + index + 1}</Text>,
    }, 
    {
      title: "Mã tài khoản",
      key: "_id",
      dataIndex: "id",
      render: (id) => <Text className="text-[#1890ff]">{id}</Text>,
    },
    {
      title: "Thông tin tài khoản",
      key: "name",
      render: (name: string, record) => (
        <>
          <Text className="text-[#1890ff]">{record.firstName+" "+record.lastName}</Text>
          <Text className="block">{record.email}</Text>
          <Text className="block">{record.gender}</Text>
          <Text className="block">{record.birthday}</Text>
          <Text className="block">{record.note}</Text>
        </>
      ),
    },
    {
      title: "Thời gian đăng ký",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (time) => <Text className="text-[#1890ff]">{moment(time).format("DD/MM/YYYY HH:mm:ss")}</Text>,
    },
    {
      title: "Số điện thoại",
      key: "phone",
      dataIndex: "phone",
      render: (phone) => <Text className="text-[#1890ff]">{phone}</Text>,
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      render: (role) => <Tag color={role ? "blue" : ""}>{role ? "Admin" : "User"}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "role",
      render: (item: any,record) => (
        <Space size="middle">
          <Button
            type="link"
            disabled={record._id || item==1}
            onClick={() => handleRemove(record._id)}
          >
            Delete
          </Button>
        </Space>
    ),
    },
  ];

  const handleRemove = async (id?: string) => {
    confirm({
      title: "Bạn có chắc chắn muốn xóa không?",
      icon: <ExclamationCircleOutlined />,
      content: "Không thể hoàn tác sau khi xóa",
      async onOk() {
        try {
          await dispatch(UserRemove(id)).unwrap();
          dispatch(UserList());
          message.success("Xóa tài khoản thành công");
        } catch (error) {
          message.error("Có lỗi xảy ra");
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <Table
      columns={columns}
      dataSource={dataTable}
      pagination={{
        onChange(current) {
          setPage(current);
        },
      }}
      rowKey="_id"
    />
  );
};

export default UserManager;
