import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import Portfolio from './components/Portfolio';
import Contactme from './components/Contactme';

// 🚨 FIX: Added the basename option to resolve 404 errors on GitHub Pages.
// The basename must match your repository name: '/portfoliojune'.
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/contactme', element: <Contactme /> },
], { basename: "/portfoliojune" });

// 🛠️ FIX: Added the non-null assertion operator (!) to resolve the TypeScript error.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


