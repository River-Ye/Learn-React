
const initinalState = {
  loading: false,
};

const common = (state = initinalState, action) => {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
};

export default common;
