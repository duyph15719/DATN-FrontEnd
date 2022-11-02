import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const SingInUp = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="uppercase  font-bold text-lg pb-3">ĐĂNG NHẬP</h1>
          <form action="">
            <label htmlFor="" className="font-bold text-sm">
              Tên tài khoản hoặc địa chỉ email *
            </label>
            <br />
            <input
              className="border-solid border-2 rounded  border-indigo-[#ededed] w-80 h-10 mt-3 mb-3"
              type="text"
            />
            <br />
            <label htmlFor="" className="font-bold text-sm">
              Mật khẩu *
            </label>
            <br />
            <input
              className="border-solid border-2 rounded  border-indigo-[#ededed] w-80 h-10 mt-3 mb-3"
              type="text"
            />
            <br />
            <button className="w-32 h-10 bg-red-700 text-white font-bold text-sm mr-3">
              ĐĂNG NHẬP
            </button>{" "}
            <input type="checkbox" />{" "}
            <label htmlFor="" className="font-bold text-sm">
              {" "}
              Ghi nhớ mật khẩu
            </label>
            <br />
            <Link className="mt-7" to="">
              Quên mật khẩu?
            </Link>
          </form>
        </div>

        <div className="border-l-2  border-indigo-500 pl-6">
          <h1 className="uppercase  font-bold text-lg pb-3">ĐĂNG KÝ</h1>
          <form action="">
            <label htmlFor="" className="font-bold text-sm">
              Tên tài khoản hoặc địa chỉ email *
            </label>
            <br />
            <input
              className="border-solid border-2 rounded  border-indigo-[#ededed] w-80 h-10 mt-3 mb-3"
              type="text"
            />
            <br />
            <label htmlFor="" className="font-bold text-sm">
              Mật khẩu *
            </label>
            <br />
            <input
              className="border-solid border-2 rounded  border-indigo-[#ededed] w-80 h-10 mt-3 mb-3"
              type="text"
            />
            <br />
            <button className="w-32 h-10 bg-red-700 text-white font-bold text-sm mr-3">
              ĐĂNG KÝ
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingInUp;
