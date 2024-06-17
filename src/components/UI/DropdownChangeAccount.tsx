import React, { useState, useEffect, useRef } from 'react';
import styles from './DropdownChangeAccount.module.scss';
import DropdownIcon from './../../assets/svg/dropdown.svg';
import PolygonIcon from './../../assets/svg/polygon.svg';
import LogoutIcon from './../../assets/svg/logout.svg';
import Avatar from '../../assets/avatar/avatar.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuthenticated } from '../../redux/slice';

const DropdownChangeAccount: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [selectAccount, setSelectAccount] = useState<number>(1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const toggleDropdown = () => {
    console.log('click', !isOpen);
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      console.log('click outside', false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <img src={Avatar} alt="Avatar" className={styles.avatar} />
      <img src={DropdownIcon} onClick={toggleDropdown} className={styles.dropbtn} />
      {isOpen && (
        <>
          <img src={PolygonIcon} alt="Polygon" className={styles.polygon} />
          <div className={styles.dropdownContent}>
            <p className={styles.title}>Смена пользователя</p>
            <div className={styles.accounts}>
              <a
                href="#"
                className={
                  selectAccount === 1
                    ? `${styles.chosenAccount} ${styles.selected}`
                    : styles.chosenAccount
                }
                onClick={() => setSelectAccount(1)}>
                <img src={Avatar} alt="Avatar" className={styles.avatarAccount} />
              </a>
              <a
                href="#"
                className={
                  selectAccount === 2
                    ? `${styles.chosenAccount} ${styles.selected}`
                    : styles.chosenAccount
                }
                onClick={() => setSelectAccount(2)}>
                <img src={Avatar} alt="Avatar" className={styles.avatarAccount} />
              </a>
            </div>
            <div className={styles.borderBottom} />
            <div className={styles.logout}>
              <p className={styles.buttonLogout} onClick={handleLogout}>
                Выход
              </p>
              <img src={LogoutIcon} alt="Logout" onClick={handleLogout} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DropdownChangeAccount;
