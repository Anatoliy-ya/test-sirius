import React from 'react';
import styles from './Event.module.scss';
import walletIcon from './../../../assets/svg/wallet.svg';
import { EventProps } from './../../../data/schedule';

interface EventSlotProps extends Omit<EventProps, 'id'> {
  startTime: string;
  endTime: string;
  subject: string;
  isPaid: boolean;
  isMissed: boolean;
  finish: boolean;
}

const EventSlot: React.FC<EventSlotProps> = (props) => {
  const classEvent = `${styles.event} ${props.isMissed ? styles.missed : ''} ${
    props.finish ? styles.finished : ''
  }`;
  console.log('Class applied:', classEvent);
  return (
    <div className={classEvent}>
      <div className={styles.time}>
        {props.startTime} - {props.endTime}
      </div>
      <div className={styles.subject}>{props.subject}</div>
      {!props.isPaid && <img src={walletIcon} alt="Paid" className={styles.walletIcon} />}
    </div>
  );
};

export default EventSlot;
