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
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";
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
import { getOrderByStatus, Receiptlist } from "../../redux/slice/receiptSlice";
import { message } from "antd";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {};
let sum = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0, sum12 = 0, total = 0, test = 0, test12 = 0;
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
  const dispatch = useAppDispatch();
  const [dataGetOrderByStatus, setDataGetOrderByStatus] = useState<any>();
  const [data1, setData1] = useState<any>();
  const [dataGetOrderByStatus2, setDataGetOrderByStatus2] = useState<any>();
  const [dataGetOrderByStatus3, setDataGetOrderByStatus3] = useState<any>();
  const [dataGetOrderByStatus4, setDataGetOrderByStatus4] = useState<any>();
  useEffect(() => {
    dispatch(productList());
    dispatch(UserList());
    dispatch(Receiptlist());
    sum = 0; sum2 = 0; sum3 = 0; sum4 = 0; sum5 = 0; sum6 = 0; sum7 = 0; sum8 = 0; sum9 = 0; sum10 = 0; sum11 = 0; sum12 = 0;
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const data = await dispatch(getOrderByStatus(0)).unwrap();
        setDataGetOrderByStatus(data);
        const data1 = await dispatch(getOrderByStatus(1)).unwrap();
        const test2 = data1.map((item: any) => {
          test12 += item?.total;
          return test12
        });
        setData1(test12);
        const data2 = await dispatch(getOrderByStatus(2)).unwrap();
        setDataGetOrderByStatus2(data2);

        const data3 = await dispatch(getOrderByStatus(3)).unwrap();
        setDataGetOrderByStatus3(data3);

        const data4 = await dispatch(getOrderByStatus(4)).unwrap();
        setDataGetOrderByStatus4(data4);

      } catch (error) {
        message.error("Có lỗi xảy ra");
      }
    })();
  }, [dispatch]);
  console.log("data1-", data1)
  const labels = Array.apply(null, new Array(12)).map((_, index) => `Tháng ${++index}`);
  const dataTable = users?.map((item: any) => {
    var d = new Date(item.createdAt);
    return `${d.getMonth() + 1}`;
  })

  const dataTable2 = receipts?.map((item: any) => {
    var d = new Date(item.createdAt);
    return {
      status: item.status,
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
          if (getMonth) {
            return getMonth.length;
          }
          return 0;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const dataLine = {
    labels,
    datasets: [
      {
        label: `Năm ${new Date().getFullYear()}`,
        data:
          labels.map((itemMonth) => {
            const month = +itemMonth.split(" ")[1];
            if (month === 1) {
              return dataTable2?.filter((item: any) => item.createdAt === `1` || item.status === 3).map((item: any) => {
                sum += item?.total;
                return sum
              });
            } else if (month === 2) {
              return dataTable2?.filter((item: any) => item.createdAt === `2` || item.status === 3).map((item: any) => {
                sum2 += item?.total;
                return sum2
              });
            } else if (month === 3) {
              return dataTable2?.filter((item: any) => item.createdAt === `3` || item.status === 3).map((item: any) => {
                sum3 += item?.total;
                return sum3
              });
            } else if (month === 4) {
              return dataTable2?.filter((item: any) => item.createdAt === `4`).map((item: any) => {
                sum4 += item?.total;
                return sum4
              });
            } else if (month === 5) {
              return dataTable2?.filter((item: any) => item.createdAt === `5`).map((item: any) => {
                sum5 += item?.total;
                return sum5
              });
            } else if (month === 6) {
              return dataTable2?.filter((item: any) => item.createdAt === `6`).map((item: any) => {
                sum6 += item?.total;
                return sum6
              });
            } else if (month === 7) {
              return dataTable2?.filter((item: any) => item.createdAt === `7`).map((item: any) => {
                sum7 += item?.total;
                return sum7
              });
            } else if (month === 8) {
              return dataTable2?.filter((item: any) => item.createdAt === `8`).map((item: any) => {
                sum8 += item?.total;
                return sum8
              });
            } else if (month === 9) {
              return dataTable2?.filter((item: any) => item.createdAt === `9`).map((item: any) => {
                sum9 += item?.total;
                return sum9
              });
            } else if (month === 10) {
              return dataTable2?.filter((item: any) => item.createdAt === `10`).map((item: any) => {
                sum10 += item?.total;
                return sum10
              });
            } else if (month === 11) {
              return dataTable2?.filter((item: any) => item.createdAt === `11`).map((item: any) => {
                sum11 += item?.total;
                return sum11
              });
            } else if (month === 12) {
              return dataTable2?.filter((item: any) => item.createdAt === `12`).map((item: any) => {
                sum12 += item?.total;
                return sum12
              });
            }
            return 0;
          }),

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  
 
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mb-4 gap-4">
      <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3]">
          <div>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold"> {new Intl.NumberFormat().format((data1))}&nbsp;VND</span>
            <span className="text-sm font-semibold">Doanh thu đơn hàng mới</span>
          </div>
        </div>
        {/* <div className="text-center">
          <strong>{data1}</strong>
          
        </div> */}
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
      {/* doanh thu hàng tháng */}
      <div className="bg-white mt-4 rounded-md p-3">
        <Line options={optionsLine} data={dataLine} />
      </div>
      {/* user đăng ký theo tháng */}
      <div className="bg-white mt-4 rounded-md p-3">
        <Bar options={options} data={data} />
      </div>


    </div>
  );
};

export default Dashboard;