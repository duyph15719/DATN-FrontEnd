import { useState } from "react";
import { InputComponent } from "./components/Input";
import ListLogin from "./components/ListLogin";
import ListPromoCode from "./components/ListPromoCode";
import ListSignup from "./components/ListSigup";
import "./Pay.css";
type Props = {};

const Pay = (props: Props) => {
  const [transferForm, setTransferForm] = useState<any>({
    payment1: false,
    payment2: false,
  });
  const cash = () => {
    return (
      <p className="text-grey-darkest py-3 pl-3 text-base ">
        Trả tiền mặt khi giao hàng.
      </p>
    );
  };
  const transfer = () => {
    return (
      <p className="text-grey-darkest py-3 pl-3 text-base ">
        Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui
        lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn
        hàng sẽ đươc giao sau khi tiền đã chuyển.
      </p>
    );
  };
  const handldClick = (e: any) => {
    const currentRadio = e.target.name;
    if (currentRadio === "payment1") {
      setTransferForm({
        payment1: true,
        payment2: false,
      });
    } else {
      setTransferForm({
        payment1: false,
        payment2: true,
      });
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <ListLogin />
      <ListPromoCode />
      <div className="md:flex  my-10 sm:flex-none ">
        <div className="md:w-3/4 bg-white px-10    ">
          <form className="border-t-2 py-10">
            <div className="mb-6">
              <InputComponent
                children="Họ và tên"
                type="text"
                placeholder="Nguyễn, Trần, Lê, ..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Quốc gia *
              </label>
              <select
                defaultValue={"VN"}
                name="calc_shipping_country"
                id="calc_shipping_country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Chọn quốc gia…</option>
                <option value="AF">Afghanistan</option>
                <option value="EG">Ai Cập</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="GB">Anh (UK)</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua và Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="PW">Belau</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BQ">Bonaire, Saint Eustatius và Saba</option>
                <option value="BA">Bosnia và Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BR">Brazil</option>
                <option value="BN">Brunei</option>
                <option value="BG">Bulgaria</option>
                <option value="VN">Việt Nam</option>
              </select>
            </div>

            <div className="mb-6">
              <InputComponent
                children="Tỉnh / Thành phố *"
                type="text"
                placeholder="Tỉnh / Thành phố *"
              />
            </div>
            <div className="mb-6">
              <InputComponent
                children="Địa chỉ"
                type="text"
                placeholder="Địa chỉ"
              />
            </div>
            <div className="mb-6">
              <InputComponent
                children="Địa chỉ Email"
                type="email"
                placeholder="...@gmail.com"
              />
            </div>
            <div className="mb-6">
              <InputComponent
                children="Số điện thoại *"
                type="number"
                placeholder="Số Điện Thoại"
              />
            </div>
            <ListSignup />
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ghi chú đơn hàng (tuỳ chọn)
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ghi chú về đơn hàng, 
                            Ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn"
              ></textarea>
            </div>
          </form>
        </div>
        <div
          id="summary"
          className=" md:w-1/2 px-8 py-10 border-2 border-orange-700  h-1/2 sm:p-5"
        >
          <h1 className="font-semibold text-2xl border-b pb-8">
            Đơn Hàng Của Bạn
          </h1>
          <div className="flex justify-between mt-10 mb-5 border-b pb-3">
            <span className="font-semibold text-sm uppercase">Sản phẩm</span>
            <span className="font-semibold text-sm">Tổng</span>
          </div>
          <div>
            <span className="text-base">
              Converse "Metal CONS" Pull Over Hoodie × 1
            </span>
            <span className="float-right font-semibold text-sm">
              1,400,000 ₫
            </span>
          </div>
          <div className="flex justify-between mt-10 mb-5 border-b pb-3">
            <span className="font-semibold text-sm uppercase">Tổng phụ</span>
            <span className="font-semibold text-sm">1,400,000 ₫</span>
          </div>
          <div className="flex justify-between mt-10 mb-5 border-b pb-3">
            <span className="font-semibold text-sm uppercase">Giao hàng</span>
            <span className="font-semibold text-sm">Giao hàng miễn phí</span>
          </div>
          <div className="flex justify-between mt-10 mb-5 border-b pb-3">
            <span className="font-semibold text-sm uppercase">Tổng</span>
            <span className="font-semibold text-sm">1,400,000 ₫</span>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                onClick={(e: any) => handldClick(e)}
                className="form-radio text-indigo-600"
                name="payment1"
                checked={transferForm.payment1}
              />
              <span className="text-grey-darkest font-thin text-xl  ml-2 py-3">
                Trả tiền mặt khi nhận hàng
              </span>
            </label>
            {transferForm.payment1 && cash()}
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                onClick={(e: any) => handldClick(e)}
                className="form-radio text-green-500"
                name="payment2"
                checked={transferForm.payment2}
              />
              <span className="text-grey-darkest font-thin text-xl ml-2">
                {" "}
                Chuyển khoản ngân hàng
              </span>
            </label>
            {transferForm.payment2 && transfer()}
          </div>

          <button className="bg-orange-500 font-semibold hover:bg-orange-600 py-3 text-sm text-white uppercase p-2 mt-5">
            Đặt Hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;
