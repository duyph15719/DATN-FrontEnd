import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';

import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';
import { sizeList, updatesize } from '../../../redux/slice/sizeSlice';
type Props = {}

const SizeEdit = (props: Props) => {
    const { id } = useParams()
    const { size } = useAppSelector((state: any) => state.SizeReducer)
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const [form] = Form.useForm()

    const onFinish = async (values: any) => {
        // console.log(values);
        values._id = id
        dispatch(updatesize(values)).unwrap()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Thêm thành công',
                    timer: 1000,
                    showConfirmButton: false,
                })
                setTimeout(() => {
                    navigation("/admin/size")
                }, 1200);

            })
            .catch((err: any) => alert(err))
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const data = size.find((item: any) => item._id == id)

    useEffect(() => {
        dispatch(sizeList())
        if (data) {
            form.setFieldsValue({
                ...data
            })
        }

    }, [])
    if (!data) return <div>loading</div>
    return (
        <div className="pt-10">
            <Form
                name="basic"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Thiếu tên danh mục!' }]}
                >
                    <Input />
                </Form.Item>





                <Form.Item wrapperCol={{ offset: 3, span: 10 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>

    )
}

export default SizeEdit