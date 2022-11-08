import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Checkbox, Form, Input } from 'antd';
import { addProduct } from '../../../redux/slice/productSlice';
import { useAppDispatch } from '../../../redux/hook';
type Props = {}
type InputsType = {
  name: string,
  price: number,
  description: string,
  categoryId: string,
  image: string,
  status: number
}
const ProductList = (props: Props) => {
  const dispatch = useAppDispatch()
  const onFinish = async (values: any) => {
    dispatch(addProduct(values)).unwrap()
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
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
        // rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ProductList