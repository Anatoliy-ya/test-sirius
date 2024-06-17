import React from 'react';
import DayColumn from './DayColumn';
import styles from './WeekRow.module.scss';
import { EventProps } from './../../../data/schedule';

interface WeekRowProps {
  week: (number | null)[];
  events: { [key: string]: EventProps[] };
  weekDay: number;
  currentMonth: number;
  currentYear: number;
}

const WeekRow: React.FC<WeekRowProps> = ({ week, events, currentMonth, currentYear, weekDay }) => {
  return (
    <div className={styles.weekRow}>
      {week.map((day, index) => {
        const dateKey = day ? `${currentYear}-${currentMonth + 1}-${day}` : null;
        const dayEvents = dateKey ? events[dateKey] || [] : [];

        return <DayColumn key={index} day={day} events={dayEvents} weekDay={weekDay} />;
      })}
    </div>
  );
};

export default WeekRow;
