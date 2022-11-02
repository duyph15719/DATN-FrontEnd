import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "1", students: 400, student: 100 },
  { name: "2", students: 700, student: 200 },
  { name: "3", students: 200, student: 300 },
  { name: "4", students: 100, student: 400 },
];

export const ChartBar = () => {
  return (
    <BarChart width={470} height={400} data={data}>
      <Bar dataKey="students" fill="green" />
      <Bar dataKey="student" fill="yellow" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  );
};
