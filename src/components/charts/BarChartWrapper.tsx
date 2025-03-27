import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface CategoryData {
  [key: string]: number;
}

interface BarChartWrapperProps {
  data: CategoryData[];
  labelKey: string;
  valueKey: string;
  title: string;
  barColor: string;
  barBg?: string;
  chartWidth?: number;
  chartHeight?: number;
  marginRight?: number;
  marginTop?: number;
}

export const BarChartWrapper = ({
  data,
  labelKey,
  valueKey,
  title,
  barColor,
  barBg,
  chartWidth = 400,
  chartHeight = 300,
  marginRight = 0,
  marginTop = 0,
}: BarChartWrapperProps) => {
  return (
    <>
      <h3 className="text-center text-xl">{title}</h3>
      <BarChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={{ right: marginRight, top: marginTop }}
      >
        <CartesianGrid strokeDasharray="3 3" fill={barBg} />
        <XAxis dataKey={labelKey} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={valueKey} fill={barColor} />
      </BarChart>
    </>
  );
};
