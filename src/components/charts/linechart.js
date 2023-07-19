import React from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from "recharts";

export default function LineChartCustom({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%" className="layoutItemContainer">
            <LineChart width={500} height={300}  data={data}  margin={{ top: 5,  right: 30, left: 20, bottom: 5  }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone"  dataKey="pv"  stroke="#8884d8"  activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}