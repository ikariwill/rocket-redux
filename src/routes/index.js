import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Perfil from '../pages/perfil';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/perfil" component={Perfil} />
    </Switch>
  </BrowserRouter>
);

export default routes;
