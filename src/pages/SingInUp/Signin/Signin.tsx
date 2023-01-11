import { Button, Checkbox, Form, Input } from 'antd';
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { signin } from '../../../api/User';
type Props = {
  emailogin: string
  password: string
}

const Signin = () => {
  const navigate = useNavigate();
    const onFinish: SubmitHandler<Props> = async dataInput => {      
      try {
        const { data } = await signin(dataInput);
        localStorage.setItem("user", JSON.stringify(data))
        Swal.fire({
          icon: 'success',
          title: 'Đăng nhập tài khoản thành công',
          timer: 1000,
          showConfirmButton: false,
        })
        navigate("/");
      } catch (error: any) {
        //toast.error(error.response.data.message);
      }
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className=" p-6 uppercase  font-bold text-lg m-16">     <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
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

export default Signin