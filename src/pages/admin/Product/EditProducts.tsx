import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Col, Divider, Form, Input, InputNumber, message, Row, Select, Space, Upload } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';

import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';
import { productList, productUpdate } from '../../../redux/slice/productSlice';
import { categoriesList } from '../../../redux/slice/categoriesSlice';
import { uploadCloudinary } from '../../../api/upload';
import { CloseOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import { findStringDuplicates } from '../../../ultils';

const { Option } = Select;
type Props = {}

const EditProduct = (props: Props) => {

    const [value, setValue] = useState('');
    const { id } = useParams()
    const { products } = useAppSelector(state => state.ProductReducer)
    const { categories } = useAppSelector(state => state.CategoriesReducer)
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const [form] = Form.useForm()

    const onFinish = async (values: any) => {

        console.log(categories);
        values._id = id
        dispatch(productUpdate({ ...values, image: Url })).unwrap()
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
    const data = products.find((item: any) => item._id == id)

    useEffect(() => {
        dispatch(categoriesList())
        dispatch(productList())
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
                wrapperCol={{ span: 10 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="Tên Sản Phẩm"
                    name="name"
                    rules={[{ required: true, message: 'Thiếu tên danh mục!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá Sản Phẩm"
                    name="price"
                    rules={[{ required: true, message: 'Please input your Price!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="categoryId" label="Danh mục" rules={[{ required: true }]}>
                    <Select

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
                        // showUploadList={false}
                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        customRequest={uploadImage}
                    // beforeUpload={beforeUpload}

                    >
                        {<img src={data.image} alt="avatar" style={{ width: '100%' }} /> ? <img src={data.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
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
                                        <Col span={5}>

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
                <Form.Item wrapperCol={{ offset: 3, span: 10 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>

    )
}

export default EditProduct