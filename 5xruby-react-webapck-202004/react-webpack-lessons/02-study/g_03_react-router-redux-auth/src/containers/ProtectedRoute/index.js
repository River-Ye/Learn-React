import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { type Store } from '../../types';

// TODO
/*
const ConnectedProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector((state:Store) => state.user.name !== '');
  return (
    <Route
      {...rest}
      render={(props) => (
        isLogged
          ? <Component {...props} />
          : (
            <Redirect to={
                {
                  pathname: '/login',
                  search: `?redirect_url=${props.location.pathname}`,
                }
              }
            />
          )
      )}
    />
  );
};
// */
export default ConnectedProtectedRoute;
