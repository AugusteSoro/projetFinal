import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './views/sessions/login/Login.js';
import { Register } from './views/sessions/register/Register.js';
import { Historique } from './views/historique/Historique.js';

import { DefaultLayout } from './containers/DefaultLayout.js';


import { HashRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      // <div className="App">
      // <Login />
      // </div>

<HashRouter>
<Switch>
  {/* <Route exact path="/login" name="Login Page" component={Login} /> */}
  <Route exact path="/register" name="Register Page" component={Register} />
  <Route exact path="/historique" name="Historique Page" component={Historique} />
  <Route exact path="/dashboard" name="Home" component={DefaultLayout} />
  <Route path="/" name="Login Page" component={Login} />
</Switch>
</HashRouter>


    );
  }
}

export default App;
