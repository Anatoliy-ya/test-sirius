export interface EventProps {
  id: number;
  startTime: string;
  endTime: string;
  subject: string;
  isPaid: boolean;
  isMissed: boolean;
  finish: boolean;
}

export const schedule: { [key: string]: EventProps[] } = {
  '1': [
    {
      id: 1,
      startTime: '13:00',
      endTime: '13:45',
      subject: 'Ментальная арифметика',
      isPaid: true,
      isMissed: false,
      finish: true,
    },
    {
      id: 2,
      startTime: '14:00',
      endTime: '14:45',
      subject: 'Ментальная арифметика',
      isPaid: false,
      isMissed: true,
      finish: true,
    },
  ],

  '2': [
    {
      id: 1,
      startTime: '13:00',
      endTime: '13:45',
      subject: 'Ментальная арифметика',
      isPaid: true,
      isMissed: false,
      finish: true,
    },
  ],

  '3': [
    {
      id: 1,
      startTime: '13:00',
      endTime: '13:45',
      subject: 'Ментальная арифметика',
      isPaid: false,
      isMissed: false,
      finish: false,
    },
    {
      id: 2,
      startTime: '14:00',
      endTime: '14:45',
      subject: 'Ментальная арифметика',
      isPaid: false,
      isMissed: false,
      finish: false,
    },
  ],
  '10': [
    {
      id: 1,
      startTime: '13:00',
      endTime: '13:45',
      subject: 'Ментальная арифметика',
      isPaid: false,
      isMissed: false,
      finish: false,
    },
    {
      id: 2,
      startTime: '14:00',
      endTime: '14:45',
      subject: 'Ментальная арифметика',
      isPaid: false,
      isMissed: false,
      finish: false,
    },
  ],
};
