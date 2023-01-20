import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd';
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { signup } from "../../../api/User";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

type Props = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  password: string,
  confirm: string,
  gender: string,
  birthday: string,
  note?: string,
}
const Signup = () => {
  const onFinish: SubmitHandler<Props> = async dataInput => {
    try {
      await signup(dataInput);
      Swal.fire({
        icon: 'success',
        title: 'Đăng ký tài khoản thành công',
        timer: 1000,
        showConfirmButton: false,
      })
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className=" p-6 uppercase  font-bold text-lg">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className=' '
      >
        <Form.Item
          label="Họ"
          name="firstName"
          rules={[{ required: true, message: 'Yêu cầu nhập Họ!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tên"
          name="lastName"
          rules={[{ required: true, message: 'Yêu cầu nhập Tên!' }]}
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

        <Form.Item
          label="SĐT"
          name="phone"
          rules={[{ required: true, message: 'Yêu cầu nhập Số điện thoại!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Yêu cầu nhập Email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Giới tính"
          name="gender"
          rules={[{ required: true, message: 'Yêu cầu chọn hoặc nhập Giới tính!' }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: 'Nam',
                label: 'Nam',
              },
              {
                value: 'Nữ',
                label: 'Nữ',
              }
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Ngày sinh"
          name="birthday"
          rules={[{ required: true, message: 'Yêu cầu nhập Ngày sinh!' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Ghi chú"
          name="note"
        >
          <Input />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Nhớ tài khoản</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
          Đăng Ký
          </Button>
        </Form.Item>
      </Form></div>
  )
}

export default Signup