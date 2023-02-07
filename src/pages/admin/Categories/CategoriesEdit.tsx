import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { uploadCloudinary } from '../../../api/upload';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { categoriesList, updateCategories } from '../../../redux/slice/categoriesSlice';
type Props = {}

const CategoriesEdit = (props: Props) => {
  const { id } = useParams()
  const { categories } = useAppSelector((state: any) => state.CategoriesReducer)
  const dispatch = useAppDispatch()
  const navigation = useNavigate()
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    // console.log(values);
    values._id = id
    dispatch(updateCategories({ ...values, image: Url })).unwrap()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Thêm thành công',
          timer: 1000,
          showConfirmButton: false,
        })
        setTimeout(() => {
          navigation("/admin/categories")
        }, 1200);

      })
      .catch((err: any) => alert(err))
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const data = categories.find((item: any) => item._id == id)

  useEffect(() => {
    dispatch(categoriesList())
    if (data) {
      form.setFieldsValue({
        ...data
      })
    }

  }, [])
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const [Url, setUrl] = useState();
  const uploadImage = async (options: any) => {
    const { file, onSuccess, onError, onProgress } = options;
    const url = "https://api.cloudinary.com/v1_1/dcjtdlsw7/image/upload";
    const preset = "gx04038d";
    const formData = new FormData();
    formData.append("upload_preset", preset);
    formData.append("file", file);
    try {
      const res = await uploadCloudinary(formData);
      file.url = res.data.secure_url;
      file.thumbUrl = null;
      console.log(file.url)
      setUrl(res.data.secure_url)
      onSuccess("ok");
    } catch (error) {
      onError({ error });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  if (!data) return <div>loading</div>
  return (
    <div className="pt-10">
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
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
        <Form.Item name=''>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            customRequest={uploadImage}
          >
            {<img src={data.image} alt="avatar" style={{ width: '100%' }} /> ? <img src={data.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
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

export default CategoriesEdit