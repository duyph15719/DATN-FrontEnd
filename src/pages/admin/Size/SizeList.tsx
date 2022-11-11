
import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';

import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router-dom';
import { Button } from 'antd/lib/radio';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { sizeList, SizeRemove } from '../../../redux/slice/sizeSlice';

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

const SizeList = (props: Props) => {
    const dispatch = useAppDispatch()
    const { size } = useAppSelector((state: any) => state.SizeReducer)
    const remove = (id: any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed)
                dispatch(SizeRemove(id))
            {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',

        },


        {
            title: 'Action',
            key: 'action',
            render: (item: any) => (
                <Space size="middle">

                    <DeleteOutlined onClick={() => remove(item.id)}>Delete</DeleteOutlined>

                    <Link to={`edit/${item.id}`}><EditOutlined /></Link>
                </Space>
            ),
        },
    ];
    const dataTable = size.map((item: any) => {
        return {
            name: item.name,
            id: item._id
        }

    })
    useEffect(() => {
        dispatch(sizeList())
    }, [dispatch])
    if (!size) return <div>Loading...</div>
    return (
        <div className="pt-10">
            <Link to={'/admin/categories/add'}>
                <Button type="primary" style={{ borderRadius: '5px', backgroundColor: '#40A9FF' }}>Thêm Danh mục</Button>
            </Link>
            <Table columns={columns} dataSource={dataTable} />
        </div>

    )
}

export default SizeList