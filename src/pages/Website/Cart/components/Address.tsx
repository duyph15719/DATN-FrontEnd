

type Props = {};

const ListAddress = (props: Props) => {

  return (
    <div className="flex justify-between">
      <div className="grid place-items-center ">
        <span className="basis-1/2  text-left font-normal text-sm uppercase">
          Giao Hàng
        </span>
      </div>
      <div className="text-right w-4/6">
        <p>Giao hàng miễn phí.</p>
        <p>Ước tính Hà Nội, Việt Nam.</p>
      </div>
    </div>
  );
};

export default ListAddress;
