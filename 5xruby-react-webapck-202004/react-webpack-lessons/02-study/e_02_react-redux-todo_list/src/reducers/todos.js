import { TodoType } from '../types';

const initialState:TodoType[] = [
  { id: '0', text: '學會  React', done: true },
  { id: '1', text: '年薪百萬', done: false },
];

export default function todos(state = initialState, action) {
  // TODO
  /*
  switch (action.type) {
    case 'ADD_TODO': {
      const newState = state.concat({
        id: new Date().getTime().toString(),
        text: action.text,
        done: false,
      });
      return newState;
    }
    case 'CLEAR_TODO':
      return [];
    case 'TOGGLE_TODO': {
      const newList = state.map((item:TodoType) => {
        if (item.id === action.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
      return newList;
    }
    default:
      return state;
  }
  // */
}
