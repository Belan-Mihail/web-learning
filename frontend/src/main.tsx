import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.tsx';
import JSTestPage from './pages/JSTestPage.tsx';
import JSChoicePage from './pages/JSChoicePage.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      
      <Route path="js_test_page" element={<JSTestPage />} />
      <Route path="js_choice_page" element={<JSChoicePage />} />
      
      
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);
