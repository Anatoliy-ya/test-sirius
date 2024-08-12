import React, { useState } from 'react';
import styles from './Calendar.module.scss';
import WeekRow from './WeekRow';
import { EventProps } from './../../../data/schedule';

interface CalendarProps {
  schedule: { [key: string]: EventProps[] };
}

const Calendar: React.FC<CalendarProps> = ({ schedule }) => {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getMonthName = (month: number): string => {
    const date = new Date(currentYear, month);
    return date.toLocaleString('ru-RU', { month: 'long' });
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getDaysInMonth = (year: number, month: number): Date[] => {
    const date = new Date(year, month, 1);
    const days: Date[] = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    if (daysInMonth.length === 0) return null;

    const firstDayOfMonth = daysInMonth[0].getDay();
    const lastDayOfMonth = daysInMonth[daysInMonth.length - 1].getDay();

    // Пустые ячейки в начале
    const leadingEmptyDays = Array.from({
      length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1,
    });

    // Пустые ячейки в конце
    const trailingEmptyDays = Array.from({ length: lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth });

    const calendarDays = [
      ...leadingEmptyDays.map(() => null),
      ...daysInMonth.map((date) => date.getDate()),
      ...trailingEmptyDays.map(() => null),
    ];

    const weeks: (number | null)[][] = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      weeks.push(calendarDays.slice(i, i + 7));
    }

    return weeks.map((week, index) => (
      <WeekRow
        key={index}
        week={week}
        events={schedule}
        currentMonth={currentMonth}
        currentYear={currentYear}
        weekDay={new Date(currentYear, currentMonth).getDay()}
      />
    ));
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.monthHeader}>
        <button onClick={handlePrevMonth}>←</button>
        {getMonthName(currentMonth)} {currentYear}
        <button onClick={handleNextMonth}>→</button>
      </div>
      <div className={styles.header}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.dayHeader}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.month}>{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;

// new Date(currentYear, currentMonth).getDay()
