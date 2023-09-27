import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SuccessfulLogin from "./components/pages/SuccessfulLogin";


const router =createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '',
                element: <App/>
            },
            {
                path:'successAuth',
                element: <SuccessfulLogin/>
            }
        ]
    }
]);
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
