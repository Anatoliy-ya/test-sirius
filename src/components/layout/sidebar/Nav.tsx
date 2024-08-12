import styles from './SideBar.module.scss';
import HomeIcon from './../../../assets/sidebar/home.svg';
import ScheduleIcon from './../../../assets/sidebar/schedule.svg';
import CommunicationIcon from './../../../assets/sidebar/communication_check.svg';
import SettingsIcon from './../../../assets/sidebar/settings.svg';
import TrainingIcon from './../../../assets/sidebar/training.svg';
import LibraryIcon from './../../../assets/sidebar/library.svg';
import QuestionsIcon from './../../../assets/sidebar/questions.svg';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedPath, setSelectedPath } from '../../../redux/slice';

const navItems = [
  { name: 'Главная', icon: HomeIcon, path: 'home' },
  { name: 'Расписание', icon: ScheduleIcon, path: 'schedule' },
  { name: 'Проверка связи', icon: CommunicationIcon, path: 'communication' },
  { name: 'Настройки', icon: SettingsIcon, path: 'settings' },
  { name: 'Тренировка', icon: TrainingIcon, path: 'training' },
  { name: 'Библиотека', icon: LibraryIcon, path: 'library' },
  { name: 'Вопросы', icon: QuestionsIcon, path: 'questions' },
];
const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const selectedPath = useSelector(selectSelectedPath);
  const navigate = useNavigate();
  console.log('selectedPath', selectedPath);
  const handleItem = (path: string) => {
    dispatch(setSelectedPath(path));
  };

  useEffect(() => {
    if (selectedPath) navigate(`/${selectedPath}`);
  }, [selectedPath]);

  return (
    <div className={styles.nav}>
      {navItems.map((item) => (
        <div
          key={item.path}
          className={`${styles.item} ${selectedPath === item.path ? styles.selected : ''}`}
          onClick={() => handleItem(item.path)}>
          <img
            src={item.icon}
            alt={`${item.name}Icon`}
            className={selectedPath === item.path ? styles.selectedIcon : ''}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Nav;
