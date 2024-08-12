import styles from './Header.module.scss';

import DropdownChangeAccount from '../UI/DropdownChangeAccount';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.massage}></div>
      <div className={styles.accounts}>
        <DropdownChangeAccount />
      </div>
    </div>
  );
};

export default Header;
