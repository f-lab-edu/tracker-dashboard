import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../../datePicker.css';
interface CustomDatePickerProps {
  setDateRange: (value: [string, string]) => void;
}

export const DateRangePicker = ({ setDateRange }: CustomDatePickerProps) => {
  const today = new Date();
  const weekAgo = new Date(today);
  weekAgo.setDate(today.getDate() - 7);
  const [startDate, setStartDate] = useState<Date | null>(weekAgo);
  const [endDate, setEndDate] = useState<Date | null>(today);
  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const handleChange = (value: [Date | null, Date | null]) => {
    if (value && Array.isArray(value) && value[0] && value[1]) {
      const stringFormat: [string, string] = [
        value[0].toISOString().slice(0, 10),
        value[1].toISOString().slice(0, 10),
      ];
      setDateRange(stringFormat);
    }
  };

  useEffect(() => {
    handleChange([startDate, endDate]);
  }, [startDate, endDate]);

  return (
    <div className="flex items-center">
      <FaRegCalendarAlt className="mr-2 text-accent-100" />
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
};
