import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, message, Select, Upload } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';

import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';
import { productList, productUpdate } from '../../../redux/slice/productSlice';
import { categoriesList } from '../../../redux/slice/categoriesSlice';
import { uploadCloudinary } from '../../../api/upload';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { bannerList, updatebanner } from '../../../redux/slice/BannerSlice';
const { Option } = Select;
type Props = {}

const EditBanner = (props: Props) => {
    const { id } = useParams()
    const { banner } = useAppSelector((state: any) => state.BannerReducer)
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const [form] = Form.useForm()

    const onFinish = async (values: any) => {
        // console.log(values);
        values._id = id
        dispatch(updatebanner({ ...values, image: Url })).unwrap()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Thêm thành công',
                    timer: 1000,
                    showConfirmButton: false,
                })
                setTimeout(() => {
                    navigation("/admin/banner")
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
    const data = banner.find((item: any) => item._id == id)

    useEffect(() => {
        dispatch(bannerList())

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
                    label="title"
                    name="title"
                    rules={[{ required: true, message: 'Thiếu tên danh mục!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Link bài viết liên kết"
                    name="url"
                    rules={[{ required: true, message: 'Please input your Price!' }]}
                >
                    <Input />
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
                <Form.Item wrapperCol={{ offset: 3, span: 10 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>

    )
}

export default EditBanner