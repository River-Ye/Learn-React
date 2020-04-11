export function actionAddTodo(text:string) {
  return {
    type: 'ADD_TODO',
    text,
  };
}

export function actionClearTodo() {
  return {
    type: 'CLEAR_TODO',
  };
}

export function actionToggleTodo(id:string) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}
