/* eslint func-names:0, max-len:0 */
// 參考文章
// https://medium.com/@nightspirit622/%E8%A9%B2%E4%B8%8D%E8%A9%B2%E7%94%A8context-api-%E4%BE%86%E5%8F%96%E4%BB%A3-redux-4d7395d5c8da
import React from 'react';

export const themes = {
  light: 'light',
  dark: 'dark',
};

const Context = React.createContext({
  theme: 'light',
  toggleTheme: () => { },
});

export function withTheme(Component) {
  return function (props) {
    return (
      <Context.Consumer>
        {
          ({ theme, toggleTheme }) => <Component {...props} theme={theme} toggleTheme={toggleTheme} />
        }
      </Context.Consumer>
    );
  };
}


export default Context;
