// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';

export function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;

const logostyle = { height: 30 };
