
import React from 'react'

type Props = {}

const detail = (props: Props) => {
  return (
    <div>detail</div>
  )
}

export default detail// // import { message } from 'antd';
// // import React, { useEffect } from 'react'
// // import { useParams } from 'react-router-dom'
// // import { useAppDispatch, useAppSelector } from '../../../redux/hook';
// // import { getOrderDetail } from '../../../redux/slice/receiptSlice';
// // type Props = {}

// // const cartDetail = (props: Props) => {
// //     // eslint-disable-next-line react-hooks/rules-of-hooks
// //     const { id } = useParams();
// //     const dispatch = useAppDispatch()
// //     const { receipts } = useAppSelector((state: any) => state.ReceiptSlice)
// //     useEffect(() => {
// //         (async () => {
// //           try {
// //             await dispatch(getOrderDetail(id)).unwrap();
// //           } catch (error) {
// //             message.error("Có lỗi xảy ra");
// //           }
// //         })();
// //       }, []);
// //     return (

// //         <div>
// //             <div className="main w-[1240px] mx-auto mt-[112px] mb-[160px]">
// //                 <div className="grid grid-cols-2">
// //                     <div className="">
// //                         <div className="">
// //                             <p className="mb-[26px]">Mã đơn: <a href="">{id}</a></p>
// //                             <p className="mb-[26px]">Thông tin giao hàng:</p>
// //                             <div className="border border-[#A4A5AE] w-10/12	h-[200px]">
// //                                 <div className="py-[30px] ml-[24px] ">
// //                                     <p className="mt-[4px]">Tên: <a href="">Nguyễn Văn A</a></p>
// //                                     <p className="py-[10px]">Địa chỉ: <a href="">Mê Linh, Hà Nội</a></p>
// //                                     <p>SĐT: <a href="">0987654321</a></p>
// //                                     <p className="py-[10px]">Email: <a href="">example@gmail.com</a></p>
// //                                 </div>
// //                             </div>
// //                         </div>
// // </div>
// //                     <div className="">
// //                         <div className="ml-[60px]">
// //                             <p className="mb-[26px]">Ngày tạo: <a href="">22/9/2022 11:22:25</a></p>
// //                             <p className="mb-[26px]">Ghi chú:</p>
// //                             {/* <textarea name="" className="border border-[#A4A5AE] w-full	h-[200px]">

// //                             </textarea> */}

// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="border-solid border-2 border-[#C4C4C4] mt-[40px] w-full">

// //                     <div className="overflow-x-auto relative">
// //                         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
// //                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
// //                                 <tr>
// //                                     <th scope="col" className="py-3 px-6 text-base">
// //                                         Sản phẩm
// //                                     </th>
// //                                     <th scope="col" className="py-3 px-6 text-base">
// //                                         Đơn giá
// //                                     </th>
// //                                     <th scope="col" className="py-3 px-6 text-base">
// //                                         Số Lượng
// //                                     </th>
// //                                     <th scope="col" className="py-3 px-6 text-base">
// //                                         Tổng
// //                                     </th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
// //                                     <th scope="row"
// //                                         className="flex py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[240px]">
// //                                         <p className="ml-[40px] my-auto text-base">Tên Sản Phẩm</p>
// //                                     </th>
// //                                     <td className="py-4 px-6 text-base">
// //                                         <p><a href="">100.000 </a>vnđ</p>
// //                                         <p className="mt-[10px]">20%</p>
// //                                     </td>
// //                                     <td className="py-4 px-6 text-base">
// //                                         2
// //                                     </td>
// //                                     <td className="py-4 px-6 text-base ">
// //                                         <p><a href="">160.000 </a>vnđ</p>
// //                                     </td>
// //                                 </tr>


// //                             </tbody>
// //                         </table>
// //                     </div>

// //                     <hr className="w-full" />
// //                     <div className="grid grid-cols-2 h-[59px]">

// //                         <div></div>
// //                         <div className=" my-auto flex">
// //                             <a href="" className="text-lg text-[#000000] ml-[84px]">Tổng tiền: </a>
// //                             <p><a href="" className="text-lg ml-[220px] text-[#E22C43]">160.000 vnđ</a></p>


// //                         </div>
// //                     </div>

