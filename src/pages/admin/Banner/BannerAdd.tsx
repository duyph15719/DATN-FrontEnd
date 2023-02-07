import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Checkbox, Form, Input, message, Upload, Select } from 'antd';

import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadCloudinary } from '../../../api/upload';
import { addCategories, categoriesList } from '../../../redux/slice/categoriesSlice';
import { addbanner } from '../../../redux/slice/BannerSlice';
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


const BannerAdd = (props: Props) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const onFinish = async (values: any) => {

        dispatch(addbanner({ ...values, image: Url })).unwrap()
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
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Url"
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

                <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default BannerAdd