import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, Drawer, Input, Modal, Popover, Space, Typography } from "antd";
import "antd/dist/antd.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SingInUp from "../../pages/SingInUp/SingInUp";
import { GetUser } from "../../pages/Website/Pay/Pay";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, sumTotal } from "../../ultils/cart/cart";
import { toast } from "react-toastify";
const { Search } = Input;


const { Panel } = Collapse;

const { Text } = Typography;
type Props = {};

const Header = (props: Props) => {
  const [userModal, setUserModal] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<any>([]);
  const [reload, setReload] = useState<any>(true);

  const [search, setSearch] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);
  const navigate = useNavigate();
  const showModal = async () => {
    await setIsModalOpen(true);
    const antmodalfooter: any = document.querySelector(".ant-modal-footer");
    antmodalfooter.style.display = "none";
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  // const onChange = (key: string | string[]) => {
  //   console.log(key);
  // };
  const showCart = () => {
    setOpenCart(true);
  };
  const showmenu = () => {
    setOpenMenu(true);
  };
  const onCloseMenu = () => {
    setOpenMenu(false);
  };
  const onCloseCart = () => {
    setOpenCart(false);
  };
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchStr = e.target.value;
    setSearch(searchStr);
    setLoadingSearch(true);
  };

  // search khi submit form
  const handleSearchForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search?.trim()) return toast.info("Vui lòng nhập tên SP!");

    navigate(`products/${search}`);
  };

  const content = (
    // <div>
    //   <Space direction="vertical">
    //     <Search
    //       placeholder="Nhập tên sản phẩm"
    //       value={search}
    //       onChange={handleSearch}
    //       enterButton
    //     />
    //   </Space>
    // </div>
    <form className="flex" onSubmit={handleSearchForm}>
      <input
        type="text"
        id="form-search-control"
        value={search}
        onChange={handleSearch}
        className="text-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] flex-1 border px-2 h-8 text-sm outline-none"
        placeholder="Nhập tên sản phẩm"
      />
      <button className="px-3 bg-red-500 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
      </button>
    </form>
  );

  // const cart = <div>Chưa có gì trong giỏ hàng</div>;

  const dropdown = (
    <>
      <li className="w-48 p-3  hover:bg-[#DCDCDC]">
        <Link to="">Classic</Link>
      </li>
      <li className="w-48 p-3  hover:bg-[#DCDCDC]">
        <Link to="">Classic</Link>
      </li>
      <li className="w-48 p-3  hover:bg-[#DCDCDC]">
        <Link to="">Classic</Link>
      </li>
      <li className="w-48 p-3  hover:bg-[#DCDCDC]">
        <Link to="">Classic</Link>
      </li>
    </>
  );
  const LogOut = () => {
    window.localStorage.removeItem('user')
    Swal.fire({
      icon: 'success',
      title: 'Đăng xuất tài khoản thành công',
      timer: 1000,
      showConfirmButton: false,
    })
    setUserModal(null)
  }
  useEffect(() => {
    setUserModal(GetUser())
  }, [window.localStorage.getItem('user')])
  let total = 0;
  useEffect(() => {
    setCart(getLocalStorage("cart"));
  }, [reload]);
  return (
    <>
      <section className="bg-black">
        <div className="Nav  max-w-7xl mx-auto">

          {!userModal ? (
            <div className=" Signinup font-bold text-sm leading-[84px]">
              <button onClick={showModal}>ĐĂNG NHẬP / ĐĂNG KÝ</button>
            </div>
          ) : (
            <div className=" Signinup font-bold text-sm py-3">
              <Link to="/managerAccount">
                <p className="text-cyan-50">XIN CHÀO :{userModal.user.firstName + " " + userModal.user.lastName}  </p>
              </Link>

              <button className="text-cyan-50" onClick={LogOut}>ĐĂNG XUẤT </button>
            </div>
          )}
          <div onClick={showmenu} className="icon">
            <svg
              className="h-8 w-8 text-red-500"
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
              <line x1="4" y1="6" x2="20" y2="6" />{" "}
              <line x1="4" y1="12" x2="20" y2="12" />{" "}
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
          <div className="logo">
            <img width="" height="" src="https://res.cloudinary.com/tr-n-t-ng/image/upload/v1675313175/g8i23pfw2l2seec8iunk.png" alt="" />
          </div>
          <div className="cart">
            <div className="pc">
              <div>
                <Link to="/cart">
                  <svg
                    className="h-6 w-6 text-white mt-7 ml-5"
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
                    <circle cx="9" cy="19" r="2" />{" "}
                    <circle cx="17" cy="19" r="2" />{" "}
                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                  </svg>
                </Link>
              </div>

              <Popover
                className="pl-3 pt-7"
                placement="bottom"
                content={cart}
                trigger="click"
              >
                GIỎ HÀNG/
                {cart &&
                  cart?.map((item: any) => (
                    <div key={item._id}>






                      {new Intl.NumberFormat().format(sumTotal(item?.id?.price, item?.quantity))} VND




                      {/* {(total += sumTotal(item?.id?.price, item?.quantity))} */}







                    </div>
                  ))}

              </Popover>
              <Popover placement="bottom" content={content} trigger="click">
                <svg
                  className="h-6 w-6 text-white mt-7"
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
                  <circle cx="10" cy="10" r="7" />{" "}
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </Popover>
            </div>

            <svg
              onClick={showCart}
              className="h-8 w-8 icon-cart  text-red-500"
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
              <circle cx="9" cy="19" r="2" /> <circle cx="17" cy="19" r="2" />{" "}
              <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
            </svg>
          </div>
        </div>

        <Drawer
          placement="left"
          width="70%"
          onClose={onCloseMenu}
          open={openMenu}
        >
          <FontAwesomeIcon icon={faAddressBook} />
          <p>
            <form action="" className="form-seach">
              <input
                className="input-search"
                type="text"
                placeholder="Tìm Kiếm"
              />
              <button className="btn-seach ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="magnifying-glass"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-magnifying-glass"
                >
                  <path
                    fill="currentColor"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                    className="text-white"
                  ></path>
                </svg>
              </button>
            </form>
          </p>

          <div className="Menu-con">
            <Link
              className="text-[13px] text-[rgb(189, 189, 189)] font-bold "
              to="a"
            >
              Trang Chủ
            </Link>
          </div>
          <div className="Menu-con">
            <Link
              className="text-[13px] text-[rgb(189, 189, 189)] font-bold"
              to="a"
            >
              Trang Chủ
            </Link>
          </div>
          <Collapse>
            <Panel header="This is panel header 1" key="1">
              <p>a</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>a</p>
            </Panel>
          </Collapse>
          <div className="Menu-con">
            <Link
              className="text-[13px] text-[rgb(189, 189, 189)] font-bold "
              to="a"
            >
              Trang Chủ
            </Link>
          </div>
          <div className="Menu-con">
            <Link
              className="text-[13px] text-[rgb(189, 189, 189)] font-bold "
              to="about"
            >
              Giới Thiệu
            </Link>
          </div>
          <div className="Menu-con">
            <Link
              className="text-[13px] text-[rgb(189, 189, 189)] font-bold "
              to="purchased"
            >
              Lịch sử mua
            </Link>
          </div>
          <div className="Menu-con">
            <Link
              className="text-[13px] text-[rgb(189, 189, 189)] font-bold "
              to="a"
            >
              Trang Chủ
            </Link>
          </div>
          <b>HOTLINE: 076 922 0162</b>
        </Drawer>
        <Drawer
          title="GIỎ HÀNG"
          placement="right"
          width="70%"
          onClose={onCloseCart}
          open={openCart}
        >
          <p>Chưa có sản phẩm trong giỏ hàng.</p>
        </Drawer>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width="870px"
        >
          <SingInUp />
        </Modal>
      </section>
      <section className='bg-[#DCDCDC] hidden'>
        <nav className="max-w-6xl mx-auto">
          <ul className="p-3 text-center">
            <li className="inline-block p-3"><Link className="text-black font-bold" to="">TRANG CHỦ</Link></li>
            <li className="inline-block p-3"><Link className="text-black font-bold" to="about">GIỚI THIỆU</Link></li>

            <li className="inline-block p-3">
              <Link className="text-black font-bold" to="products">

                SẢN PHẨM

              </Link>
            </li>

            <li className="inline-block p-3"><Link className="text-black font-bold" to="news">TIN TỨC</Link></li>
            <li className="inline-block p-3"><Link className="text-black font-bold" to="lienhe">LIÊN HỆ</Link></li>
          </ul>
        </nav>
      </section>

    </>
  );
};

export default Header;
