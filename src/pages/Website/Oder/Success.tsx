import { faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hook";
import { addReceipt } from "../../../redux/slice/receiptSlice";
import { GetOrderData } from "./Oder";

type Props = {};

const Success = (props: Props) => {
  const dispatch = useAppDispatch();
  const OrderData = GetOrderData();
  console.log("OrderData",OrderData);
  dispatch(addReceipt(OrderData))
  .unwrap()

  .then(() => {
      window.localStorage.removeItem("cart");

  })
  .catch((err: any) => {
    alert("Yêu cầu điền đầy đủ thông tin để thực hiện thanh toán")
  })
  // call api them oder
  return <div className="mb-32">
  {/* <CartNav /> */}

  <section className="container max-w-6xl mx-auto my-44">
    <h1 className="text-center mt-4 font-semibold text-2xl uppercase">Đặt hàng thành công</h1>

    <p className="text-center mt-2">
      Cảm ơn bạn đã đặt hàng của Converse 88, mã ĐH của bạn là{" "}
      <strong className="cursor-pointer" >
      </strong>
      . Nhân viên sẽ gọi điện từ số điện thoại bạn đã cung cấp để Confirm (Xác nhận) lại với bạn trong thời gian sớm
      nhất để xác nhận đơn hàng.
    </p>

    <div className="flex items-center justify-center mt-2">
      <Link to={"products"}>
        <button className="uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
          <span> Tiếp tục mua hàng</span>
        </button>
      </Link>

      <button
       
        className="ml-2 uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white"
      >
        <span>Kiểm tra đơn hàng </span>
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </button>
    </div>
  </section>
</div>;
};

export default Success;
