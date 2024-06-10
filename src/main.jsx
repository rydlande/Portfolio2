import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Error, Landingpage, Portfolio, Work, About } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
      {
        path: '/portfolio2',
        element: <Portfolio />,
      },
      {
      path: '/work',
      element: <Work />,
      },
      {
        path: '/about',
        element: <About />,
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
