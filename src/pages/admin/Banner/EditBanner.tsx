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
    console.log(banner)
    const onFinish = async (values: any) => {
        // console.log(values);
        values._id = id
        dispatch(updatebanner({ ...values, image: Url })).unwrap()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: ' Sửa thành công',
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
    const data = banner.find((item: any) => item._id == id)

    useEffect(() => {
        dispatch(bannerList())

        if (data) {
            form.setFieldsValue({
                ...data
            })
        }
        console.log(data)
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


                <Form.Item
                    name="image">
                    <Upload
                        name="image"
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