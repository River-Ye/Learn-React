export default function count(state = 20, action) {
  // /*
  console.log(action.type);
  switch (action.type) {
    case 'INCREASE': {
      return state + 1;
    }
    case 'DECREASE':
      return state - 1;
    default:
      return state; // 這段一定要加
  }
  // */
}