// //                 </div>
// //                 <div className="flex relative mt-[60px]">
// //                     <div>
// //                         <h2 className="ml-[40px] text-xl">Trạng Thái Đơn Hàng</h2>
// //                     </div>
// //                     <div className="absolute right-0">
// //                         <button className="w-[260px] h-[60px] bg-[#E22C43] text-slate-50 hover:bg-amber-400">Đang Xử Lý</button><br />
// //                         <button className="w-[260px] h-[60px] bg-[#060606] text-slate-50 mt-[30px] hover:bg-red-700">Hủy Đơn Hàng</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default cartDetail

// import { Button, Col, Image, message, Row, Modal, Table, Typography } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import { ExclamationCircleOutlined } from "@ant-design/icons";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import moment from "moment";
// import { getOrderDetail, receiptUpdate } from "../../../redux/slice/receiptSlice";
// import { RecaiptType, RecaiptDetailType } from "../../../models/receipt";
// import { GetUser } from "../../Website/Pay/Pay";
// import { useAppDispatch, useAppSelector } from "../../../redux/hook";
// import { getStatusOrder } from "./list";

// const { confirm } = Modal;
// const { Text } = Typography;

// const OrderDetail = () => {
//     const dispatch = useAppDispatch()
//     const { order } = useAppSelector((state: any) => state.ReceiptSlice)
//     const [showLog, setShowLog] = useState(false);
//     const currentUser = GetUser();

//     const { id } = useParams();

//     useEffect(() => {
//         (async () => {
//             try {
//                 await dispatch(getOrderDetail(id)).unwrap();
//             } catch (error) {
//                 message.error("Có lỗi xảy ra");
//             }
//         })();
//     }, []);

//     const columns: ColumnsType<RecaiptDetailType> = [
//         {
//             title: "#",
//             key: "#",
//             render: (_, item, index) => <Text>{++index}</Text>,
//         },
//         {
//             title: "Name",
//             key: "name",
//             render: (_, record) => <Text className="text-[#1890ff]">{record.productName}</Text>   
//         },
//         {
//             title: "Image",
//             key: "image",
//             render: (_, record) => <Image src={record.image} width={100} height={100} className="object-cover" />,
//         },
//         {
//             title: "Price",
//             key: "price",
//             dataIndex: "productPrice",
//             render: (price) => <Text>{(price)}</Text>,
//         },
//         {
//             title: "Quantity",
//             key: "quantity",
//             dataIndex: "quantity",
//             render: (qnt) => <Text>{qnt}</Text>,
//         },
//         {
//             title: "Total",
//             key: "total",
//             render: (_, record) => (
//                 <Text>{record.total}</Text>
//             ),
//         },
//     ];

//     // cập nhật trạng thái đơn hàng
//     const handleUpdateStt = (stt: number) => {
//         confirm({
//             title: "Xác nhận cập nhật trạng thái đơn hàng?",
//             icon: <ExclamationCircleOutlined />,
//             content: "Không thể hoàn tác sau khi cập nhật",
//             async onOk() {
//                 try {
//                     const res = await dispatch(receiptUpdate({ _id: id, status: stt })).unwrap();
//                     await OrderApi.addOrderLog({ orderId: id, userId: currentUser._id, status: stt, createdAt: res.updatedAt });

//                     message.success("Cập nhật trạng thái thành công");
//                 } catch (error) {
//                     message.error("Có lỗi xảy ra, vui lòng thử lại");
//                 }
//             },
//         });
//     };

//     return (
//     <>
//                 <div className="grid grid-cols-2">
//                     <div className="">
//                         <div className="">
//                             <p className="mb-[26px]">Mã đơn: <a href="">{id}</a></p>
//                             <p className="mb-[26px]">Thông tin giao hàng:</p>
//                             <div className="border border-[#A4A5AE] w-10/12	h-[200px]">
//                                 <div className="py-[30px] ml-[24px] ">
//                                     <p className="mt-[4px]">Tên: <a href="">Nguyễn Văn A</a></p>
//                                     <p className="py-[10px]">Địa chỉ: <a href="">Mê Linh, Hà Nội</a></p>
//                                     <p>SĐT: <a href="">0987654321</a></p>
//                                     <p className="py-[10px]">Email: <a href="">example@gmail.com</a></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="">
//                         <div className="ml-[60px]">
//                             <p className="mb-[26px]">Ngày tạo: <a href="">22/9/2022 11:22:25</a></p>
//                             <p className="mb-[26px]">Ghi chú:</p>
//                             {/* <textarea name="" className="border border-[#A4A5AE] w-full	h-[200px]">

//                              </textarea> */}

