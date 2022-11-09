import React from 'react'
import '../detail/detail.css'
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import Slider from 'react-slick';
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