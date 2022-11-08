import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { productList } from '../../../redux/slice/productSlice';

const columns: any = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (item: any) => (
            <Space size="middle">
                <a> {item.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];


type Props = {}

const ListProduct = (props: Props) => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.ProductReducer)
    const dataTable = products.map((item: any) => {
        return {
            name: item.name,
            price: item.price
        }

    })
    useEffect(() => {
        dispatch(productList())
    }, [dispatch])
    if (!products) return <div>Loading...</div>
    return (
        <Table columns={columns} dataSource={dataTable} />
    )
}

export default ListProduct