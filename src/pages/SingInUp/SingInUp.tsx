import React from "react";
import { Link } from "react-router-dom";

import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

type Props = {};

const SingInUp = (props: Props) => {


  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="uppercase  font-bold text-lg pb-3">ĐĂNG NHẬP</h1>
          <Signin />
        </div>
        <div className="border-l-2  border-indigo-500 pl-6">
          <h1 className="uppercase  font-bold text-lg pb-3">ĐĂNG KÝ</h1>
          <Signup />
        </div>
      </div>
    </>
  );
};

export default SingInUp;
