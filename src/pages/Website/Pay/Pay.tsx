import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { useAppDispatch } from '../../../redux/hook';
import { addReceipt } from "../../../redux/slice/receiptSlice";
import { sumTotal } from "../../../ultils/cart/cart";
import ListLogin from "./components/ListLogin";
import ListPromoCode from "./components/ListPromoCode";
import "./Pay.css";
type Props = {
  name?: string;
  status?: number,
  address?: string,
  payments?: number,
  phone?: number,
  note?: string,
  UserId?: string | any,
  city?: string,
  email?: string,
  ProductsId?: string | any,
};

export function GetUser() {
  const user = window.localStorage.getItem('user')
  return user && JSON.parse(user);
}
export function GetCart() {
  const cart = window.localStorage.getItem('cart')
  return cart && JSON.parse(cart);
}


// const renderUserRoles = (userId: string) => {
//   const user = USER_ROLE.filter((o) => o.id === userId);
//   return <>{user[0]?.name}</>
// }

const Pay = (props: Props) => {
  let Sum = 0;
  const [transferForm, setTransferForm] = useState<any>({
    payment: 0,
    payment1: false,
    payment2: false,
  });
  const cash = () => {
    return (
      <p className="text-grey-darkest py-3 pl-3 text-base ">
        Trả tiền mặt khi nhận hàng.
      </p>
    );
  };
  const transfer = () => {
    return (
      <p className="text-grey-darkest py-3 pl-3 text-base ">
        Thực hiện thanh toán thông qua ví điện tử MoMo. Đơn
        hàng sẽ được giao sau khi tiền đã chuyển thành công.
      </p>
    );
  };
  const handldClick = (e: any) => {
    const currentRadio = e.target.id;
    if (currentRadio === "0") {
      setTransferForm({
        payment: 0,
        payment1: true,
        payment2: false,
      });
    } else {
      setTransferForm({
        payment: 1,
        payment1: false,
        payment2: true,
      });
    }
  };
  const data = GetCart()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();
  const dispatch = useAppDispatch()
  const navigation = useNavigate()
  const onFinish: SubmitHandler<Props> = async dataInput => {
    const user = GetUser();

    const orderData = {
      UserId: user.user._id || "",
      email: user.user.email || dataInput.email || "",
      name: dataInput.name,
      address: dataInput.address,
      phone: dataInput.phone,
      status: 0,
      payments: dataInput.payments,
      note: dataInput.note,
      city: dataInput.city,
      total: Sum
    }
    dispatch(addReceipt(orderData)).unwrap()
      .then(() => {
        if (transferForm.payment === 0) {
          window.localStorage.removeItem("cart");
          setTimeout(() => {
            navigation("/managerAccount")
          }, 1200);
        } else {
          setTimeout(() => {
            navigation("/pay")
          }, 1200);
        }
        Swal.fire({
          icon: 'success',
          title: 'Thêm thành công',
          timer: 1000,
          showConfirmButton: false,
        })
      })
      .catch((err: any) => {
        if (!user) {
          alert("Yêu cầu đăng nhập tài khoản để thực hiện thanh toán")
        } else {
          alert("Yêu cầu điền đầy đủ thông tin để thực hiện thanh toán")
        }
      })
  };

  return (
    <div className="container mx-auto mt-10">
      <ListLogin />
      <ListPromoCode />
      <div className="">

        <form onSubmit={handleSubmit(onFinish)} method="POST" className="border-t-2  md:flex  my-10 sm:flex-none ">

          <div className="md:w-3/4 bg-white px-10    ">
            <p className="pb-5 text-red-700">(*): bắt buộc điền thông tin</p>
            <div className="mb-6">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Họ và tên (*)</label>
              <input type="text" id=""
                className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                placeholder="Nguyễn, Trần, Lê, ..."
                {...register("name", { required: "Yêu cầu nhập thông tin." })} />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Quốc gia (*)
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
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tỉnh / Thành phố (*)</label>
              <input type="text" id=""
                className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                placeholder="Tỉnh / Thành phố *"
                {...register("city")} />
              <p className="text-red-500 text-sm">{errors.city?.message}</p>
            </div>
            <div className="mb-6">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Địa chỉ (*)</label>
              <input type="text" id=""
                className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                placeholder="Địa chỉ nhà"
                {...register("address")} />
              <p className="text-red-500 text-sm">{errors.address?.message}</p>
            </div>
            <div className="mb-6">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Địa chỉ Email (*)</label>
              <input type="email" id=""
                className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                placeholder="...@gmail.com"
                {...register("email")} />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
            <div className="mb-6">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Số điện thoại (*)</label>
              <input type="number" id=""
                className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                placeholder="Số điện thoại "
                {...register("phone")} />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>
            {/* <ListSignup /> */}
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ghi chú đơn hàng (tuỳ chọn)
              </label>
              <textarea
                {...register("note")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ghi chú về đơn hàng, 
                            Ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn"
              />
            </div>
          </div>
          <div id="summary" className=" md:w-1/2 px-8 py-10 border-2 border-orange-700  h-1/2 sm:p-5" >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Đơn Hàng Của Bạn
            </h1>
            <div className="flex justify-between mt-10 mb-5 border-b pb-3">
              <span className="font-semibold text-sm uppercase">Sản phẩm</span>
              <span className="font-semibold text-sm">Tổng</span>
            </div>
            {data &&
              data?.map((item: any) => (
                <div>
                  <span className="text-base">
                    {item?.id?.name} × {item?.quantity}
                  </span>
                  <span className="float-right font-semibold text-sm">
                    {sumTotal(item?.id?.price, item?.quantity)} ₫
                  </span>
                  <span className=" invisible">{(Sum += sumTotal(item?.id?.price, item?.quantity))}</span>
                </div>
              ))}
            <div className="flex justify-between mt-10 mb-5 border-b pb-3">
              <span className="font-semibold text-sm uppercase">Tổng phụ</span>
              <span className="font-semibold text-sm">{Sum} ₫</span>
            </div>
            <div className="flex justify-between mt-10 mb-5 border-b pb-3">
              <span className="font-semibold text-sm uppercase">Giao hàng</span>
              <span className="font-semibold text-sm">Giao hàng miễn phí</span>
            </div>
            <div className="flex justify-between mt-10 mb-5 border-b pb-3">
              <span className="font-semibold text-sm uppercase">Tổng</span>
              <span className="font-semibold text-sm">{Sum} ₫</span>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  {...register("payments", { required: true })}
                  type="radio" value="0" id='0'
                  onClick={(e: any) => handldClick(e)}
                  checked={transferForm.payment1} />
                <span className="text-grey-darkest font-thin text-xl  ml-2 py-3">
                  Trả tiền mặt khi nhận hàng
                </span>
              </label>
              {transferForm.payment1 && cash()}
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  {...register("payments", { required: true })}
                  type="radio" value="1" id='1'
                  onClick={(e: any) => handldClick(e)}
                  checked={transferForm.payment2} />
                <span className="text-grey-darkest font-thin text-xl ml-2">
                  {" "}
                  Thanh toán thông qua ví điện tử MoMo
                </span>
              </label>
              {transferForm.payment2 && transfer()}
            </div>

            <button className="bg-orange-500 font-semibold hover:bg-orange-600 py-3 text-sm text-white uppercase p-2 mt-5">
              Đặt Hàng
            </button>
          </div>
        </form>



      </div>
    </div>
  );
};

export default Pay;
