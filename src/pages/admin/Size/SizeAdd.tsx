import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch } from '../../../redux/hook';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { addsize } from '../../../redux/slice/sizeSlice';
type Props = {}

const SizeAdd = (props: Props) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const onFinish = async (values: any) => {
        dispatch(addsize(values)).unwrap()
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
        console.log(values);

    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
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

export default SizeAdd