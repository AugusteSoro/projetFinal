import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import Dashboard from './views/dashboard/Dashboard.js';
import Historique from './views/historique/Historique.js';
import Ajout from './views/volontaire/Ajout';




const routes = [
  // { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/historique', name: 'Historique', component: Historique },
  { path: '/addvolontaire', name: 'Ajouter volontaire', component: Ajout }
];

export default routes;
