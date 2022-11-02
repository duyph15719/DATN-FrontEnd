import { Tabs } from "antd";
import React, { Component } from "react";
import Slider from "react-slick";
import "./NewProducts.css";
type Props = {};

const NewProducts = (props: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div>
      <div className="container1">
        {" "}
        <Tabs centered defaultActiveKey="1">
          <Tabs.TabPane tab="SẢN PHẨM MỚI" key="1">
            <div className="max-w-7xl mx-auto ">
              <Slider {...settings}>
                <div>
                  <div className="boxproduct  text-center">
                    <div className="flex justify-center">
                      <img
                        className=""
                        src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg"
                        alt=""
                      />
                    </div>

                    <button className="title">Chuck Taylor Classic</button>
                    <p className="price">1,250,000 ₫</p>
                    <button className="Xemproduct">Xem Sản Phẩm</button>
                  </div>
                </div>
                <div>
                  <div className="boxproduct  text-center">
                    <div className="flex justify-center">
                      <img
                        className=""
                        src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg"
                        alt=""
                      />
                    </div>

                    <button className="title">Chuck Taylor Classic</button>
                    <p className="price">1,250,000 ₫</p>
                    <button className="Xemproduct">Xem Sản Phẩm</button>
                  </div>
                </div>
                <div>
                  <div className="boxproduct  text-center">
                    <div className="flex justify-center">
                      <img
                        className=""
                        src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg"
                        alt=""
                      />
                    </div>

                    <button className="title">Chuck Taylor Classic</button>
                    <p className="price">1,250,000 ₫</p>
                    <button className="Xemproduct">Xem Sản Phẩm</button>
                  </div>
                </div>
                <div>
                  <div className="boxproduct  text-center">
                    <div className="flex justify-center">
                      <img
                        className=""
                        src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg"
                        alt=""
                      />
                    </div>

                    <button className="title">Chuck Taylor Classic</button>
                    <p className="price">1,250,000 ₫</p>
                    <button className="Xemproduct">Xem Sản Phẩm</button>
                  </div>
                </div>
                <div>
                  <div className="boxproduct  text-center">
                    <div className="flex justify-center">
                      <img
                        className=""
                        src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg"
                        alt=""
                      />
                    </div>

                    <button className="title">Chuck Taylor Classic</button>
                    <p className="price">1,250,000 ₫</p>
                    <button className="Xemproduct">Xem Sản Phẩm</button>
                  </div>
                </div>
                <div>
                  <div className="boxproduct  text-center">
                    <div className="flex justify-center">
                      <img
                        className=""
                        src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1.jpg"
                        alt=""
                      />
                    </div>

                    <button className="title">Chuck Taylor Classic</button>
                    <p className="price">1,250,000 ₫</p>
                    <button className="Xemproduct">Xem Sản Phẩm</button>
                  </div>
                </div>
              </Slider>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="SẢN PHẨM BÁN CHẠY" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="SẢN PHẨM PHỔ BIẾN" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default NewProducts;
