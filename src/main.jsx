import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Show from './components/Show/Show.jsx';
import ViewShowDetails from './components/ViewShowDetails/ViewShowDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Show></Show>,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all")
      },
      {
        path: "/show/:id",
        element: <ViewShowDetails></ViewShowDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
