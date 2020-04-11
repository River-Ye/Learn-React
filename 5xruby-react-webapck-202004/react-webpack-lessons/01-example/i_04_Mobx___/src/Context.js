import React from 'react';

import CountStore from '@/store/CountStore';
import TodoStore from '@/store/TodoStore';

export const stores = {
  count: new CountStore(),
  todo: new TodoStore(),
};

const context = React.createContext(stores);

export default context;
