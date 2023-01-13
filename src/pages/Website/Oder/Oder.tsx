import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { GetCart } from "../Pay/Pay";
import { sumTotal } from "../../../ultils/cart/cart";
type Props = {};

const Oder = (props: Props) => {
  let sum = 0;
  const data = GetCart();
  data.map((item: any) => (sum += sumTotal(item?.id?.price, item?.quantity)));

  const navigate = useNavigate();
  const createUrl: any = {
    amount: sum,
    bankCode: "",
    orderDescription: `tong so tien thanh toan: ${sum} VND`,
  };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    fetch("http://localhost:8000/api/orders/create_payment_url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => (window.location.href = data));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    form.setFieldsValue({ ...createUrl });
  }, [createUrl, form]);
  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="So tien" name="amount">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Ngan hang" name="bankCode">
          <Select>
            <Select.Option value="NCB">NCB</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Noi dung chuyen khoan" name="orderDescription">
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Oder;
