import React, { useEffect, useMemo, useState } from 'react'
import '../detail/detail.css'
import Slider from 'react-slick';
import { Button, Divider, Form, InputNumber, Space, Tabs } from 'antd';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { productList } from '../../redux/slice/productSlice';
import { categoriesList } from '../../redux/slice/categoriesSlice';
import { quantityList } from '../../redux/slice/quantity';
import { addToCart } from '../../ultils/cart/cart';
import Swal from 'sweetalert2';
import { ProductColor, ProductSize } from '../../models/product';
import { thousandFormat } from '../../ultils';
const InnerHTML = require('dangerously-set-inner-html')

type Props = {}
const settings = {

  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1448,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,

      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

const DetailProduct = (props: Props) => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.ProductReducer)
  const { categories } = useAppSelector(state => state.CategoriesReducer)

  const [form] = Form.useForm();

  const [colorSelected, setColorSelected] = useState<ProductColor | null>(null);
  const [sizeSelected, setSizeSelected] = useState<ProductSize | null>(null);
  const data = useMemo(() => products.find((item: any) => item._id === id), [id, products]);
  const sizes = useMemo<ProductSize[]>(() => colorSelected ? colorSelected.sizes : [], [colorSelected]);
  const [quantity, setQuantity] = useState<number>(1);


  useEffect(() => {
    dispatch(categoriesList())
    dispatch(productList())
    dispatch(quantityList())

  }, [dispatch])
  useEffect(() => {
    if (data && data.colors.length > 0) {
      setColorSelected(data.colors[0]);
    }
  }, [data]);
  // const data = products.find((item: any) => item._id == id)


  const onSelectColor = (color: ProductColor) => {
    setColorSelected(color);
    form.resetFields(["size", "quantity"]);
    setSizeSelected(null);
  };
  const onSelectSize = (size: ProductSize | null) => {
    if (size) {
      setSizeSelected(size);
    } else {
      setSizeSelected(null);
    }
    form.resetFields(["quantity"]);
  };
  const AddToCart = () => {
    console.log(sizeSelected);
    addToCart(
      {
        color: colorSelected,
        size: sizeSelected,
        quantity: quantity,
        id: data,
        randomid: "_" + Math.random().toString(36).substring(2, 9),
      },
      () => { },
    );
  };
  if (!data) return <div>loading</div>
  return (
    <>


      <div className="product-container">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row pt-10">
          <div className="w-[100%] md:w-[50%]">

            <img src={data?.image} alt="" />
          </div>
          <div className="w-[100%] md:w-[50%] pl-10">

            <div className="flex">
              <a className="text-gray-500 transition hover:text-black uppercase font-semibold text-sm block pr-4 relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-2 after:w-[1px] after:h-3 after:rotate-12 after:bg-gray-400" href="/">Home</a><a className="text-gray-500 transition hover:text-black uppercase font-semibold text-sm" href=""> NAM</a></div>
            <h1 className="font-semibold text-[28px] text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300"> {data?.name}</h1>


            <Form form={form} labelAlign="left" labelCol={{ span: 3 }} style={{ marginBottom: 30 }}>

              <div className='flex'>
                <label className="min-w-[80px] font-bold text-sm">Mầu sắc </label>
                <Form.Item name="color" rules={[{ required: true, message: "Vui lòng chọn màu sắc" }]}>

                  <Space>
                    {data.colors.map((color: any, index: any) => (

                      <Button className="p-3" value={color.colorName} onClick={() => {
                        onSelectColor(color);
                      }} danger={color.colorName === colorSelected?.colorName}
                        key={`color-${index}`}>{color.colorName}</Button>
                    ))}
                  </Space>
                </Form.Item>
              </div>
              <div className='flex'>
                <label className="min-w-[80px] font-bold text-sm">Kích cỡ </label>
                <Form.Item name="size" rules={[{ required: true, message: "Vui lòng chọn kích cỡ" }]}>
                  <Space>
                    {sizes.map((size: ProductSize) => (
                      <Button onClick={() => {
                        onSelectSize(size);
                      }} key={`size-${size.sizeName}`} value={size.sizeName} disabled={size.amount === 0}
                        danger={size.sizeName === sizeSelected?.sizeName}>{size.sizeName}</Button>
                    ))}
                  </Space>
                </Form.Item>
              </div>
              <div className='flex'>
                <label className="min-w-[80px] font-bold text-sm">Số lượng</label>
                <Form.Item name="quantity"
                  rules={[{ required: true, message: "Vui lòng chọn số lượng" }]}

                  help={`${sizeSelected ? sizeSelected.amount : data.colors.map((i: { sizes: any[]; }) => i.sizes.reduce((a, b) => a + b.amount, 0)).reduce((a: any, b: any) => a + b, 0)} sản phẩm có sẵn`}>
                  <InputNumber onChange={(value) => {
                    if (value) {
                      setQuantity(+value);
                    }
                  }} defaultValue={1} min={1} max={sizeSelected ? sizeSelected.amount : undefined} />
                </Form.Item>
              </div>

            </Form>
            <Divider />


            <div className="flex">
              <span
                className="title-font font-medium text-2xl text-gray-900">
                {thousandFormat((data.price ? +data.price : 0) * quantity)} VND
              </span>




              <Button size="large" htmlType="submit" type="primary" onClick={() => AddToCart()} className=" flex ml-auto  px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" disabled={!colorSelected || !sizeSelected}>Thêm vào giỏ hàng</Button>

            </div>
            <div className="flex items-center mt-2">
            </div>


            <div className="flex">
              <div className="w-[50%]" >
                <b>Tính phí ship tự động</b>
                <div className="grid  md:grid-cols-3 grid-cols-2 gap-2">
                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghtk.jpg" alt="" />
                  </div>

                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van.jpg" alt="" />
                  </div>

                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-shipchung.jpg" alt="" />
                  </div>

                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post.jpg" alt="" />
                  </div>
                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post.jpg" alt="" />
                  </div>
                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn.jpg" alt="" />
                  </div>

                </div>
              </div>
              <div className="w-[50%]" >
                <b>Tính phí ship tự động</b>
                <div className="grid  md:grid-cols-3 grid-cols-2 gap-2">
                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb.jpg" alt="" />
                  </div>

                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-techcombank.jpg" alt="" />
                  </div>

                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vib.jpg" alt="" />
                  </div>

                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg" alt="" />
                  </div>
                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal.jpg" alt="" />
                  </div>
                  <div className="w-20">
                    <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard.jpg" alt="" />
                  </div>

                </div>
              </div>
            </div>


          </div>

        </div>
        <div>


          <div className="max-w-7xl mx-auto pt-5 pb-5">
            <hr />
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="THÔNG TIN BỔ SUNG" key="1">

                <div dangerouslySetInnerHTML={{ __html: data?.description }} />

              </Tabs.TabPane>
              <Tabs.TabPane tab="ĐÁNH GIÁ (0)" key="2">
                Content of Tab Pane 2
              </Tabs.TabPane>

            </Tabs>
          </div>


        </div>
        <div className="related related-products-wrapper product-section">

          <div className="max-w-7xl mx-auto ">
            <h3 className="product-section-title container-width product-section-title-related pt-half pb-half uppercase">
              Sản phẩm tương tự  </h3>
            <Slider {...settings}>
              <div>
                <div className="boxproduct  text-center">
                  <div className="flex justify-center"><img className="" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg" alt="" /></div>

                  <button className='title'>Chuck Taylor Classic</button>
                  <p className='price'>1,250,000 ₫</p>
                  <button className='Xemproduct'>Xem Sản Phẩm</button>
                </div>
              </div>
              <div>
                <div className="boxproduct  text-center">
                  <div className="flex justify-center"><img className="" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg" alt="" /></div>

                  <button className='title'>Chuck Taylor Classic</button>
                  <p className='price'>1,250,000 ₫</p>
                  <button className='Xemproduct'>Xem Sản Phẩm</button>
                </div>
              </div>
              <div>
                <div className="boxproduct  text-center">
                  <div className="flex justify-center"><img className="" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg" alt="" /></div>

                  <button className='title'>Chuck Taylor Classic</button>
                  <p className='price'>1,250,000 ₫</p>
                  <button className='Xemproduct'>Xem Sản Phẩm</button>
                </div>
              </div>
              <div>
                <div className="boxproduct  text-center">
                  <div className="flex justify-center"><img className="" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg" alt="" /></div>

                  <button className='title'>Chuck Taylor Classic</button>
                  <p className='price'>1,350,000 ₫</p>
                  <button className='Xemproduct'>Xem Sản Phẩm</button>
                </div>
              </div>
              <div>
                <div className="boxproduct  text-center">
                  <div className="flex justify-center"><img className="" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg" alt="" /></div>

                  <button className='title'>Chuck Taylor Classic</button>
                  <p className='price'>1,450,000 ₫</p>
                  <button className='Xemproduct'>Xem Sản Phẩm</button>
                </div>
              </div>
              <div>
                <div className="boxproduct  text-center">
                  <div className="flex justify-center"><img className="" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg" alt="" /></div>

                  <button className='title'>Chuck Taylor Classic</button>
                  <p className='price'>1,550,000 ₫</p>
                  <button className='Xemproduct'>Xem Sản Phẩm</button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>


    </>
  )
}

export default DetailProduct