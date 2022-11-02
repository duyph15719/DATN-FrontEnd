import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {}
const DetailProduct = (props: Props) => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay:true
      };

  return (
    <div className="max-w-7xl mx-auto ">
      <Slider {...settings}>
        <div className="">
          <img
            className=" "
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-2.jpg"
            alt=""
          />
        </div>
        <div className="">
          <img
              className=" "
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-5.jpg"
            alt=""
          />
        </div>
        <div className="">
          <img
              className=" "
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-5.jpg"
            alt=""
          />
        </div>   <div className="p-4">
          <img
              className=" "
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-5.jpg"
            alt=""
          />
        </div>   <div className="">
          <img
              className=" "
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-5.jpg"
            alt=""
          />
        </div>
        <div className="">
          <img
             className=" "
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-1.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default DetailProduct;
