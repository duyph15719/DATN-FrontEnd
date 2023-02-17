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
import { getOrderByStatus, ReceiptDetaillist, Receiptlist } from "../../redux/slice/receiptSlice";
import { message } from "antd";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {};
let sum = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0, sum12 = 0, test = 0, test1 = 0, test2 = 0, test3 = 0, test12 = 0;
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
  const { order } = useAppSelector((state: any) => state.ReceiptSlice)
  const dispatch = useAppDispatch();
  const [dataGetOrderByStatus, setDataGetOrderByStatus] = useState<any>();
  const [dataGetOrderByStatus1, setDataGetOrderByStatus1] = useState<any>();
  const [dataGetOrderByStatus2, setDataGetOrderByStatus2] = useState<any>();
  const [dataGetOrderByStatus3, setDataGetOrderByStatus3] = useState<any>();
  const [dataT1, setDataT1] = useState<any>();
  const [dataT2, setDataT2] = useState<any>();
  const [dataT3, setDataT3] = useState<any>();
  const [dataT4, setDataT4] = useState<any>();
  const [dataT5, setDataT5] = useState<any>();
  const [dataT6, setDataT6] = useState<any>();
  const [dataT7, setDataT7] = useState<any>();
  const [dataT8, setDataT8] = useState<any>();
  const [dataT9, setDataT9] = useState<any>();
  const [dataT10, setDataT10] = useState<any>();
  const [dataT11, setDataT11] = useState<any>();
  const [dataT12, setDataT12] = useState<any>();

  const [dataGetOrderByStatus4, setDataGetOrderByStatus4] = useState<any>();
  const [dataGetOrderByStatus5, setDataGetOrderByStatus5] = useState<any>();
  useEffect(() => {
    dispatch(productList());
    dispatch(UserList());
    dispatch(Receiptlist());
    dispatch(ReceiptDetaillist());
    sum = 0; sum2 = 0; sum3 = 0; sum4 = 0; sum5 = 0; sum6 = 0; sum7 = 0; sum8 = 0; sum9 = 0; sum10 = 0; sum11 = 0; sum12 = 0; test = 0; test1 = 0; test2 = 0; test3 = 0; test12 = 0;
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const data = await dispatch(getOrderByStatus(0)).unwrap();
        data.map((item: any) => {
          test += item?.total;
          return test
        });
        setDataGetOrderByStatus(test);
        const data1 = await dispatch(getOrderByStatus(1)).unwrap();
        data1.map((item: any) => {
          test12 += item?.total;
          return test12
        });
        setDataGetOrderByStatus1(test12);
        const data2 = await dispatch(getOrderByStatus(2)).unwrap();
        data2.map((item: any) => {
          test1 += item?.total;
          return test1
        });
        setDataGetOrderByStatus2(test1);

        const data3 = await dispatch(getOrderByStatus(3)).unwrap();
        data3.map((item: any) => {
          test2 += item?.total;
          return test2
        });
        const dataTable2 = data3?.map((item: any) => {
          var d = new Date(item.createdAt);
          return {
            total: item?.total,
            createdAt: `${d.getMonth() + 1}`
          }
        })
        dataTable2?.filter((item: any) => item.createdAt === `1`).map((item: any) => {
          sum += item?.total;
          return sum
        });
        dataTable2?.filter((item: any) => item.createdAt === `2`).map((item: any) => {
          sum2 += item?.total;
          return sum2
        });
        dataTable2?.filter((item: any) => item.createdAt === `3`).map((item: any) => {
          sum3 += item?.total;
          return sum3
        });
        dataTable2?.filter((item: any) => item.createdAt === `4`).map((item: any) => {
          sum4 += item?.total;
          return sum4
        });
        dataTable2?.filter((item: any) => item.createdAt === `5`).map((item: any) => {
          sum5 += item?.total;
          return sum5
        });
        dataTable2?.filter((item: any) => item.createdAt === `6`).map((item: any) => {
          sum6 += item?.total;
          return sum6
        });
        dataTable2?.filter((item: any) => item.createdAt === `7`).map((item: any) => {
          sum7 += item?.total;
          return sum7
        });
        dataTable2?.filter((item: any) => item.createdAt === `8`).map((item: any) => {
          sum8 += item?.total;
          return sum8
        });
        dataTable2?.filter((item: any) => item.createdAt === `9`).map((item: any) => {
          sum9 += item?.total;
          return sum9
        });
        dataTable2?.filter((item: any) => item.createdAt === `10`).map((item: any) => {
          sum10 += item?.total;
          return sum10
        });
        dataTable2?.filter((item: any) => item.createdAt === `11`).map((item: any) => {
          sum11 += item?.total;
          return sum11
        });
        dataTable2?.filter((item: any) => item.createdAt === `12`).map((item: any) => {
          sum12 += item?.total;
          return sum12
        });
        setDataGetOrderByStatus3(test2);
        setDataT1(sum)
        setDataT2(sum2)
        setDataT3(sum3)
        setDataT4(sum4)
        setDataT5(sum5)
        setDataT6(sum6)
        setDataT7(sum7)
        setDataT8(sum8)
        setDataT9(sum9)
        setDataT10(sum10)
        setDataT11(sum11)
        setDataT12(sum12)

        const data4 = await dispatch(getOrderByStatus(4)).unwrap();
        data4.map((item: any) => {
          test3 += item?.total;
          return test3
        });
        setDataGetOrderByStatus4(test3);
      } catch (error) {
        message.error("Có lỗi xảy ra");
      }
    })();
  }, [dispatch]);
  const labels = Array.apply(null, new Array(12)).map((_, index) => `Tháng ${++index}`);
  const dataTable = users?.map((item: any) => {
    var d = new Date(item.createdAt);
    return `${d.getMonth() + 1}`;
  })
  let count = order?.map((item: any) => {
    return item.productName
  })
    .reduce(function (allNames: { [x: string]: number; }, name: string) {
      if (name in allNames) allNames[name]++
      else allNames[name] = 1

      return allNames
    }, {})
  const testArr = Object.entries(count || {}).sort((a: any, b: any) => b[1] - a[1]);
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
              return dataT1
            } else if (month === 2) {
              return dataT2
            } else if (month === 3) {
              return dataT3
            } else if (month === 4) {
              return dataT4
            } else if (month === 5) {
              return dataT5
            } else if (month === 6) {
              return dataT6
            } else if (month === 7) {
              return dataT7
            } else if (month === 8) {
              return dataT8
            } else if (month === 9) {
              return dataT9
            } else if (month === 10) {
              return dataT10
            } else if (month === 11) {
              return dataT11
            } else if (month === 12) {
              return dataT12
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
        <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3] order__card-item--new">
          <div>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold"> {new Intl.NumberFormat().format((dataGetOrderByStatus))}&nbsp;VND</span>
            <span className="text-sm font-semibold">Doanh thu đơn hàng mới</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3] order__card-item--verified">
          <div>
            <FontAwesomeIcon icon={faCheck} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold"> {new Intl.NumberFormat().format((dataGetOrderByStatus1))}&nbsp;VND</span>
            <span className="text-sm font-semibold">Doanh thu đơn hàng đã xác nhận</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3] order__card-item--progress">
          <div>
            <FontAwesomeIcon icon={faShippingFast} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold"> {new Intl.NumberFormat().format((dataGetOrderByStatus2))}&nbsp;VND</span>
            <span className="text-sm font-semibold">Doanh thu đơn hàng đang giao</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3] order__card-item--success">
          <div>
            <FontAwesomeIcon icon={faMoneyCheck} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold"> {new Intl.NumberFormat().format((dataGetOrderByStatus3))}&nbsp;VND</span>
            <span className="text-sm font-semibold">Doanh thu đơn hàng thành công</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white rounded-md text-[#b5b5c3] order__card-item--cancel">
          <div>
            <FontAwesomeIcon icon={faTimes} />
          </div>

          <div className="text-center">
            <span className="block text-black font-semibold"> {new Intl.NumberFormat().format((dataGetOrderByStatus4))}&nbsp;VND</span>
            <span className="text-sm font-semibold">Doanh thu đơn hàng bị hủy</span>
          </div>
        </div>
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

      <table className="table-layout: auto border-separate border border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">Tên sản phẩm</th>
            <th className="border border-slate-300 ...">Số lượng sản phẩm đã bán</th>
          </tr>
        </thead>
        <tbody>
          {
            testArr.map((item: any) => (
              // testArr2.map((index: any) => (
              <tr>
                <td className="border border-slate-300 ...">{item[0]}</td>
                <td className="border border-slate-300 ...">{item[1]}</td>
              </tr>
            ))
            // ))
          }
        </tbody>
      </table>


    </div>
  );
};

export default Dashboard;