import { CHART_COLORS } from '@/constants/colors';
import { usePeriodVisitCounts } from '@/hooks/usePeriodVisitCount';
import { visitorPageByPeriodToChart } from '@/mappers/visitorPagesByPeriodToChart';
import { formatDateToKr, getDefaultDateRange } from '@/utils/date';
import { useState } from 'react';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { DateRangePicker } from '../common/DateRangePicker';
import { Title } from '../common/Title';

export const VisitorsPageByPeriodCount = () => {
  const [selectedRange, setSelectedRange] = useState<[Date, Date]>(
    getDefaultDateRange()
  );
  const [startDate, endDate] = selectedRange;
  const { data } = usePeriodVisitCounts(
    formatDateToKr(startDate),
    formatDateToKr(endDate)
  );
  const visitorData = visitorPageByPeriodToChart(data);

  return (
    <Card>
      <Title title="VisitorsPageByPeriodCount Stats" />
      <DateRangePicker onRangeChange={setSelectedRange} />
      <BarChartTemplate
        data={visitorData.chartData}
        barKeys={visitorData.chartKeys}
        barColors={CHART_COLORS}
        marginTop={10}
        height={180}
      />
    </Card>
  );
};
