import React from 'react';
import TimeSlot from './EventSlot';
import styles from './DayColumn.module.scss';
import { EventProps } from './../../../data/schedule';

interface DayColumnProps {
  day: number | null;
  events: EventProps[];
  weekDay: number;
}

const DayColumn: React.FC<DayColumnProps> = ({ day, events, weekDay }) => {
  return (
    <div className={styles.dayColumn}>
      <div className={styles.dayHeader}>{day}</div>
      {events.map((event, index) => (
        <TimeSlot
          key={index}
          startTime={event.startTime}
          endTime={event.endTime}
          subject={event.subject}
          isPaid={event.isPaid}
          isMissed={event.isMissed}
          finish={event.finish}
        />
      ))}
    </div>
  );
};

export default DayColumn;
