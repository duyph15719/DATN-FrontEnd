import ListAddress from "./components/Address";
import { CardComponents } from "./components/Card";

type Props = {};

const Cart = (props: Props) => {
  const data = [
    {
      name: "string 1",
      price: "string 1",
      amount: " 1",
      total: "string 1",
      id: "string 1",
      categories: "string 1",
      img: "http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-2-300x225.jpg",
    },
    {
      name: "string 12",
      price: "400",
      amount: " 400",
      total: "400",
      id: "1",
      categories: "string 12",
      img: "http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-2-300x225.jpg",
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <div className="md:flex  my-10 sm:">
        <div className="md:w-4/6 bg-white px-10 py-10 sm:w-full">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Giỏ Hàng</h1>
            <h2 className="font-semibold text-2xl text-right">3 Items</h2>
          </div>
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
          {data.map((row, index) => (
            <CardComponents
              key={index}
              name={row.name}
              price={row.price}
              amount={row.amount}
              total={row.total}
              img={row.img}
            />
          ))}

          <a
            href="#"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Tiếp Tục Xem Sản Phẩm
          </a>
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
            <span className="font-semibold text-sm">5,000,000 ₫</span>
          </div>
          <ListAddress />
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Tổng</span>
              <span>$600</span>
            </div>
            <button className="bg-orange-700 font-semibold hover:bg-orange-800 py-3 text-sm text-white uppercase w-full">
              Thanh Toán
            </button>
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
