import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from '@pages/Home';
import CarDetail from '@pages/CarDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<CarDetail />} />
      </Routes>
    </>
  );
}

export default App;
