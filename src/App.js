import React from 'react';
import './App.css';
import Home from './Project/components/Home';
import Signup from './Project/components/Sign-Up';
import Login from './Project/components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={Signup} exact/>
          <Route path='/login' component={Login} exact/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
