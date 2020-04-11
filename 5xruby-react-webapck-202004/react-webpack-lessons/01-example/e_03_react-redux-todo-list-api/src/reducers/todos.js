const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          done: false,
        },
      ];
    case 'CLEAR_TODO':
      return [];
    case 'TOGGLE_TODO': {
      const newState = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
      return newState;
    }
    case 'RECEIVE_TODOLIST':
      return [...action.todos];
    default:
      return state;
  }
};

export default todos;
