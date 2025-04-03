import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import Tv from './routes/Tv';
import Search from './routes/Search';
import Home from './routes/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'movies/:movieId',
        element: <Home />
      },
      {
        path: 'tv',
        element: <Tv />
      },
      {
        path: 'search',
        element: <Search />
      },
    ]
  },
]);
