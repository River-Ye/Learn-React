
import {
  MUGGLE, AM, TECH, ADMIN, MYSTERY,
} from '@/utils/permission';

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
        permission: ADMIN,
      };
    }
    default:
      return state;
  }
}
