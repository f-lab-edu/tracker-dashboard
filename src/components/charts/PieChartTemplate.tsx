import { Cell, Legend, Pie, PieChart } from 'recharts';

interface PieChartTemplateProps {
  colors: string[];
  data: string[];
}

export const PieChartTemplate = ({ data, colors }: PieChartTemplateProps) => {
  return (
    <PieChart width={200} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius="50"
        label
      >
        {data.map((_, idx) => (
          <Cell key={idx} fill={colors[idx % colors.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" />
    </PieChart>
  );
};
