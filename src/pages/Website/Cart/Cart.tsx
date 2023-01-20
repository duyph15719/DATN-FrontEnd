
import { CardComponents } from "./components/Card";

import { useEffect, useState } from "react";

import { decreaseItemInCart, getLocalStorage, increaseItemInCart, removeItemInCart, sumTotal } from "../../../ultils/cart/cart";
import ListAddress from "./components/Address";

import { Link } from "react-router-dom";
import { GetCart } from "../Pay/Pay";


type Props = {};

const Cart = (props: Props) => {
  const [cart, setCart] = useState<any>([]);
  const [reload, setReload] = useState<any>(true);

  const remove = (id: any) => {
    if (window.confirm("bạn có muốn xóa không ?")) {
      removeItemInCart(id, () => {

        setReload(!reload);
      });
    }
  };
  const increaseItem = (id: any) => {
    increaseItemInCart(id, () => {
      setReload(!reload);
    });
  };
  const decreaseItem = (id: any) => {
    decreaseItemInCart(id, () => {
      setReload(!reload);
    });
  };
  let total = 0;
  // let total = cart.reduce((a:any,b:any)=>{
  //   return a.
  // },0)
  useEffect(() => {
    setCart(getLocalStorage("cart"));
  }, [reload]);
  return (
    <div className="container mx-auto mt-10">
      <div className="md:flex  my-10 sm:">
        <div className="md:w-4/6 bg-white px-10 py-10 sm:w-full">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Giỏ Hàng</h1>
            <h2 className="font-semibold text-2xl text-right">3 Items</h2>
          </div>
          <table className="w-full shadow-inner">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 font-bold whitespace-nowrap">Ảnh</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Tên sản phẩm</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Màu sắc</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">kích cỡ</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Số lượng</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Giá</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Xoá</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart?.map((item: any) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex justify-center">
                        <img src={item?.id?.image} className="object-cover h-28 w-28 rounded-2xl" alt="image" />
                      </div>
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      <div className="flex flex-col items-center justify-center">
                        <h3>{item?.id?.name}</h3>
                      </div>
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">{item?.color?.colorName}</td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">{item?.size?.sizeName}</td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      <div>
                        <button
                          onClick={() => {
                            decreaseItem(item?.randomid);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-flex w-6 h-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        <span className="mx-3">{item?.quantity}</span>
                        <button
                          onClick={() => {
                            increaseItem(item?.randomid);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-flex w-6 h-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      {sumTotal(item?.id?.price, item?.quantity)}
                    </td>
                    <div className="invisible">
                      <p className="invisible"> {(total += sumTotal(item?.id?.price, item?.quantity))}</p>
                    </div>

                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      <button onClick={() => remove(item)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>


                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-sm uppercase w-2/5">
              Sản Phẩm
            </h3>
            <h3 className="font-semibold  text-gray-600 text-sm uppercase w-1/5 text-center">
              Số Lượng{" "}
            </h3>
            <h3 className="font-semibold  text-gray-600 text-sm uppercase w-1/5 text-center">
              Giá
            </h3>
            <h3 className="font-semibold  text-gray-600 text-sm uppercase w-1/5 text-center">
              Tổng
            </h3>
          </div>


          {/* <a
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Tiếp Tục Xem Sản Phẩm
          </a> */}
          <Link to={'/'}>
            <button 
              className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Tiếp Tục Xem Sản Phẩm
            </button>
          </Link>
        </div>
        <div id="summary" className="md:w-2/6 px-8 py-10 sm:w-full border-l border-gray-6000">
          <h1 className="font-semibold text-2xl border-b pb-8">Thông Tin</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              TỔNG SỐ LƯỢNG
            </span>
          </div>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-normal text-xs uppercase">Tổng phụ</span>
            <span className="font-semibold text-sm">{total}</span>
          </div>
          <ListAddress />
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Tổng</span>
              <span>{total}</span>
            </div>

            <Link to={'/pay'}>
              <button disabled={!GetCart()}
                className="bg-orange-700 font-semibold hover:bg-orange-800 py-3 text-sm text-white uppercase w-full">
                Thanh Toán
              </button>
            </Link>

          </div>

          <div className="py-5 ">
            <div className="flex border-b-4 border-gray-200">
              <svg
                className="h-5 w-5 text-black"
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
                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />{" "}
                <circle cx="9" cy="9" r="2" />
              </svg>
              <label
                htmlFor="promo"
                className="font-semibold  mb-3 text-base ml-2"
              >
                {" "}
                Phiếu ưu đãi
              </label>
            </div>
            <input
              type="text"
              id="promo"
              placeholder="Nhập mã khuyến mãi"
              className="p-2 text-sm w-full border-2 mt-5"
            />
          </div>
          <button className="bg-gray-400 font-semibold hover:bg-gray-500 py-3 text-sm text-white uppercase w-full">
            Áp Dụng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

