import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/App.scss';
import AppLayout from './appLayout';
import AdminLayout from './adminLayout';
import LoginLayout from './pages/admin/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<AppLayout />}></Route>
          <Route path="*" element={<AppLayout />}></Route>
        </Route>
        <Route path="admin">
          <Route index element={<AdminLayout />}></Route>
          <Route path='login' element={<LoginLayout />}></Route>
          <Route path='*' element={<AdminLayout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
