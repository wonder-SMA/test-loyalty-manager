import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppRouter from '../AppRouter';
import NavBar from '../NavBar';
import classes from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className={classes.app}>
        <Routes>
          <Route path="/*" element={<AppRouter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
