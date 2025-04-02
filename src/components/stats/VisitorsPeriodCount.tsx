import { useVisitorsPeriodCount } from '@/hooks/useVisitorsPeriodCount';
import { useState } from 'react';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { DateRangePicker } from '../common/DateRangePicker';
import { Title } from '../common/Title';

export const VisitorsPeriodCount = () => {
  const today = new Date();
  const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const stringToday = today.toISOString().slice(0, 10);
  const stringOneWeekAgo = oneWeekAgo.toISOString().slice(0, 10);

  const [dateRange, setDateRange] = useState<[string, string]>([
    stringOneWeekAgo,
    stringToday,
  ]);
  const [startDate, endDate] = dateRange;
  const { data } = useVisitorsPeriodCount(startDate, endDate);
  return (
    <Card>
      <Title title="VisitorsPeriodCount Stats" />
      <DateRangePicker setDateRange={setDateRange} />
      <BarChartTemplate
        data={data.chartData}
        barKeys={data.chartKeys}
        barColors={['#FFD700', '#917800']}
      />
    </Card>
  );
};
