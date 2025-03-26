import { Cell, Legend, Pie, PieChart } from 'recharts';
import { Card } from '../common/Card';

interface PieChartWrapperProps {
  colors: string[];
  data: string[];
  title: string;
}

export const PieChartWrapper = ({
  data,
  colors,
  title,
}: PieChartWrapperProps) => {
  return (
    <Card width="fit">
      <p className="text-center text-2xl">{title}</p>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((_, idx) => (
            <Cell key={idx} fill={colors[idx % colors.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </Card>
  );
};
