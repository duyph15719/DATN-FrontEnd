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
    } catch (error: any) {
      //toast.error(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className=" pt-36 uppercase  font-bold text-lg m-9">     <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Yêu cầu nhập Email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: 'Yêu cầu nhập Mật khẩu!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Nhớ tài khoản</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Đăng Nhập
        </Button>
      </Form.Item>
    </Form></div>
  )
}

export default Signin