//                         </div>
//                     </div>
//                 </div>
//                 <Row justify="space-between">
//                     <Col>
//                         <Text>
//                             Đơn hàng đặt lúc <Text mark>{moment(order.order?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</Text>
//                             <span> hiện tại </span>
//                             <Text mark>
//                                 {getStatusOrder(order.order?.status)} lúc {moment(order.order?.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
//                             </Text>
//                         </Text>
//                     </Col>

//                     <Col>
//                         {order.order?.status === 0 ? (
//                             <Button type="primary" onClick={() => handleUpdateStt(1)}>
//                                 Xác nhận ĐH
//                             </Button>
//                         ) : order.order?.status === 1 ? (
//                             <Button type="primary" onClick={() => handleUpdateStt(2)}>
//                                 Đang giao hàng
//                             </Button>
//                         ) : order.order?.status === 2 ? (
//                             <Button type="primary" onClick={() => handleUpdateStt(3)}>
//                                 Đã giao hàng
//                             </Button>
//                         ) : (
//                             ""
//                         )}

//                         {order.order?.status !== 3 && order.order?.status !== 4 && (
//                             <Button type="primary" onClick={() => handleUpdateStt(4)} className="ml-1">
//                                 Hủy ĐH
//                             </Button>
//                         )}

//                         <Button type="primary" className="ml-1" onClick={() => setShowLog(true)}>
//                             Lịch sử ĐH
//                         </Button>
//                     </Col>
//                 </Row>

//                 <Typography.Title level={3} style={{ margin: "8px 0 8px" }}>
//                     Chi tiết đơn hàng
//                 </Typography.Title>

//                 <Table columns={columns} dataSource={order.orderDetail} pagination={false} rowKey="_id" />

//                 <Typography.Title level={3} style={{ margin: "16px 0 0" }}>
//                     Tổng thanh toán
//                 </Typography.Title>

//                 <table className="text-gray-600 w-full text-left">
//                     <tbody>
//                         <tr className="border-b">
//                             <td className="py-1.5 font-medium">Tiền tạm tính:</td>
//                             <td className="py-1.5 text-right">{(order.order?.totalPrice)}</td>
//                         </tr>
//                         {order.order?.voucherText && (
//                             <>
//                                 <tr className="border-b">
//                                     <td className="py-1.5 font-medium">Voucher đã sử dụng</td>
//                                     <td className="py-1.5 text-right">{order.order?.voucherText}</td>
//                                 </tr>
//                                 <tr className="border-b">
//                                     <td className="py-1.5 font-medium">Tổng giảm:</td>
//                                     <td className="py-1.5 text-right">{(order.order?.priceDecrease)}</td>
//                                 </tr>
//                             </>
//                         )}
//                         <tr>
//                             <td className="py-1.5 font-medium">Tổng tiền:</td>
//                             <td className="py-1.5 text-right">
//                                 {((order.order?.totalPrice || 0) - (order.order?.priceDecrease || 0))}
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <Typography.Title level={3} style={{ margin: "16px 0 0" }}>
//                     Thông tin vận chuyển
//                 </Typography.Title>

//                 <table className="mt-1 text-gray-600 w-full text-left">
//                     <tbody>
//                         <tr className="border-b">
//                             <td className="py-1.5 font-medium">Họ và tên:</td>
//                             <td className="py-1.5 text-right">{order.order?.customerName}</td>
//                         </tr>
//                         <tr className="border-b">
//                             <td className="py-1.5 font-medium">Địa chỉ:</td>
//                             <td className="py-1.5 text-right">{order.order?.address}</td>
//                         </tr>
//                         <tr className="border-b">
//                             <td className="py-1.5 font-medium">Số điện thoại:</td>
//                             <td className="py-1.5 text-right">{order.order?.phone}</td>
//                         </tr>
//                         <tr className="border-b">
//                             <td className="py-1.5 font-medium">Email:</td>
//                             <td className="py-1.5 text-right">{order.order?.email}</td>
//                         </tr>
//                         <tr className="border-b">
//                             <td className="py-1.5 font-medium">Thời gian đặt:</td>
//                             <td className="py-1.5 text-right">{moment(order.order?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</td>
//                         </tr>
//                         <tr>
//                             <td className="py-1.5 font-medium">Ghi chú:</td>
//                             <td className="py-1.5 text-right">{order.order?.message || "Không có ghi chú"}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </>
//             );
// };

//             export default OrderDetail;
