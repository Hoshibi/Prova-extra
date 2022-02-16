import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';

//Pages
import Home from '@pages/Home';
import CarDetail from '@pages/CarDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<CarDetail />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
