import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ isLogged: state.user.name !== '' });


const ConnectedProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props => (
        rest.isLogged
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

const ProtectedRoute = connect(mapStateToProps)(ConnectedProtectedRoute);
export default ProtectedRoute;
