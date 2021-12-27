import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import PageContent from './components/PageContent/PageContent';

const App = () => {

  return (
      <BrowserRouter>
        <PageContent/>
      </BrowserRouter>
  );
};

export default App;