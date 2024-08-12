import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './sidebar/SideBar';

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <div className={styles.containerContent}>
        <Header />
        <div className={styles.content}>{props.children}</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
