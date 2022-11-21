import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Image, Space, Table, TableProps, Tag, Modal, Form, Select, InputNumber } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { categoriesList } from '../../../redux/slice/categoriesSlice';
import { ColorList } from '../../../redux/slice/colorList';
import { productList, productRemove } from '../../../redux/slice/productSlice';
import { addquantity, quantityList, quantityRemove, updatequantity } from '../../../redux/slice/quantity';
import { sizeList } from '../../../redux/slice/sizeSlice';



import type { ColumnsType } from 'antd/es/table';

type Props = {}

const Listquanlyty = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setID] = useState("")
    const dispatch = useAppDispatch()
    const { size } = useAppSelector((state: any) => state.SizeReducer)
    const { color } = useAppSelector((state: any) => state.ColorReducer)
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
            size: item.idSize,
            color: item.idcolor
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
            filters:
                products.map((item: any) => {
                    return {
                        text: item?.name,
                        value: item?.name,
                    }
                })
            ,
            onFilter: (value: string, record: any) => record.name.includes(value),
            filterSearch: true,

        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (image: any) => <Image width={100} src={image}></Image>
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
            title: 'Số lượng',
            key: 'quantity',
            render: (item: any) => (
                <Space size="middle">
                    <p className="cursor-pointer" onClick={() => showModal(item.id)}>Thêm</p>
                </Space>
            ),
        },

    ];
    useEffect(() => {
        dispatch(categoriesList())
        dispatch(productList())
        dispatch(sizeList())
        dispatch(ColorList())
    }, [dispatch])
    if (!products) return <div>Loading...</div>
    const showModal = (id: string) => {
        setIsModalOpen(true);
        setID(id)
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const AddQuantity = () => {
        const [form] = Form.useForm();
        const { quantity } = useAppSelector((state) => state.QuantityReducer)
        const dataNews = quantity?.filter((item: any) => item?.idProduct?._id === id)


        const navigation = useNavigate()


        useEffect(() => {

            dispatch(quantityList())

        }, [dispatch])
        if (!dataNews) return <div></div>
        const data = dataNews?.map((item: any) => {
            return {
                name: item?.idProduct?.name,
                size: item?.idSize?.name,
                Color: item?.idColor?.name,
                quantity: item?.quantity,
                id: item._id,
            }
        })


        if (!quantity) return <div>Loading...</div>
        const onReset = () => {
            form.resetFields();
        };
        const onFinish = (values: any) => {
            let flag = false
            values.idProduct = id
            dataNews.map((item: any) => {

                if (values.idProduct == item.idProduct._id && values.idSize == item.idSize._id && values.idColor == item.idColor._id) {
                    flag = true
                    Swal.fire({
                        title: 'Sản phẩm đã tồn tại bạn có muốn thêm nữa không?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                    }).then((result) => {

                        if (result.isConfirmed) {

                            Swal.fire({
                                icon: 'success',
                                title: 'Sửa thành công',
                                showConfirmButton: false,
                                timer: 1500
                            }
                            )
                            const data = {
                                _id: item._id,
                                quantity: values.quantity + item.quantity
                            }
                            dispatch(updatequantity(data))
                            onReset()

                        }
                    })

                    return
                }
            })
            if (flag === false) {
                dispatch(addquantity({ ...values })).unwrap()
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Thêm thành công',
                            timer: 1000,
                            showConfirmButton: false,
                        })

                        onReset()
                    })
                    .catch((err: any) => alert(err))
            }

        };
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
                    dispatch(quantityRemove(id))
                {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

        }
        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };

        const columns: any = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',

            },
            {
                title: 'size',
                dataIndex: 'size',
                key: 'size',

            },
            {
                title: 'Color',
                dataIndex: 'Color',
                key: 'Color',

            },
            {
                title: 'quantity',
                dataIndex: 'quantity',
                key: 'quantity',

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


        return (
            <>
                <Modal title="Basic Modal" width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={form}
                    >
                        <Form.Item name="idSize" label="Size" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                            >
                                {size?.map((item: any) => (
                                    <Option value={item._id}>{item.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item name="idColor" label="color" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                            >
                                {color?.map((item: any) => (
                                    <Option value={item._id}>{item.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item name="quantity" label="quantity" rules={[{ required: true }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                    <Table columns={columns} dataSource={data} />
                </Modal>
            </>
        )
    }
    return (
        <div>


            <Table columns={columns} expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}> <div dangerouslySetInnerHTML={{ __html: record?.description }} /></p>,
                rowExpandable: record => record.name !== 'Not Expandable',
            }} dataSource={dataTable} />
            <AddQuantity />
        </div>

    )
}

export default Listquanlyty
