import React from 'react';

const todos = [
  {
    id: '1',
    text: '學會React',
    done: true,
  },
  {
    id: '2',
    text: '年薪百萬',
    done: false,
  },
];

const theme = {
  theme: 'light',
};

const Store = React.createContext({
  todos,
  theme,
});

export default Store;
