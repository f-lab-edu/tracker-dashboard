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
  name: string;
  count: number;
}

interface BarChartTemplateProps {
  data: CategoryData[];
  barColor: string;
  marginRight?: number;
  marginTop?: number;
}

export const BarChartTemplate = ({
  data,
  barColor,
  marginRight = 0,
  marginTop = 0,
}: BarChartTemplateProps) => {
  return (
    <BarChart
      width={450}
      height={200}
      data={data}
      margin={{ right: marginRight, top: marginTop }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fill: '#dcdcdc' }} />
      <YAxis tick={{ fill: '#dcdcdc' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill={barColor} />
      <Legend verticalAlign="bottom" />
    </BarChart>
  );
};
