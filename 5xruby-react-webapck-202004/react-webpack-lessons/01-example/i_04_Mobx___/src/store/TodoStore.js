import { observable, action, computed } from 'mobx';

export type TodoType = {
  id: string,
  text: string,
  done: boolean
}

class TodoStore {
  @observable todos = [
    {
      id: 'fakeId0',
      text: '學會 React',
      done: true,
    },
    {
      id: 'fakeId1',
      text: '年新百萬',
      done: false,
    },
  ]

  @computed get todoCount():number[] {
    console.log('todoCount');
    return this.todos.length;
  }


  @computed get remainingTodosCount():number {
    console.log('remainingTodosCount');
    return this.todos.filter(o => o.done).length;
  }

  /**
   * this 一定指向自己，跟 Function.bind 一樣
   * @param {string} text
   */
  @action.bound
  addTodo(text:string) {
    this.todos.push({
      id: Math.random().toString(32).substr(2),
      done: false,
      text,
    });
  }

  /**
   * 或用 es6 arrow function 決解 this 指向問題
   * @param {string} id
   */
  toggleTodo = (id:string) => {
    for (let i = 0; i < this.todos.length; i += 1) {
      const todo:TodoType = this.todos[i];
      if (todo.id === id) {
        todo.done = !todo.done;
        break;
      }
    }
  }
}
export default TodoStore;
