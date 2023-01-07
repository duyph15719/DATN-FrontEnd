import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, message, Upload, Select, Row, Col, Space, InputNumber, Divider } from 'antd';
import { addProduct } from '../../../redux/slice/productSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { CloseOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadCloudinary } from '../../../api/upload';
import { categoriesList } from '../../../redux/slice/categoriesSlice';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { findStringDuplicates } from '../../../ultils';
const { Option } = Select;

type Props = {}



const ProductList = (props: Props) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const [value, setValue] = useState('');
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

        <Form.Item>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            customRequest={uploadImage}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >


          <ReactQuill modules={modules}
            formats={formats} theme="snow" value={value} onChange={setValue} />
        </Form.Item>
        <Form.List rules={[{
          validator: async (rule, value) => {
            if (value.length === 0) {
              return Promise.reject('Vui lòng thêm mẫu mã sản phẩm')
            }
            const duplicates = findStringDuplicates(value.filter((i: any) => i.colorName?.trim()).map((i: any) => i.colorName.toLowerCase()))
            if (duplicates.length > 0) {
              return Promise.reject('Màu đã bị trùng')
            }
            return Promise.resolve()
          }
        }]} name="colors" initialValue={[{ colorName: '', sizes: [{ sizeName: '', amount: 0 }] }]}>
          {(colors, { add: addColor, remove: removeColor }, { errors }) => (
            <div style={{ marginBottom: 5 }}>
              {colors.map((color) => (
                <div key={`color-${color.name}`}>
                  <Row gutter={16}>
                    <Col span={11}>
                      <Form.Item name={[color.name, "colorName"]} fieldKey={[color.name, 'colorName']} rules={[{ required: true, message: 'Vui lòng nhập màu sắc' }]}>
                        <Input placeholder="Màu sắc" />
                      </Form.Item>
                    </Col>
                    <Col span={11}>
                      <Form.List name={[color.name, 'sizes']} rules={[{
                        validator: async (rule, value) => {
                          const duplicates = findStringDuplicates(value.filter((i: any) => i.sizeName?.trim()).map((i: any) => i.sizeName.toLowerCase()))
                          if (duplicates.length > 0) {
                            return Promise.reject('Size đã bị trùng')
                          }
                          return Promise.resolve()
                        }
                      }]}>
                        {(sizes, { add: addSize, remove: removeSize }, { errors: sizeErrors }) => (
                          <div>
                            {sizes.map((size) => (
                              <Space key={`size-${color.name}-${size.name}`} align="start">
                                <Form.Item name={[size.name, "sizeName"]} rules={[{ required: true, message: 'Vui lòng nhập size' }]}>
                                  <Input placeholder="Size" />
                                </Form.Item>
                                <Form.Item name={[size.name, "amount"]} rules={[{ required: true, message: 'Vui lòng nhập số lượng' }]}>
                                  <InputNumber min={0} placeholder="Số lượng" />
                                </Form.Item>
                                {size.name > 0 ? (
                                  <Button type="dashed" onClick={() => {
                                    removeSize(size.name);
                                  }} icon={<CloseOutlined />} />
                                ) : (
                                  <Button onClick={() => {
                                    addSize({ sizeName: "", amount: 0 });
                                  }} icon={<PlusOutlined />} />
                                )}
                              </Space>
                            ))}
                            <Form.ErrorList errors={sizeErrors} />
                          </div>
                        )}
                      </Form.List>
                    </Col>
                    <Col span={2}>
                      <Button style={{ borderRadius: '50%' }} danger onClick={() => {
                        removeColor(color.name);
                      }} icon={<CloseOutlined />} disabled={color.name === 0} />
                    </Col>
                  </Row>
                  <Divider />
                </div>
              ))}
              <Form.ErrorList errors={errors} />
              <Button type="default" onClick={() => { addColor({ sizes: [{ sizeName: '', amount: 0 }] }) }}>+ màu</Button>
            </div>
          )}
        </Form.List>
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