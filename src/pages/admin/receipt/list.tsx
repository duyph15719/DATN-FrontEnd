// import {  Space, Table, Tag, Typography } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import moment from "moment";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { RecaiptType } from "../../../models/receipt";
// import { useAppDispatch, useAppSelector } from "../../../redux/hook";
// import { Receiptlist } from "../../../redux/slice/receiptSlice";
// //import { formatCurrency, getStatusOrder, updateTitle } from "../../../utils";

// export const getStatusOrder = (status?: number) => {
//     let statusText;

//     if (status === 0) {
//         statusText = "Đơn hàng mới";
//     } else if (status === 1) {
//         statusText = "Đã xác nhận";
//     } else if (status === 2) {
//         statusText = "Đang giao hàng";
//     } else if (status === 3) {
//         statusText = "Đã giao hàng";
//     } else if (status === 4) {
//         statusText = "Đã hủy";
//     } else {
//         statusText = "Lỗi";
//     }

//     return statusText;
// };
// export const getPaymentsOrder = (status?: number) => {
//     let statusText;

//     if (status === 0) {
//         statusText = "Thanh toán tiền mặt";
//     } else if (status === 1) {
//         statusText = "Thanh toán online";
//     } else if (status === 2) {
//         statusText = "Đã hủy";
//     } else {
//         statusText = "Lỗi";
//     }

//     return statusText;
// };
// const { Text } = Typography;
// type Props = {};

// const OrderManager = (props: Props) => {
//     const dispatch = useAppDispatch()
//     const { stores } = useAppSelector((state: any) => state.receiptSlice)

//     //console.log(stores);

//     const columns: ColumnsType<RecaiptType> = [
//         // {
//         //     title: "#",
//         //     key: "#",
//         //     render: (_, item, index) => <Text>{(page - 1) * 10 + index + 1}</Text>,
//         // },
//         {
//             title: "Name",
//             key: "name",
//             dataIndex: "name",
//             render: (item, record) => (
//                 <>
//                     <Text className="text-[#1890ff]">{item}</Text>
//                     <Text className="block">{record.city}</Text>
//                     <Text className="block">{record.address}</Text>
//                     <Text className="block">{record.email}</Text>
//                     <Text className="block">{record.phone}</Text>
//                 </>
//             ),
//         },
//         {
//             title: "Time Order",
//             key: "timeOrder",
//             dataIndex: "createdAt",
//             render: (time) => <Text className="text-[#1890ff]">{moment(time).format("DD/MM/YYYY HH:mm:ss")}</Text>,
//         },
//         {
//             title: "Status",
//             key: "status",
//             dataIndex: "status",
//             render: (stt) => <Tag color={stt === 4 ? "red" : "green"}>{getStatusOrder(stt)}</Tag>,
//         },
//         {
//             title: "Payment",
//             key: "payments",
//             dataIndex: "payments",
//             render: (stt) => <Tag color={stt === 2 ? "red" : "green"}>{getPaymentsOrder(stt)}</Tag>,
//         },
//         {
//             title: "Actions",
//             key: "actions",
//             render: (_, record) => (
//                 <Space size="middle">
//                     <Link to={`/admin/order/${record._id}/detail`} className="text-[#1890ff]">
//                         Detail
//                     </Link>
//                     {/* <button onClick={() => handleRemove(record._id)}>Delete</button> */}
//                 </Space>
//             ),
//         },
//     ];

//     // const handleRemove = async (id?: string) => {
//     //   confirm({
//     //     title: "Bạn có chắc chắn muốn xóa không?",
//     //     icon: <ExclamationCircleOutlined />,
//     //     content: "Không thể hoàn tác sau khi xóa",
//     //     async onOk() {
//     //       try {
//     //         await dispatch(deleteOrder(id)).unwrap();
//     //         message.success("Xóa đơn hàng thành công");
//     //       } catch (error) {
//     //         message.error("Có lỗi xảy ra, vui lòng thử lại");
//     //       }
//     //     },
//     //     onCancel() {
//     //       console.log("Cancel");
//     //     },
//     //   });
//     // };
//     const dataTable = stores.map((item: any) => {
//         return {
//           name: item.name,
//           id: item._id,

//         }

//       })
//     useEffect(() => {
//         dispatch(Receiptlist())
//       }, [dispatch])
//       if (!stores) return <div>Loading...</div>
//     return (
//         <Table
//             columns={columns}
//             dataSource={dataTable}
//             // pagination={{
//             //     onChange(current) {
//             //         setPage(current);
//             //     },
//             // }}
//             rowKey="_id"
//         />
//     );
// };

// export default OrderManager;


import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import { Button } from 'antd/lib/radio';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { categoriesList, categoriesRemove } from '../../../redux/slice/categoriesSlice';
import { Receiptlist } from '../../../redux/slice/receiptSlice';

const { Column, ColumnGroup } = Table;
interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
}


type Props = {

}

const Order = (props: Props) => {
    const dispatch = useAppDispatch()
    const { receipt } = useAppSelector((state: any) => state.ReceiptSlice)
    console.log(receipt);
    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',

        },


        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (item: any) => (
        //     <Space size="middle">

        //       <DeleteOutlined onClick={() => remove(item.id)}>Delete</DeleteOutlined>

        //       <Link to={`edit/${item.id}`}><EditOutlined /></Link>
        //     </Space>
        //   ),
        // },
    ];
    const dataTable = receipt?.map((item: any) => {
        return {
            name: item.name,
            id: item._id
        }

    })
    useEffect(() => {
        dispatch(Receiptlist())
    }, [dispatch])
    if (!receipt) return <div>Loading...</div>
    return (
        <div className="pt-10">

            <Table columns={columns} dataSource={dataTable} />
        </div>

    )
}

export default Order