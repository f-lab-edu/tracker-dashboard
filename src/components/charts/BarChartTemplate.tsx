import { MultiBarDataType, SingleBarDataType } from '@/types/chart';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface BarChartTemplateProps {
  data: SingleBarDataType[] | MultiBarDataType[];
  barKeys?: string[];
  barColors: string[];
  marginRight?: number;
  marginTop?: number;
}

export const BarChartTemplate = ({
  data,
  barColors,
  barKeys,
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
      <XAxis dataKey="name" tick={{ fill: '#b4a5a5' }} />
      <YAxis tick={{ fill: '#dcdcdc' }} />
      <Tooltip />
      <Legend />
      {barKeys ? (
        barKeys.map((key, idx) => (
          <Bar
            key={key}
            dataKey={key}
            fill={barColors[idx % barColors.length]}
          />
        ))
      ) : (
        <Bar dataKey="count" fill={barColors[0]} />
      )}
      <Legend verticalAlign="bottom" />
    </BarChart>
  );
};
