import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Image, Space, Table, TableProps, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { categoriesList } from '../../../redux/slice/categoriesSlice';
import { productList, productRemove } from '../../../redux/slice/productSlice';




type Props = {}

const ListProduct = (props: Props) => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.ProductReducer)
    const { categories } = useAppSelector((state: any) => state.CategoriesReducer)
    const dataTable = products.map((item: any) => {
        return {
            name: item.name,
            price: item.price,
            description: item.description,
            id: item._id,
            image: item.image,
            category: item.categoryId?.name,
            size: item.idSize
        }

    })
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
                dispatch(productRemove(id))
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
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
            render: (item: any) => (
                item.map((x: any) => (
                    x.name + "   "
                ))
            )
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            filters:
                categories.map((item: any) => {
                    return {
                        text: item.name,
                        value: item.name,
                    }
                })
            ,
            onFilter: (value: string, record: any) => record.category.includes(value),
            filterSearch: true,
        },

        {
            title: 'Image',
            dataIndex: 'image',
            render: (image: any) => <Image width={100} src={image}></Image>
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
    useEffect(() => {
        dispatch(categoriesList())
        dispatch(productList())
    }, [dispatch])
    if (!products) return <div>Loading...</div>

    console.log(categories);


    return (
        <div>

            <Link to={'/admin/product/add'}>
                <Button type="primary" style={{ borderRadius: '5px', backgroundColor: '#40A9FF' }}>Thêm Danh mục</Button>
            </Link>
            <Table columns={columns} dataSource={dataTable} />
        </div>

    )
}

export default ListProduct