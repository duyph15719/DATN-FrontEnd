import { Image, Space, Table, Tag } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { Button } from "antd/lib/radio";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { bannerList, bannerRemove } from "../../../redux/slice/BannerSlice";

const { Column, ColumnGroup } = Table;

type Props = {};

const ListBanner = (props: Props) => {
  const dispatch = useAppDispatch();
  const { banner } = useAppSelector((state: any) => state.BannerReducer);
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
      if (result.isConfirmed) dispatch(bannerRemove(id));
      {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const columns: any = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "image",
      dataIndex: "image",
      render: (image: any) => <Image width={100} src={image}></Image>,
    },
    {
      title: "url",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Action",
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
  const dataTable = banner.map((item: any) => {
    return {
      title: item.title,
      id: item._id,
      image: item.image,
      url: item.url,
    };
  });
  useEffect(() => {
    dispatch(bannerList());
  }, [dispatch]);
  if (!banner) return <div>Loading...</div>;
  return (
    <div className="pt-10">
      <Link to={"/admin/banner/add"}>
        <Button
          type="primary"
          style={{ borderRadius: "5px", backgroundColor: "#40A9FF" }}
        >
          Thêm Danh mục
        </Button>
      </Link>
      <Table columns={columns} dataSource={dataTable} />
    </div>
  );
};

export default ListBanner;
