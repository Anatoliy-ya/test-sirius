import styles from './SideBar.module.scss';
import logo from './../../../assets/logo/logo.svg';
import SiriusIcon from './../../../assets/logo/siriusFuture.svg';
import Gift from './../../../assets/png/giftIllustration.png';
import Nav from './Nav';
import Button from '../../UI/Button';

const SideBar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.containerLogo}>
        <img src={logo} alt="logo" className={styles.logo} />
        <img src={SiriusIcon} alt="Sirius" />
      </div>
      <div className={styles.containerMenu}>
        <Nav />
      </div>
      <div className={styles.info}>
        <p className={styles.infoTitle}>Учитесь бесплатно</p>
        <p className={styles.infoText}>
          Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!
        </p>
        <img src={Gift} alt="" className={styles.gift} />
        <Button type="button" className={styles.InfoButton}>
          Узнать
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
