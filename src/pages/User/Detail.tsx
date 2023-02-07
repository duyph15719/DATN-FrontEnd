import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, message, Modal, Row, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { add as addreceiptHistory } from "../../api/receiptHistory";
import { OrderLogsType, RecaiptDetailType } from "../../models/receipt";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getOrderDetail, getOrderHistory, Receiptlist, receiptread, receiptUpdate } from "../../redux/slice/receiptSlice";
import { getStatusOrder } from "../admin/receipt/list";
import { GetUser } from "../Website/Pay/Pay";


const { confirm } = Modal;
const { Text } = Typography;

const OrderDetailUser = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams();
  const { receipts } = useAppSelector((state: any) => state.ReceiptSlice)
  const { order } = useAppSelector((state: any) => state.ReceiptSlice)
  const { orderHistory } = useAppSelector((state: any) => state.ReceiptSlice)
  const [data, setData] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [receiptResult, setReceiptResult] = useState<any>(receipts);
  const currentUser = GetUser();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
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
    if (typeof (receipts) === 'object') {
      setReceiptResult(receipts);
    } else {
      setReceiptResult(receipts.order);
    }
  }, [receipts]);

  useEffect(() => {
    (async () => {
      try {
        const data = await dispatch(receiptread(id)).unwrap();
        setData(data);
        await dispatch(getOrderDetail(id)).unwrap();
        await dispatch(getOrderHistory(id)).unwrap();
        dispatch(Receiptlist())
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
      title: "Tên tài khoản",
      key: "username",
      dataIndex: "userName",
    },
    {
      title: "Trạng thái đơn hàng",
      key: "status",
      dataIndex: "statusOrderLogs",
      render: (stt) => <Tag color={stt === 4 ? "red" : "green"}>{getStatusOrder(stt)}</Tag>,
    },
    {
      title: "Lí do huỷ đơn",
      key: "status",
      dataIndex: "reasonOfOrder",
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
      userName: item.userName,
      statusOrderLogs: item.statusOrderLogs,
      createdAt: item.createdAt,
      reasonOfOrder: item.reasonOfOrder,
    }
  })

  // cập nhật trạng thái đơn hàng
  const handleUpdateStt = (stt: number) => {
    if (stt !== 4) {
      confirm({
        title: "Xác nhận cập nhật trạng thái đơn hàng?",
        icon: <ExclamationCircleOutlined />,
        content: "Không thể hoàn tác sau khi cập nhật",
        async onOk() {
          try {
            await dispatch(receiptUpdate({ _id: id, status: stt })).unwrap();
            await addreceiptHistory({ orderId: id, userId: currentUser.user._id, statusOrderLogs: stt, userName: currentUser.user.firstName + " " + currentUser.user.lastName });
            const data = await dispatch(receiptread(id)).unwrap();
            setData(data);
            await dispatch(getOrderHistory(id)).unwrap();
            dispatch(Receiptlist())
            message.success("Cập nhật trạng thái thành công");
          } catch (error) {
            message.error("Có lỗi xảy ra, vui lòng thử lại");
          }
        },
      });
    } else {
      confirm({
        title: "Xác nhận cập nhật trạng thái đơn hàng?",
        icon: <ExclamationCircleOutlined />,
        content: "Không thể hoàn tác sau khi cập nhật",
        async onOk() {
          try {
            setIsModalOpen1(true);
          } catch (error) {
            message.error("Có lỗi xảy ra, vui lòng thử lại");
          }
        },

      });

    }

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
  const onFinish = async (values: any) => {
    await dispatch(receiptUpdate({ _id: id, status: 4 })).unwrap();
    await addreceiptHistory({ orderId: id, userId: currentUser.user._id, statusOrderLogs: 4, userName: currentUser.user.firstName + " " + currentUser.user.lastName, reasonOfOrder: values.reasonOfOrder });
    const data = await dispatch(receiptread(id)).unwrap();
    setData(data);
    await dispatch(getOrderHistory(id)).unwrap();
    dispatch(Receiptlist())
    message.success("Cập nhật trạng thái thành công");
  };
  return (
    <div className="container mx-auto p-10">
      <Row justify="space-between">
        <Col>
          <Text>
            Đơn hàng đặt lúc <Text mark>{moment(data?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</Text>
            <span> hiện tại </span>
            <Text mark>
              {getStatusOrder(data?.status)} lúc {moment(receipts.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
            </Text>
          </Text>
        </Col>

        <Col>
          {data?.status === 0 && (
            <><Button type="primary" onClick={() => handleUpdateStt(4)} className="ml-1">
              Hủy ĐH
            </Button>
              <Modal title="Lí do huỷ đơn" centered open={isModalOpen1} onOk={handleOk} onCancel={handleCancel} footer={null} width={1000}>
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Lí do"
                    name="reasonOfOrder"
                    rules={[{ required: true, message: 'Please input your reason of Order!' }]}
                  >
                    <Input.TextArea rows={4} />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Modal></>

          )}

          <Button type="primary" className="ml-1" onClick={() => showModal()}>
            Lịch sử ĐH
          </Button>
          <Modal title="Lịch sử hoá đơn" centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800}>
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
          <tr className="border-b">
            <td className="py-1.5 font-medium">Ghi chú:</td>
            <td className="py-1.5 text-right">{data?.note || "Không có ghi chú"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailUser;
