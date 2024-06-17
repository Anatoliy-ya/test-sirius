import { useEffect, useState } from 'react';
import styles from './Login.module.scss';

import logo from './../../assets/logo/logo.svg';
import Input from '../../components/UI/Input';
import Checkbox from '../../components/UI/Checkbox';
import Button from '../../components/UI/Button';

import i18n from '../../config/i18n';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsAuthenticated } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>('ru');
  const [email, setEmail] = useState<string>('user@gmail.com');
  const [password, setPassword] = useState<string>('user');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const CheckboxRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    if (email === 'user@gmail.com' && password === 'user') {
      dispatch(login(email));
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('Login successful!');
      navigate('/');
    }
  }, [isAuthenticated]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <>
      <div className={styles.login}>
        <img className={styles.logo} src={logo} alt="logo" />
        <label className={styles.label}>{t('loginInSiriusFuture')}</label>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder={t('login')}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.loginInput}
          />
          <Input
            type="password"
            placeholder={t('password')}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={styles.loginInput}
          />
          <Checkbox
            label={t('rememberMe')}
            checked={rememberMe}
            onChange={CheckboxRememberMeChange}
            className={styles.checkbox}
          />
          <Button className={styles.button} type="submit">
            {t('singIn')}
          </Button>
        </form>
        <div className={styles.links}>
          <a href="#">{t('forgotPassword')}</a>
          <a href="#">{t('singInAsCoach')}</a>
        </div>
        <div className={styles.registration}>
          <p className={styles.noAccount}>{t('noAccount')}</p>
          <a href="#">{t('registration')}</a>
        </div>
      </div>
      <div className={styles.languageSwitcher}>
        <p
          onClick={() => changeLanguage('ru')}
          className={`${styles.languageButton} ${language === 'ru' ? styles.chosenLanguage : ''}`}>
          RU
        </p>
        <p
          onClick={() => changeLanguage('en')}
          className={`${styles.languageButton} ${language === 'en' ? styles.chosenLanguage : ''}`}>
          EN
        </p>
      </div>
    </>
  );
};

export default Login;
