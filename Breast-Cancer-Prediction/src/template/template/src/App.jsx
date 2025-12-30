import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheet.css'


//my components

import HomePage from './components/HomePage';
import NextPage from './components/NextPage';
import ResultPageYes  from './components/ResultPageYes';
import ResultPageNo  from  './components/ResultPageNo';





function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/next' element={<NextPage />} />
        <Route path='/result-cancer' element={<ResultPageYes />} />
        <Route path='/result-healthy' element={<ResultPageNo />} />
      </Routes>
    </Router>
      
  );
}

export default App;