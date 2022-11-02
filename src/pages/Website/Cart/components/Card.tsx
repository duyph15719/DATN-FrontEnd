import { IconESC } from "../../../../components/Icons/IconESC";

interface ButtonProps {
  name: string;
  price: string;
  amount: string;
  total: string;
  id?: string;
  img?: string;
}

export const CardComponents = (props: ButtonProps) => {
  const { name, price, img, amount, total } = props;
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        {" "}
        {/* product */}
        <div className="mx-5 grid  place-items-center ">
          <IconESC customStyle="" />
        </div>
        <div className="flex text-center  ml-4">
          <img src={img} alt="" className="w-20" />
          <span className="font-bold text-sm mt-7 mx-5 ">{name}</span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <input
          className="mx-2 border text-center w-8"
          type="number"
          defaultValue={amount}
          placeholder={amount}
        />
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${total}</span>
    </div>
  );
};
