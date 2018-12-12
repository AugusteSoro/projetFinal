import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import Dashboard from './views/dashboard/Dashboard.js';
import Historique from './views/historique/Historique.js';




const routes = [
  // { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/historique', name: 'Historique', component: Historique }
];

export default routes;
