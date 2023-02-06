import {
  faCheck,
  faMoneyCheck,
  faNewspaper,
  faShippingFast,
  faShoppingCart,
  faTimes,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { listProduct } from "../../api/product";
import { StatsApi } from "../../api/stats";
import { listUser } from "../../api/User";
import { MoneyMonth, StatsOrder, StatsUserByMonth } from "../../models/stats";
// import { updateTitle } from "../../../utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import "./Dashboard.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { productList } from "../../redux/slice/productSlice";
import { UserList } from "../../redux/slice/userslice";
import { Receiptlist } from "../../redux/slice/receiptSlice";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "User đăng ký theo tháng",
    },
  },
};

const optionsLine = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Doanh thu hàng tháng",
    },
  },
};

const Dashboard = (props: Props) => {
  const { products } = useAppSelector((state) => state.ProductReducer);
  const { users } = useAppSelector((state) => state.UserReducer);
  const { receipts } = useAppSelector((state: any) => state.ReceiptSlice)
  console.log(receipts)
  const dispatch = useAppDispatch();
  const [statOrder, setStatOrder] = useState<StatsOrder[]>();
  const [totalOrder, setTotalOrder] = useState(0);
  const [statsUserSignup, setStatsUserSignup] = useState<StatsUserByMonth[]>();
  const [moneyMonth, setMoneyMonth] = useState<MoneyMonth[]>();
  console.log(receipts);

  const labels = Array.apply(null, new Array(12)).map((_, index) => `Tháng ${++index}`);
  const dataTable = users?.map((item: any) => {
    var d = new Date(item.createdAt);
    return `${d.getMonth() + 1}`;
  })
  // const dataTable2 = receipts?.map((item: any) => {
  //   var d = new Date(item.createdAt);
  //   return `${d.getMonth()+1}`;
  // })
  const dataTable2 = receipts?.map((item: any) => {
    var d = new Date(item.createdAt);
    return {
      total: item?.total,
      createdAt: `${d.getMonth() + 1}`
    }
  })
  const data = {
    labels,
    datasets: [
      {
        label: `Năm ${new Date().getFullYear()}`,
        data: labels.map((itemMonth) => {
          const month = +itemMonth.split(" ")[1];
          const getMonth = dataTable?.filter((item: any) => item === `${month}`);
          console.log(getMonth);

          if (getMonth) {
            return getMonth.length;
          }
          return 0;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  let sum = 0;
  const dataLine = {
    labels,
    datasets: [
      {
        label: `Năm ${new Date().getFullYear()}`,
        data: labels.map((itemMonth) => {
          const month = +itemMonth.split(" ")[1];
          const getMonth = dataTable2?.filter((item: any) => item.createdAt === `${month}`);
          console.log("sum", getMonth)
          if (getMonth) {
            const data = getMonth?.map((item: any) => {
              sum += item?.total;
              return sum
            })
            return getMonth.length;
          }
          return 0;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  useEffect(() => {
    dispatch(productList());
    dispatch(UserList());
    dispatch(Receiptlist())
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        // // thống kê đơn hàng
        // const statsOrder = await StatsApi.statsOrderByStatus();
        // setTotalOrder(() => {
        //   return statsOrder.payload.stats?.reduce((total, item) => total + item.total, 0);
        // });
        // if (statsOrder.status) setStatOrder(statsOrder.payload.stats);

        // thống kê sp

        // // thống kê user
        // const resUser = await listUser;
        // if (resUser.status) setTotalUser(resUser.payload.total);
        // // user đăng ký theo tháng
        // const resUserByMonth = await StatsApi.statsUserSignupByMonth();


        // // thống kê doanh thu hàng tháng
        // const resMoney = await StatsApi.statsMoneyByMonth();
        // if (resMoney.status) setMoneyMonth(resMoney.payload.stats);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mb-4 gap-4">
        {statOrder?.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-3 rounded-md ${item.status === 0
              ? "order__card-item--new"
              : item.status === 1
                ? "order__card-item--verified"
                : item.status === 2
                  ? "order__card-item--progress"
                  : item.status === 3
                    ? "order__card-item--success"
                    : "order__card-item--cancel"
              }`}
          >
            <div className="">
              <div className="flex items-center justify-between">
                <div className="">
                  {item.status === 0 ? (
                    <FontAwesomeIcon icon={faShoppingCart} />
                  ) : item.status === 1 ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : item.status === 2 ? (
                    <FontAwesomeIcon icon={faShippingFast} />
                  ) : item.status === 3 ? (
                    <FontAwesomeIcon icon={faMoneyCheck} />
                  ) : (
                    <FontAwesomeIcon icon={faTimes} />
                  )}
                </div>
                <div className="text-center">
                  <strong>{item.total}</strong>
                  <p className="font-semibold text-sm">{item.statusText}</p>
                </div>
              </div>

              <div className="order__card-percent">
                <div
                  className="order__card-percent-inner"
                  style={{ width: (item.total / totalOrder) * 100 + "%" }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3]">
          <div>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold">{products.length}</span>
            <span className="text-sm font-semibold">Số sản phẩm hiện có</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3]">
          <div>
            <FontAwesomeIcon icon={faUsers} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold">{users.length}</span>
            <span className="text-sm font-semibold">Số tài khoản hiện có</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3]">
          <div>
            <FontAwesomeIcon icon={faNewspaper} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold">{receipts.length}</span>
            <span className="text-sm font-semibold">Tổng số hóa đơn</span>
          </div>
        </div>
      </div>

      {/* user đăng ký theo tháng */}
      <div className="bg-white mt-4 rounded-md p-3">
        <Bar options={options} data={data} />
      </div>

      {/* doanh thu hàng tháng */}
      <div className="bg-white mt-4 rounded-md p-3">
        <Line options={optionsLine} data={dataLine} />
      </div>
    </div>
  );
};

export default Dashboard;