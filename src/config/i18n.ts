import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: 'Login',
      password: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password',
      loginButton: 'Login',
      singInAsCoach: 'Sign in as coach',
      registration: 'Registration',
      noAccount: 'No account?',
      loginInSiriusFuture: 'Login in Sirius Future',
      singIn: 'Sign in',
    },
  },
  ru: {
    translation: {
      login: 'Логин',
      password: 'Пароль',
      rememberMe: 'Запомнить меня',
      forgotPassword: 'Я Забыл пароль',
      loginButton: 'Войти',
      singInAsCoach: 'Войти как тренер',
      registration: 'Зарегистрироваться',
      noAccount: 'Нет аккаунта?',
      loginInSiriusFuture: 'Войти в Sirius Future',
      singIn: 'Войти',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
