import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Work from './page/WorkPage'
import './index.css'
import AboutPage from './page/AboutPage'
import {
  createBrowserRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './page/error';
import Header from './components/layout/Header'
import Band from './components/layout/Band'
import Contact from './page/ContactPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <HashRouter />
  </React.StrictMode>,
)
