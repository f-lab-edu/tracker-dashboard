import { CHART_COLORS } from '@/constants/colors';
import { useVisitorsPeriodCount } from '@/hooks/useVisitorsPeriodCount';
import { visitorPeriodCountToChart } from '@/mappers/visitorsPeriodCountToChart';
import { formatDateToKr, getDefaultDateRange } from '@/utils/date';
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
    formatDateToKr(startDate),
    formatDateToKr(endDate)
  );
  const visitorsData = visitorPeriodCountToChart(data);

  return (
    <Card>
      <Title title="VisitorsPeriodCount Stats" />
      <DateRangePicker onRangeChange={setSelectedRange} />
      <BarChartTemplate
        data={visitorsData.chartData}
        barKeys={visitorsData.chartKeys}
        barColors={CHART_COLORS}
        marginTop={10}
        height={180}
      />
    </Card>
  );
};
