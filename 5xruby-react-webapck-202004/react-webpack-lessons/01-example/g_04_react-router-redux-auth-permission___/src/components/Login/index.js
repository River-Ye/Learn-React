/* eslint camelcase:0 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';


const Login = (props) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { location } = props;
  if (user.name) {
    const { redirect_url = '/' } = queryString.parse(location.search);
    console.log('redirect_url', redirect_url);
    return <Redirect to={redirect_url} />;
  }
  const onLogin = () => {
    console.log('onLogin');
    dispatch({ type: 'LOGIN' });
  };
  return (
    <div className="login">
      <h1>login</h1>
      <div
        className="btn btn-primary"
        onClick={onLogin}
      >
      Login
      </div>
    </div>
  );
};

export default Login;
