// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AuthContext } from '../context';
import { useEffect, useState } from 'react';
import AppRouter from './UI/AppRouter';
import Loader from './components/loader/loader';

export function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem('auth')) {
        setIsAuth(true)
      }
      setIsAuthLoading(false)
    }, 1000);

  }, [])
  return (
    <div className={styles['app']}>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        {isAuthLoading
          ? <Loader />
          : <AppRouter />
        }

      </AuthContext.Provider>
    </div>
  );
}

export default App;

const logostyle = { height: 30 };
