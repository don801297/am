import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Detail from './Detail.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import { useNavigate } from 'react-router-dom';




const router = createBrowserRouter([



  {
    path: "/",
    element: <App />,
  },
  {
    path: "Order-Details",
    element: <Detail />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
