import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch } from '../../../redux/hook';
import { addCategories } from '../../../redux/slice/categoriesSlice';
type Props = {}

const CategoriesAdd = (props: Props) => {
    const dispatch = useAppDispatch()
    const onFinish = async (values: any) => {
        dispatch(addCategories(values)).unwrap()
            .then(() => {
                alert("success")
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

export default CategoriesAdd