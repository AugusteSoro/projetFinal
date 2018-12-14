import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Menu } from './Menu.js'

// routes config
import routes from '../routes';
import Ajout from '../views/volontaire/Ajout.js';

export class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app container">
        <div className="app-body">
          <main className="main">
            <container fluid>
            <div>DEBUT MENU</div>
            <Menu />
            <hr/>

            <div>FIN MENU</div>

                        {/* <Ajout /> */}


            

              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </container>
          </main>
        </div>
        <div>FOOTER</div>
        <div>FIN FOOTER</div>


      </div>
    );
  }
}

export default DefaultLayout;
