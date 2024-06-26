import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Forum from './comment-section.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carousel from './routes/Carousel.jsx';
import Form from './routes/form.jsx';
import Newsletter from './routes/newsletter.jsx';
import TipCalculator from './routes/tip-calculator.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Carousel />,
  },
  { path: 'form', element: <Form /> },
  { path: 'newsletter', element: <Newsletter /> },
  { path: 'tip-calculator', element: <TipCalculator /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
