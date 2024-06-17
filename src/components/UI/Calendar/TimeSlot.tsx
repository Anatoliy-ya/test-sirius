import React from 'react';
import EventSlot from './EventSlot';
import styles from './TimeSlot.module.scss';
import { EventProps } from './../../../data/schedule';

interface TimeSlotProps {
  event: EventProps;
}
const TimeSlot: React.FC<TimeSlotProps> = ({ event }) => {
  return (
    <div className={styles.timeSlot}>
      <EventSlot
        startTime={event.startTime}
        endTime={event.endTime}
        subject={event.subject}
        isPaid={event.isPaid}
        isMissed={event.isMissed}
        finish={event.finish}
      />
    </div>
  );
};

export default TimeSlot;
