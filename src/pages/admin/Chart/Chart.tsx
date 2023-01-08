import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { productList } from "../../../redux/slice/productSlice";
import { Receiptlist } from "../../../redux/slice/receiptSlice";

import BarChart from "./BarChart";


function Chart() {
    const dispatch = useAppDispatch()
    const { receipts } = useAppSelector((state: any) => state.ReceiptSlice)


    useEffect(() => {
        dispatch(Receiptlist())
    }, [dispatch])
    const [userData, setUserData] = useState({
        labels: receipts.map((data: any) => ((data?.createdAt))),
        datasets: [
            {
                label: "Doanh thu theo ngày",
                data: receipts.map((data: any) => data?.total),
                backgroundColor: [
                    "rgb(114,163,247)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],

                borderWidth: 2,
            },
        ],
    });

    // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

    return (
        <div className="App">
            <div style={{ width: 700 }}>
                <BarChart chartData={userData} />
            </div>

        </div>
    );
}

export default Chart;