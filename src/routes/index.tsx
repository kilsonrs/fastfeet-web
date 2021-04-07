import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Deliverers from '../pages/Deliverers';
import Recipients from '../pages/Recipients';
import Issues from '../pages/Issues';
import CreateOrder from '../pages/Orders/CreateOrder';
import EditOrder from '../pages/Orders/EditOrder';
import CreateDeliveryman from '../pages/Deliverers/CreateDeliveryman';
import EditDeliveryman from '../pages/Deliverers/EditDeliveryman';
import CreateRecipient from '../pages/Recipients/CreateRecipient';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Dashboard>
        <Route path="/orders" component={Orders} isPrivate />
        <Route path="/create-order" exact component={CreateOrder} isPrivate />
        <Route path="/edit-order" exact component={EditOrder} isPrivate />
        <Route path="/deliverers" component={Deliverers} isPrivate />
        <Route
          path="/create-deliveryman"
          component={CreateDeliveryman}
          isPrivate
        />
        <Route path="/edit-deliveryman" component={EditDeliveryman} isPrivate />
        <Route path="/recipients" component={Recipients} isPrivate />
        <Route path="/create-recipient" component={CreateRecipient} isPrivate />
        <Route path="/issues" component={Issues} isPrivate />
      </Dashboard>
    </Switch>
  );
};

export default Routes;
