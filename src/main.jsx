import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Error } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error />,
    /* children: [
      {
        index: true,
        element: <Landingpage />,
      },
      {
        path: '/assignments',
        children: [
          {
            path: 'Semester-Project-2',
            element: <SemesterProject2 />,
          },
          {
            path: 'JS-Frameworks',
            element: <JSFrameworks />,
          },
          {
            path: 'Project-Exam-2',
            element: <ProjectExam2 />,
          }
        ]
      },
      {
        path: '/about',
        element: <About />,
      }
    ], */
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
