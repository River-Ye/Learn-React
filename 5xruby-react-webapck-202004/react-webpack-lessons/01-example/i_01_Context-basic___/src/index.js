import React from 'react';
import ReactDOM from 'react-dom';

// https://medium.com/@Whien/%E9%80%8F%E9%81%8E-react-usecontext-%E8%88%87-usereducer-%E4%BE%86%E5%81%9A-global-state-manager-bed30fb1f08b
const todos = [
  '學會React', '年新百萬'
];

// CreateContext
const ContextStore = React.createContext({
  todos,
});

// Provider
function Application() {
  return (
    <ContextStore.Provider value={{ todos: todos }}>
      <Todos />
    </ContextStore.Provider>
  );
}
// Consumer
function Todos() {
  return (
    <ContextStore.Consumer>
      {value => (
        value.todos.map(todo => <div key={todo}>{todo}</div>)
      )}
    </ContextStore.Consumer>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root'),
);
