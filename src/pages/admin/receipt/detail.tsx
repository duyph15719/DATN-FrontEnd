import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Col, Image, message, Modal, Row, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { add as addreceiptHistory } from "../../../api/receiptHistory";
import { OrderLogsType, RecaiptDetailType } from "../../../models/receipt";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getOrderDetail, getOrderHistory, receiptread, receiptUpdate } from "../../../redux/slice/receiptSlice";
import { GetUser } from "../../Website/Pay/Pay";
import { getStatusOrder } from "./list";

const { confirm } = Modal;
const { Text } = Typography;

const OrderDetail = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams();
  const { receipts } = useAppSelector((state: any) => state.ReceiptSlice)
  const { order } = useAppSelector((state: any) => state.ReceiptSlice)
  const { orderHistory } = useAppSelector((state: any) => state.ReceiptSlice)
  const [data, setData] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const currentUser = GetUser();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns: ColumnsType<RecaiptDetailType> = [
    {
      title: "STT",
      key: "#",
      render: (_, item, index) => <Text>{++index}</Text>,
    },
    {
      title: "Tên sản phẩm",
      key: "name",
      render: (_, record) => <Text className="text-[#1890ff]">{record.productName}</Text>
    },
    {
      title: "Hình ảnh",
      key: "image",
      render: (_, record) => <Image src={record.image} width={100} height={100} className="object-cover" />,
    },
    {
      title: "Màu",
      key: "color",
      render: (_, record) => <Text className="text-[#1890ff]">{record.colorName}</Text>
    },
    {
      title: "Size",
      key: "size",
      render: (_, record) => <Text className="text-[#1890ff]">{record.sizeName}</Text>
    },
    {
      title: "Giá tiền",
      key: "price",
      dataIndex: "price",
      render: (price) => <Text>{(price)}</Text>,
    },
    {
      title: "Số lượng",
      key: "quantity",
      dataIndex: "quantity",
      render: (qnt) => <Text>{qnt}</Text>,
    },
    {
      title: "Tổng",
      key: "total",
      render: (_, record) => (
        <Text>{record.total}</Text>
      ),
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const data = await dispatch(receiptread(id)).unwrap();
        setData(data);
        await dispatch(getOrderDetail(id)).unwrap();
        await dispatch(getOrderHistory(id)).unwrap();
      } catch (error) {
        message.error("Có lỗi xảy ra");
      }
    })();
  }, [dispatch]);
  const History: ColumnsType<OrderLogsType> = [
    {
      title: "STT",
      key: "#",
      render: (_, item, index) => <Text>{++index}</Text>,
    },
    {
      title: "Tài khoản",
      key: "username",
      dataIndex:"userName",
    },
    {
      title: "Trạng thái đơn hàng",
      key: "status",
      dataIndex: "statusOrderLogs",
      render: (stt) => <Tag color={stt === 4 ? "red" : "green"}>{getStatusOrder(stt)}</Tag>,
    },
    {
      title: "Thời gian sửa đổi",
      key: "timeOrder",
      dataIndex: "createdAt",
      render: (time) => <Text className="text-[#1890ff]">{moment(time).format("DD/MM/YYYY HH:mm:ss")}</Text>,
    },
  ];
  const dataTableHistory = orderHistory?.map((item: any, index: any) => {
    return {
      key: index,
      orderId: item.orderId,
      id: item._id,
      userName:item.userName,
      statusOrderLogs: item.statusOrderLogs,
      createdAt: item.createdAt
    }
  })
  
  // cập nhật trạng thái đơn hàng
  const handleUpdateStt = (stt: number) => {
    confirm({
      title: "Xác nhận cập nhật trạng thái đơn hàng?",
      icon: <ExclamationCircleOutlined />,
      content: "Không thể hoàn tác sau khi cập nhật",
      async onOk() {
        try {
          await dispatch(receiptUpdate({ _id: id, status: stt })).unwrap();      
          setIsUpdate(true);    
          // await addreceiptHistory({ orderId: id, userId: currentUser.user._id, statusOrderLogs: stt ,userName:currentUser.user.username});
          message.success("Cập nhật trạng thái thành công");
        } catch (error) {
          message.error("Có lỗi xảy ra, vui lòng thử lại");
        }
      },
    });
  };
  const dataTable = order?.map((item: any, index: any) => {
    return {
      key: index,
      productName: item.productName,
      id: item._id,
      quantity: item.quantity,
      sizeName: item.sizeName,
      price: item.price,
      colorName: item.colorName,
      image: item.image,
      total: item.total,
    }
  })
  return (
    <>
      <Row justify="space-between">
        <Col>
          <Text>
            Đơn hàng đặt lúc <Text mark>{moment(data?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</Text>
            <span> hiện tại </span>
            <Text mark>
              {getStatusOrder(isUpdate ? receipts.order.status : receipts.status)} lúc {moment(receipts.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
               
            </Text>
          </Text>
        </Col>

        <Col>
          {isUpdate ? receipts.order?.status  : receipts.status  === 0 ? (
            <Button type="primary" onClick={() => handleUpdateStt(1)}>
              Xác nhận ĐH
            </Button>
          ) : isUpdate ? receipts.order?.status  : receipts.status  === 1 ? (
            <Button type="primary" onClick={() => handleUpdateStt(2)}>
              Đang giao hàng
            </Button>
          ) : isUpdate ? receipts.order?.status : receipts.status  === 2 ? (
            <Button type="primary" onClick={() => handleUpdateStt(3)}>
              Đã giao hàng
            </Button>
          ) : (
            ""
          )}

          {receipts.status=== 0  && (
            <Button type="primary" onClick={() => handleUpdateStt(4)} className="ml-1">
              Hủy ĐH
            </Button>
          )}

          <Button type="primary" className="ml-1" onClick={() => showModal()}>
            Lịch sử ĐH
          </Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Table columns={History} dataSource={dataTableHistory} pagination={false} rowKey="_id" />
          </Modal>
        </Col>
      </Row>

      <Typography.Title level={3} style={{ margin: "8px 0 8px" }}>
        Chi tiết đơn hàng
      </Typography.Title>

      <Table columns={columns} dataSource={dataTable} pagination={false} rowKey="_id" />

      <Typography.Title level={3} style={{ margin: "16px 0 0" }}>
        Tổng thanh toán
      </Typography.Title>

      <table className="text-gray-600 w-full text-left">
        <tbody>
          <tr className="border-b">
            <td className="py-1.5 font-medium">Tiền tạm tính:</td>
            <td className="py-1.5 text-right">{data?.total}</td>
          </tr>
          <tr>
            <td className="py-1.5 font-medium">Tổng tiền:</td>
            <td className="py-1.5 text-right">
              {data?.total}
            </td>
          </tr>
        </tbody>
      </table>

      <Typography.Title level={3} style={{ margin: "16px 0 0" }}>
        Thông tin vận chuyển
      </Typography.Title>

      <table className="mt-1 text-gray-600 w-full text-left">
        <tbody>
          <tr className="border-b">
            <td className="py-1.5 font-medium">Họ và tên:</td>
            <td className="py-1.5 text-right">{data?.name}</td>
          </tr>
          <tr className="border-b">
            <td className="py-1.5 font-medium">Địa chỉ:</td>
            <td className="py-1.5 text-right">{data?.address}</td>
          </tr>
          <tr className="border-b">
            <td className="py-1.5 font-medium">Số điện thoại:</td>
            <td className="py-1.5 text-right">{data?.phone}</td>
          </tr>
          <tr className="border-b">
            <td className="py-1.5 font-medium">Email:</td>
            <td className="py-1.5 text-right">{data?.email}</td>
          </tr>
          <tr className="border-b">
            <td className="py-1.5 font-medium">Thời gian đặt:</td>
            <td className="py-1.5 text-right">{moment(data?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</td>
          </tr>
          <tr>
            <td className="py-1.5 font-medium">Ghi chú:</td>
            <td className="py-1.5 text-right">{data?.note || "Không có ghi chú"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrderDetail;
