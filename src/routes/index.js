import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from '../components/Footer';

import Main from '../pages/main';
import Perfil from '../pages/perfil';

const routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/perfil" component={Perfil} />
      </Switch>

      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default routes;
