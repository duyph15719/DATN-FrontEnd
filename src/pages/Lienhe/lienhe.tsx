import React from 'react'
import {WhatsAppOutlined,FacebookOutlined,InstagramOutlined,TwitterOutlined,WeiboCircleOutlined,WifiOutlined} from '@ant-design/icons';
import './lienhe.css'
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */
const onFinish = (values: any) => {
  console.log(values);
};
type Props = {}
const Lienhe = (props: Props) => {

  return (<>
    <div className="flex max-w-7xl mx-auto flex-col md:flex-row pt-10" style={{ backgroundColor: "white" }}>
      <div className="w-[100%] md:w-[50%] md:order-1 order-2" data-animate="fadeInLeft" data-animated="true">
        <div className="col-inner">
          <h3 style={{ color: "red" }}>THÔNG TIN LIÊN HỆ </h3>
          <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
        
          </div>{/* .icon-box */}
          <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
           
              <div className="icon-box-text last-reset">
                <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
              </div>
            </div>{/* .icon-box */}
            <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
              <div className="icon-box-img" style={{ width: 20 }}>
                <div className="icon">
                 
                </div>
              </div>
              <div className="icon-box-text last-reset">
               
                <p> <WhatsAppOutlined style={{fontSize:"20px"}}/>1900106688</p>
              </div>
            </div>{/* .icon-box */}
            <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
            
              <div className="icon-box-text last-reset">
                <p>vietan@gmail.com</p>
              </div>
            </div>{/* .icon-box */}
            <div className="icon-box featured-box icon-box-left text-left" style={{ margin: '0px 0px 10px' }}>
           
              <div className="icon-box-text last-reset">
                <p>Việt anh </p>
              </div>
            </div>{/* .icon-box */}
            <div className="social-icons follow-icons">
            <FacebookOutlined style={{fontSize:"30px",padding:"20px"}}/>
            <InstagramOutlined style={{fontSize:"30px"}}/>
            <TwitterOutlined style={{fontSize:"30px",padding:"20px"}}/>
            <WeiboCircleOutlined style={{fontSize:"30px"}}/>
            <WifiOutlined style={{fontSize:"30px",padding:"20px"}}/></div>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] md:order-2 order-1" data-animate="fadeInRight" data-animated="true">
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
      </div>

      <div className="col small-12 large-12">
        <div className="col-inner" style={{ margin: '0px 0px -25px' }}>
          <p><iframe width="100%" height={400} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4478791335196!2d106.65261921472937!3d10.77696826213081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed189fa855d%3A0xf63e15bfce46baef!2sC%C3%B4ng+ty+TNHH+-+MONA+MEDIA!5e0!3m2!1svi!2s!4v1524639789314" frameBorder={0} allowFullScreen style={{ border: '0px currentColor', borderImage: 'none' }} /></p>
        </div>
      </div>

      <div>
      </div>
    </>


  )
}

export default Lienhe;
