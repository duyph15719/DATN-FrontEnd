
import { Space, Table, Tag, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from "moment";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RecaiptType } from '../../../models/receipt';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { Receiptlist } from '../../../redux/slice/receiptSlice';

export const getStatusOrder = (status?: number) => {
    let statusText;

    if (status === 0) {
        statusText = "Đơn hàng mới";
    } else if (status === 1) {
        statusText = "Đã xác nhận";
    } else if (status === 2) {
        statusText = "Đang giao hàng";
    } else if (status === 3) {
        statusText = "Đã giao hàng";
    } else if (status === 4) {
        statusText = "Đã hủy";
    } else {
        statusText = "Lỗi";
    }

    return statusText;
};
export const getPaymentsOrder = (status?: number) => {
    let statusText;

    if (status === 0) {
        statusText = "Thanh toán tiền mặt";
    } else if (status === 1) {
        statusText = "Thanh toán online";
    } else if (status === 2) {
        statusText = "Đã hủy";
    } else {
        statusText = "Lỗi";
    }

    return statusText;
};
type Props = {

}
const { Text } = Typography;
const Order = (props: Props) => {
    const dispatch = useAppDispatch()
    const { receipts } = useAppSelector((state: any) => state.ReceiptSlice)

    const columns: ColumnsType<RecaiptType> = [
        {
            title: "Thông tin khách hàng",
            key: "name",
            dataIndex: "name",
            render: (item, record) => (
                <>  <Text className="text-[#e93737fd]">{item}</Text>
                    <Text className="block">{record.city}</Text>
                    <Text className="block">{record.address}</Text>
                    <Text className="block">{record.email}</Text>
                    <Text className="block">{record.phone}</Text>
                </>
            ),
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
            filters:
                receipts.filter((a: any, i: any) => receipts.findIndex((s: any) => a.status === s.status) === i).map((item: any) => {
                    return {
                        text: getStatusOrder(item.status),
                        value: item.status,
                    };
                }),
            onFilter: (value: number | any, record: RecaiptType | any) => record.status === value,
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
            render: (item) => <Text className="text-[#1890ff]">{new Intl.NumberFormat().format(item)} VND</Text>
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
    useEffect(() => {
        dispatch(Receiptlist())
    }, [dispatch])
    const dataTable = receipts?.map((item: any, index: any) => {
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
    console.log(dataTable);
    if (!receipts) return <div>Loading...</div>
    return (
        <div className="pt-10">

            <Table columns={columns} dataSource={dataTable}
                expandable={{
                    rowExpandable: record => record.name !== 'Not Expandable',
                }} />
        </div>

    )
}

export default Order