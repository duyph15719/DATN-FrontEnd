import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Image, Space, Table, Typography } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { categoriesList } from "../../../redux/slice/categoriesSlice";

import { productList, productRemove } from "../../../redux/slice/productSlice";

import type { ColumnsType } from "antd/es/table";

type Props = {};

const ListProduct = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setID] = useState("");
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.ProductReducer);
  const { categories } = useAppSelector(
    (state: any) => state.CategoriesReducer
  );

  const dataTable = products.map((item: any) => {
    return {
      name: item.name,
      price: item.price,
      description: item.description,
      id: item._id,
      image: item.image,
      category: item.categoryId?.name,
    };
  });
  const { Text } = Typography;
  const remove = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) dispatch(productRemove(id));
      {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const columns: any = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (image: any) => <Image width={100} src={image}></Image>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (item: any) => <Text className="text-[#1890ff]">{new Intl.NumberFormat().format(item)} VND</Text>,
    },

    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      filters: categories.map((item: any) => {
        return {
          text: item.name,
          value: item.name,
        };
      }),
      onFilter: (value: string, record: any) => record.category.includes(value),
      filterSearch: true,
    },

    {
      title: "Tùy chọn",
      key: "action",
      render: (item: any) => (
        <Space size="middle">
          <DeleteOutlined onClick={() => remove(item.id)}>
            Delete
          </DeleteOutlined>
          <Link to={`edit/${item.id}`}>
            <EditOutlined />
          </Link>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(categoriesList());
    dispatch(productList());
  }, [dispatch]);
  if (!products) return <div>Loading...</div>;
  return (
    <div>
      <Link to={"/admin/product/add"}>
        <Button
          type="primary"
          style={{ borderRadius: "5px", backgroundColor: "#40A9FF" }}
        >
          Thêm Sản Phẩm
        </Button>
      </Link>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>
              {" "}
              <div dangerouslySetInnerHTML={{ __html: record?.description }} />
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={dataTable}
      />
    </div>
  );
};

export default ListProduct;
