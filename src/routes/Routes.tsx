import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const isSigned = !!user;
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isSigned ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'order-list',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
