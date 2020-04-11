import { getTodoList } from '../api/fetch';

export function actionAddTodo(text) {
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


export function changeLoading(loading) {
  return {
    type: 'CHANGE_LOADING',
    value: loading,
  };
}


export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}

function receiveProducts(todos) {
  return {
    type: 'RECEIVE_TODOLIST',
    todos,
  };
}

export function fetchTodoList() {
  console.log('fetchTodoList');
  return function (dispatch) {
    dispatch(changeLoading(true));
    getTodoList().then((todos) => {
      dispatch(receiveProducts(todos));
      dispatch(changeLoading(false));
    });
  };
}

export function fetchTodoListES7() {
  console.log('fetchTodoListES7');
  return async function (dispatch) {
    dispatch(changeLoading(true));
    const todos = await getTodoList();
    dispatch(receiveProducts(todos));
    dispatch(changeLoading(false));
  };
}
