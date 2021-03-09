import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import SignIn from '../pages/SignIn';
import DeliverymanList from '../pages/DeliverymanList';
import OrderList from '../pages/OrderList';
import RecipientList from '../pages/RecipientList';
import IssueList from '../pages/IssueList';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Dashboard>
        <Route path="/order-list" component={OrderList} isPrivate />
        <Route path="/deliveryman-list" component={DeliverymanList} isPrivate />
        <Route path="/recipient-list" component={RecipientList} isPrivate />
        <Route path="/issue-list" component={IssueList} isPrivate />
      </Dashboard>
    </Switch>
  );
};

export default Routes;
