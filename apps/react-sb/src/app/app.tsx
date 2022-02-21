// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles['app']}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              key={route.path}
            />
          ))}

          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const logostyle = { height: 30 };
