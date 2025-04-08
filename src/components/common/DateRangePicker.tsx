import { getDefaultDateRange } from '@/utils/date';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../../datePicker.css';
interface CustomDatePickerProps {
  onRangeChange: (range: [Date, Date]) => void;
}

export const DateRangePicker = ({ onRangeChange }: CustomDatePickerProps) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>(
    getDefaultDateRange()
  );

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    setDateRange(dates);
    const [startDate, endDate] = dates;
    if (startDate && endDate) {
      onRangeChange([startDate, endDate]);
    }
  };

  return (
    <div className="flex items-center m-2">
      <FaRegCalendarAlt className="mr-2 text-accent-100" />
      <DatePicker
        selectsRange={true}
        onChange={handleDateChange}
        startDate={dateRange[0]}
        endDate={dateRange[1]}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
};
