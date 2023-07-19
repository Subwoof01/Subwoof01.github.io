import React from "react";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from "recharts";


const toPercent = (decimal) => `${(decimal * 100).toFixed(0)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default function AreaChartCustom({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
            width={500}
            height={400}
            data={data}
            stackOffset="expand"
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={toPercent} />
                <Tooltip content={renderTooltipContent} />
                <Area type="monotone" dataKey="a" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
    );
}