import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Deliverers from '../pages/Deliverers';
import Recipients from '../pages/Recipients';
import Issues from '../pages/Issues';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Dashboard>
        <Route path="/order-list" component={Orders} isPrivate />
        <Route path="/deliveryman-list" component={Deliverers} isPrivate />
        <Route path="/recipient-list" component={Recipients} isPrivate />
        <Route path="/issue-list" component={Issues} isPrivate />
      </Dashboard>
    </Switch>
  );
};

export default Routes;
