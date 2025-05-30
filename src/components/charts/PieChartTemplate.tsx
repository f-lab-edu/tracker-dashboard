import { PieChartDataType } from '@/types/chart';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
interface PieChartTemplateProps {
  colors: string[];
  data: PieChartDataType[];
}

export const PieChartTemplate = ({ data, colors }: PieChartTemplateProps) => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart width={200} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius="50"
        label
      >
        {data.map((item, idx) => (
          <Cell
            key={`${item.name}-${item.value}`}
            fill={colors[idx % colors.length]}
          />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" />
    </PieChart>
    </ResponsiveContainer>
  );
};
