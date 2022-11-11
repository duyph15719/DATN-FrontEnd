import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { ColorList, UpdateColor } from '../../../redux/slice/colorList';
type Props = {}

const ColorEdit = (props: Props) => {
  const { id } = useParams()
  const { color } = useAppSelector((state: any) => state.ColorReducer)
  const dispatch = useAppDispatch()
  const navigation = useNavigate()
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    values._id = id
    dispatch(UpdateColor(values)).unwrap()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Sửa thành công',
          timer: 1000,
          showConfirmButton: false,
        })
        setTimeout(() => {
          navigation("/admin/color")
        }, 1200);

      })
      .catch((err: any) => alert(err))
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const data = color.find((item: any) => item._id == id)

  useEffect(() => {
    dispatch(ColorList())
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
          rules={[{ required: true, message: 'Thiếu tên màu!' }]}
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

export default ColorEdit