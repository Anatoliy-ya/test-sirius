import { useState } from 'react';

import styles from './App.module.scss';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Schedule from './pages/schedule/Schedule';

import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './redux/slice';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true);

  useEffect(() => {
    if (window.location.pathname === '/login') {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  }, [isAuthenticated]);

  return (
    <div className={`${styles.app} ${isLoginPage ? styles.center : styles.flex}`}>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route
            path="/schedule"
            element={isAuthenticated ? <Schedule /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
