
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { PriceHistoryPoint } from '../types';

interface PriceHistoryChartProps {
  data: PriceHistoryPoint[];
}

const PriceHistoryChart: React.FC<PriceHistoryChartProps> = ({ data }) => {
  const formatYAxis = (tickItem: number) => {
    return `₦${(tickItem / 1000)}k`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="date" stroke="#6b7280" />
        <YAxis stroke="#6b7280" tickFormatter={formatYAxis} />
        <Tooltip
          formatter={(value: number) => [new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(value), 'Price']}
          labelStyle={{ color: '#2D2D2D' }}
          itemStyle={{ color: '#00B074' }}
        />
        <Line type="monotone" dataKey="price" stroke="#00B074" strokeWidth={3} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceHistoryChart;
