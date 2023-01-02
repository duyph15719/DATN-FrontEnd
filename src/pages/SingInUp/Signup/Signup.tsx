import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { signup } from "../../../api/User";
import { toast } from "react-toastify";

type Props = {
  username: string,
  fullName: string,
  email: string,
  phone: string,
  password: string,
  confirm: string,
}
const Signup = () => {
  const onFinish: SubmitHandler<Props> = async dataInput => {
    try {
      await signup(dataInput);
      toast.success("Đăng ký tài khoản thành công");
      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const navigate = useNavigate();
  return (
    <div className=" p-6 uppercase  font-bold text-lg">     <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className=' '
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input your phone!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
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
    </Form></div>
  )
}

export default Signup