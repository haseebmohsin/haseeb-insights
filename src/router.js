import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './features/ErrorPage';
import { Counter } from './features/counter/Counter';
import About from './features/profile/About';
import Contact from './features/contact/Contact';
import Home from './features/Home/Home';
import Portfolio from './features/portfolio/Portfolio';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },

      // to be removed later
      {
        path: '/counter',
        element: <Counter />,
      },
    ],
  },
]);
