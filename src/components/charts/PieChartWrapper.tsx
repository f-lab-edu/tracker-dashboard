import { Cell, Legend, Pie, PieChart } from 'recharts';

interface PieChartWrapperProps {
  colors: string[];
  data: string[];
  title: string;
  dataKey: string;
  nameKey: string;
  chartWidth?: number;
  chartHeight?: number;
  chartRadius?: number;
}

export const PieChartWrapper = ({
  data,
  colors,
  title,
  dataKey,
  nameKey,
  chartWidth = 300,
  chartHeight = 300,
  chartRadius = 80,
}: PieChartWrapperProps) => {
  return (
    <>
      <h3 className="text-xl">{title}</h3>
      <PieChart width={chartWidth} height={chartHeight}>
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={chartRadius}
          label
        >
          {data.map((_, idx) => (
            <Cell key={idx} fill={colors[idx % colors.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </>
  );
};
