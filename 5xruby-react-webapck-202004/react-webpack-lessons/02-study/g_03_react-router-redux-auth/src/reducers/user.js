
const initinalState = {
  name: '',
  permission: 0,
};

export default function user(state = initinalState, action) {
  console.log('user', action.type);
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        name: 'milkmidi',
        permission: 9527,
      };
    }
    default:
      return state;
  }
}
