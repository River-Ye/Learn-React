/* eslint func-names:0 */
import React from 'react';
import { fetchUserData } from '@/services/api';


const HigherOrderComponent = function (WrappedComponent) {
  return class InnerComponent extends React.Component {
    state = {}

    componentDidMount() {
      fetchUserData().then((userData) => {
        this.setState(userData);
      });
    }

    render() {
      return (
        <WrappedComponent {...this.state} />
      );
    }
  };
};

export default HigherOrderComponent;
