import React from "react";
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
  return <div>Thanh toan thanh cong</div>;
};

export default Success;
