import { useVisitorsPeriodCount } from '@/hooks/useVisitorsPeriodCount';
import { visitorPeriodCountToChart } from '@/mappers/visitorsPeriodCountToChart';
import { formatDateToSv, getDefaultDateRange } from '@/utils/date';
import { useState } from 'react';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { DateRangePicker } from '../common/DateRangePicker';
import { Title } from '../common/Title';

export const VisitorsPeriodCount = () => {
  const [selectedRange, setSelectedRange] = useState<[Date, Date]>(
    getDefaultDateRange()
  );
  const [startDate, endDate] = selectedRange;
  const { data } = useVisitorsPeriodCount(
    formatDateToSv(startDate),
    formatDateToSv(endDate)
  );
  const visitorsData = visitorPeriodCountToChart(data);

  return (
    <Card>
      <Title title="VisitorsPeriodCount Stats" />
      <DateRangePicker rangeSelect={setSelectedRange} />
      <BarChartTemplate
        data={visitorsData.chartData}
        barKeys={visitorsData.chartKeys}
        barColors={['#FFD700', '#917800']}
      />
    </Card>
  );
};
