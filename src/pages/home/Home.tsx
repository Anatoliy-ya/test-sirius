import styles from './Home.module.scss';
import Layout from '../../components/layout/Layout';
import Banner from './../../assets/png/adbanner.png';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.banner}>
          <img src={Banner} alt="Banner" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
