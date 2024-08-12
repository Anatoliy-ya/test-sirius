import styles from './Schedule.module.scss';
import Layout from '../../components/layout/Layout';
import Calendar from '../../components/UI/Calendar/Calendar';
import { schedule } from './../../data/schedule';

const Schedule: React.FC = () => {
  return (
    <Layout>
      <div className={styles.schedule}>
        <Calendar schedule={schedule} />
      </div>
    </Layout>
  );
};

export default Schedule;
