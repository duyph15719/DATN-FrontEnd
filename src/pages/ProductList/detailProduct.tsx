import React, { useState } from 'react'
import '../detail/detail.css'
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Slider from 'react-slick';
import { Tabs } from 'antd';


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
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  return (
    <>


      <div className="product-container">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row pt-10">
          <div className="w-[100%] md:w-[50%]">

            <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07.jpg" alt="" />
          </div>
          <div className="w-[100%] md:w-[50%]">
            <div className="flex"><a className="text-gray-500 transition hover:text-black uppercase font-semibold text-sm block pr-4 relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-2 after:w-[1px] after:h-3 after:rotate-12 after:bg-gray-400" href="/">Home</a><a className="text-gray-500 transition hover:text-black uppercase font-semibold text-sm" href=""> NAM</a></div>
            <h1 className="font-semibold text-[28px] text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Chuck 70 Archive Prints Hi</h1>
            <div className="mt-1 my-2"><span className="text-3xl text-[#16120a] font-semibold">30.000&nbsp;VND</span></div>
            <form >
              <div className="flex items-center mt-2">
                <label className="min-w-[80px] font-bold text-sm">Color</label>
                <ul className="flex">
                  <li><input type="radio" className="form__add-cart-ice" hidden name="ice" id="ice-0" defaultValue={0} />
                    <label htmlFor="ice-0" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">Đen</label></li>
                  <li><input type="radio" className="form__add-cart-ice" hidden name="ice" id="ice-30" defaultValue={30} />
                    <label htmlFor="ice-30" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">Đỏ</label></li>
                  <li><input type="radio" className="form__add-cart-ice" hidden name="ice" id="ice-50" defaultValue={50} />
                    <label htmlFor="ice-50" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">Trắng</label></li>
                  <li><input type="radio" className="form__add-cart-ice" hidden name="ice" id="ice-70" defaultValue={70} />
                    <label htmlFor="ice-70" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">Xanh</label></li>
                  <li><input type="radio" className="form__add-cart-ice" hidden name="ice" id="ice-100" defaultValue={100} defaultChecked />
                    <label htmlFor="ice-100" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">Vàng</label></li></ul></div>

              <div className="flex items-center mt-2">
                <label className="min-w-[80px] font-bold text-sm">Size</label><ul className="flex">
                  <li><input hidden type="radio" name="size" className="form__add-cart-size" id="size-S" defaultValue="623edb239c3a3931abeb4e5a" defaultChecked />
                    <label htmlFor="size-S" className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">S</label></li>
                  <li><input hidden type="radio" name="size" className="form__add-cart-size" id="size-M" defaultValue="623ede769c3a3931abeb4e6c" />
                    <label htmlFor="size-M" className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">M</label></li>
                  <li><input hidden type="radio" name="size" className="form__add-cart-size" id="size-L" defaultValue="623ee0709c3a3931abeb4e73" />
                    <label htmlFor="size-L" className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">L</label></li>
                </ul>
              </div>
              <div className="flex items-center mt-2">
              </div><div className="border-b border-dashed pb-4 mt-6">
                <div className="flex mt-2 items-center"><div className="flex items-center h-9"><button type="button" className="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">-</button>
                  <input type="text" className="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]" defaultValue={1} /><button type="button" className="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">+</button>
                </div><button className="ml-2 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                </div>
              </div>
            </form>
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

                <div className="overflow-x-auto relative">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                          SKU
                        </th>
                        <td className="py-4 px-6">

                          M5039V
                        </td>


                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                          CHẤT LIỆU
                        </th>
                        <td className="py-4 px-6">
                          Canvas
                        </td>

                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          GIỚI TÍNH
                        </th>
                        <td className="py-4 px-6">

                          Women, Men
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>


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