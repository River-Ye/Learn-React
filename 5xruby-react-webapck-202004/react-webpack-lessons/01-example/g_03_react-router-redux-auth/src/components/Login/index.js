/* eslint camelcase:0 */
import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { type Store } from '../../types';

const Login = () => {
  const isLogged = useSelector((state:Store) => state.user.name !== '');
  const dispatch = useDispatch();
  const location = useLocation();
  const atLogin = React.useCallback(() => {
    dispatch({ type: 'LOGIN' });
  }, []);
  if (isLogged) {
    const { redirect_url = '/' } = queryString.parse(location.search);
    console.log('redirect_url', redirect_url);
    return <Redirect to={redirect_url} />;
  }
  return (
    <div className="login">
      <h1>login</h1>
      <button
        className="btn btn-primary"
        onClick={atLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
