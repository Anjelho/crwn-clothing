import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
