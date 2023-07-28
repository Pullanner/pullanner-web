import { Button, Select } from 'antd';

export const CalendarHeader = ({ value, onChange }) => {
  const start = 0;
  const end = 12;
  const monthOptions = [];

  let current = value.clone();
  const localeData = value.localeData();
  const months = [];
  for (let i = 0; i < end; i++) {
    current = current.month(i);
    months.push(localeData.monthsShort(current));
  }

  for (let i = start; i < end; i++) {
    monthOptions.push(
      <Select.Option key={i} value={i} className="month-item">
        {months[i]}
      </Select.Option>,
    );
  }

  const year = value.year();
  const month = value.month();
  const YEAR_SPAN = 10;
  const options = [];
  for (let i = year - YEAR_SPAN; i < year + YEAR_SPAN; i++) {
    options.push(
      <Select.Option key={i} value={i} className="year-item">
        {i}
      </Select.Option>,
    );
  }

  const handleTodayClick = () => {
    const todayObj = value.clone();
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    todayObj.$d = today;
    todayObj.$y = currentYear;
    todayObj.$M = currentMonth;
    todayObj.$D = currentDate;
    onChange(todayObj);
  };

  return (
    <div className="p-3">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Select
            size="small"
            className="my-year-select"
            value={year}
            style={{ width: '70px', textAlign: 'center' }}
            showArrow={false}
            onChange={(newYear) => {
              const now = value.clone().year(newYear);
              onChange(now);
            }}
          >
            {options}
          </Select>
          <Select
            size="small"
            value={month}
            style={{ width: '60px', textAlign: 'center' }}
            showArrow={false}
            onChange={(newMonth) => {
              const now = value.clone().month(newMonth);
              onChange(now);
            }}
          >
            {monthOptions}
          </Select>
        </div>
        <Button style={{ padding: '0 15px' }} size="small" onClick={handleTodayClick}>
          Today
        </Button>
      </div>
    </div>
  );
};
