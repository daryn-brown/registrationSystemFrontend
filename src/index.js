import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Courses from './pages/Courses';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Courses/>,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
