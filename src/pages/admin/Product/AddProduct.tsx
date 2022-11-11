import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Checkbox, Form, Input, message, Upload, Select } from 'antd';
import { addProduct } from '../../../redux/slice/productSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadCloudinary } from '../../../api/upload';
import { categoriesList } from '../../../redux/slice/categoriesSlice';
import { sizeList } from '../../../redux/slice/sizeSlice';
import { ColorList } from '../../../redux/slice/colorList';
const { Option } = Select;
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
  const navigation = useNavigate()
  const onFinish = async (values: any) => {

    dispatch(addProduct({ ...values, image: Url })).unwrap()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Thêm thành công',
          timer: 1000,
          showConfirmButton: false,
        })
        setTimeout(() => {
          navigation("/admin/product")
        }, 1200);

      })
      .catch((err: any) => alert(err))

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const { size } = useAppSelector((state: any) => state.SizeReducer)
  const { color } = useAppSelector((state: any) => state.ColorReducer)
  const [Url, setUrl] = useState();
  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file } = options;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "gx04038d");
    try {
      const res = await uploadCloudinary(formData);
      message.success("Upload successfully !");
      setUrl(res.data.secure_url);
      console.log(res.data.secure_url);

    }
    catch (err) { message.error("Upload failed !"); }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  React.useEffect(() => {
    dispatch(categoriesList())
    dispatch(sizeList())
    dispatch(ColorList())
  }, [])
  const { categories } = useAppSelector(state => state.CategoriesReducer)
  return (
    <div>
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
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your Price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="categoryId" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear

          >
            {categories?.map((item: any) => (

              <Option value={item._id}>{item.name}</Option>

            ))}

          </Select>
        </Form.Item>
        <Form.Item name="idSize" label="Size" rules={[{ required: true }]}>
          <Select mode="multiple"
            placeholder="Select a option and change input text above"
            allowClear

          >
            {size?.map((item: any) => (

              <Option value={item._id}>{item.name}</Option>

            ))}

          </Select>
        </Form.Item>
        <Form.Item name="idcolor" label="color" rules={[{ required: true }]}>
          <Select mode="multiple"
            placeholder="Select a option and change input text above"
            allowClear

          >
            {color?.map((item: any) => (

              <Option value={item._id}>{item.name}</Option>

            ))}

          </Select>
        </Form.Item>
        <Form.Item>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            // showUploadList={false}
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            customRequest={uploadImage}
          // beforeUpload={beforeUpload}

          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ProductList