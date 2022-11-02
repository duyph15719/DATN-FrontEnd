import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="bg-black ">
      <div className="max-w-7xl mx-auto text-white grid md:grid-cols-4 grid-cols-1 gap-4 pt-10 mb-5">
        <div>
          <h1 className="text-white font-bold text-lg ">GIỚI THIỆU</h1>
          <p className="text-[#a4a4a4] text-[14px] mb-[0.8em] mt-4">
            Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ,
            mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử
            Converse 100 năm, và đang không ngừng phát triển lớn mạnh.
          </p>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg ">ĐỊA CHỈ</h1>
          <p className="text-[#a4a4a4] text-[14px] mt-4 flex">
            <svg
              className="h-8 w-8 text-red-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>{" "}
            319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
          </p>
          <p className="text-[#a4a4a4] text-[14px] flex ">
            <svg
              className="h-8 w-8 text-red-500 mr-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{" "}
              <path d="M15 7a2 2 0 0 1 2 2" /> <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
            076 922 0162
          </p>
          <p className="text-[#a4a4a4] text-[14px] flex ">
            <svg
              className="h-8 w-8 text-red-500 mr-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
              <polyline points="3 7 12 13 21 7" />
            </svg>
            demonhunterg@gmail.com <br />
            mon@mona.media
          </p>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg ">MENU</h1>
          <div className="grid md:grid-cols-2 grid-cols-3">
            <Link className="text-[#a4a4a4] text-[14px]  mt-4" to="">
              Trang Chủ1
            </Link>
            <Link className="text-[#a4a4a4] text-[14px]  mt-4" to="">
              Trang Chủ2
            </Link>
            <Link className="text-[#a4a4a4] text-[14px] mt-4" to="">
              Trang Chủ3
            </Link>
            <Link className="text-[#a4a4a4] text-[14px] mt-4" to="">
              Trang Chủ4
            </Link>
            <Link className="text-[#a4a4a4] text-[14px] mt-4" to="">
              Trang Chủ5
            </Link>
            <Link className="text-[#a4a4a4] text-[14px] mt-4" to="">
              Trang Ch6
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg ">MẠNG XÃ HỘI</h1>
          <div className="flex mt-4">
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>

            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 pt-10 text-white pb-5">
        <h1 className="text-white font-bold text-lg">ĐĂNG KÝ NHẬN THÔNG TIN</h1>
        <form action="">
          <input
            type=""
            name=""
            id="email"
            required
            placeholder="Email Address"
          />
          <input type="submit" value="ĐĂNG KÝ" id="send" />
        </form>
        <div className="icona flex">
          <img
            className="w-14"
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/payment1.png"
            alt=""
          />
          <img
            className="w-14"
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/payment2.png"
            alt=""
          />
          <img
            className="w-14"
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/payment3.png"
            alt=""
          />
          <img
            className="w-14"
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/payment4.png"
            alt=""
          />
          <img
            className="w-14"
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/payment5.png"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-white">
        <p>© Bản quyền thuộc về . Thiết kế website FPT</p>
      </div>
    </section>
  );
};

export default Footer;
