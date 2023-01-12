import { DeleteOutlined } from '@ant-design/icons';
import { message, Modal, Space, Table, Tag, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { RecaiptType } from '../../models/receipt';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getOrderByUserId } from '../../redux/slice/receiptSlice';
import { getPaymentsOrder, getStatusOrder } from '../admin/receipt/list';
import { GetUser } from '../Website/Pay/Pay'
export const getRole = (status?: number) => {
    let statusText;

    if (status === 0) {
        statusText = "Thành Viên";
    } else if (status === 1) {
        statusText = "Admin";
    } else {
        statusText = "Lỗi";
    }

    return statusText;
};
type Props = {}

const ManagerAccount = (props: Props) => {
    const dataUser = GetUser()
    const { Text } = Typography;
    const [data, setData] = useState<any>();
    const dispatch = useAppDispatch()
    const { receipts } = useAppSelector((state: any) => state.ReceiptSlice)
    const columns: ColumnsType<RecaiptType> = [
        {
            title: "Mã đơn hàng",
            key: "name",
            dataIndex: "id",
            
        },
        {
            title: "Thời gian đặt hàng",
            key: "timeOrder",
            dataIndex: "createdAt",
            render: (time) => <Text className="text-[#1890ff]">{moment(time).format("DD/MM/YYYY HH:mm:ss")}</Text>,
        },
        {
            title: "Trạng thái đơn hàng",
            key: "status",
            dataIndex: "status",
            render: (stt) => <Tag color={stt === 4 ? "red" : "green"}>{getStatusOrder(stt)}</Tag>,
            filters: receipts.map((item: any) => {
                return {
                    text: getStatusOrder(item.status),
                    value: item.status,
                };
            }),
            onFilter: (value: number | any, record: RecaiptType | any) =>record.status === value,
            filterSearch: true,
        },
        {
            title: "Phương thức thanh toán",
            key: "payments",
            dataIndex: "payments",
            render: (stt) => <Tag color={stt === 2 ? "red" : "green"}>{getPaymentsOrder(stt)}</Tag>,
        },
        {
            title: "Ghi chú",
            key: "note",
            dataIndex: "note",
            render: (item) => <Text className="text-[#1890ff]">{item}</Text>
            ,
        },
        {
            title: "Tổng tiền hoá đơn",
            key: "total",
            dataIndex: "total",
            render: (item) => <Text className="text-[#1890ff]">{item} VND</Text>
            ,
        },
        {
            title: "Tuỳ chọn",
            key: "actions",
            render: (item: any) => (
                <Space size="middle">
                    <Link to={`edit/${item.id}`} className="text-[#1890ff]">
                        Detail
                    </Link>
                </Space>
            ),
        },
    ];
    console.log(dataUser.user._id);
    
    useEffect(() => {
        (async () => {
          try {
            const data = await dispatch(getOrderByUserId(dataUser.user._id)).unwrap();
            setData(data);
            console.log(data);
            
          } catch (error) {
            message.error("Có lỗi xảy ra");
          }
        })();
      }, [dispatch]);
    const dataTable = data?.map((item: any, index: any) => {
        return {
            key: index,
            name: item?.name,
            id: item?._id,
            email: item?.email,
            payments: item?.payments,
            phone: item?.phone,
            status: item?.status,
            address: item?.address,
            city: item?.city,
            total: item?.total,
            note: item?.note,
            createdAt: item?.createdAt
        }
    })
    return (
        <div className="container mx-auto p-10 ">
            <div className="md:flex no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2">
                    <div className="bg-white p-3 border-t-4 border-green-400">
                        <div className="image overflow-hidden">
                            <img className="h-auto w-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="" />
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Họ và tên: {dataUser?.user.firstName} {dataUser?.user.lastName}</h1>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Nội dung: {dataUser?.user.note}</p>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Trạng Thái</span>
                                <span className="ml-auto"><span className="bg-green-500 py-1 px-2 rounded text-white text-sm">{getRole(dataUser?.user.role)} </span></span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Thời gian đăng ký tài khoản</span>
                                <span className="ml-auto">{moment(dataUser?.user.createdAt).format("DD/MM/YYYY")}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="my-4" />
                </div>
                <div className="w-full md:w-9/12 mx-2 h-64">
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span className="tracking-wide">Thông tin</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Họ.</div>
                                    <div className="px-4 py-2">{dataUser?.user.firstName}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Tên.</div>
                                    <div className="px-4 py-2">{dataUser?.user.lastName}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Giới tính.</div>
                                    <div className="px-4 py-2">{dataUser?.user.gender}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Số điện thoại.</div>
                                    <div className="px-4 py-2">{dataUser?.user.phone}</div>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                    <div className="px-4 py-2">
                                        <a className="text-blue-800" >{dataUser?.user.email}</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Ngày tháng năm sinh.</div>
                                    <div className="px-4 py-2">{moment(dataUser?.user.birthday).format("DD/MM/YYYY")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Table columns={columns} dataSource={dataTable}
                    expandable={{
                        rowExpandable: record => record.name !== 'Not Expandable',
                        // expandedRowRender: (record) => { return <Table columns={columns} dataSource={dataTable} /> }
                    }} />
            </div>
        </div>
    )
}

export default ManagerAccount