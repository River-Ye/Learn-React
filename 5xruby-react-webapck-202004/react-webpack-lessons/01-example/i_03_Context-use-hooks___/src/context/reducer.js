export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        id: +new Date(),
        text: action.text,
        done: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }
    case 'TOGGLE_TODO': {
      const { id } = action;
      const newTodos = state.todos.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            text: item.text,
            done: !item.done,
          };
        }
        return item;
      });
      return {
        ...state,
        todos: newTodos,
      };
    }
    case 'TOGGLE_THEME': {
      const theme = state.theme === 'dark' ? 'light' : 'dark';
      document.body.classList.toggle('dark', theme === 'dark');
      return {
        ...state,
        theme,
      };
    }
    default:
      return state;
  }
}
