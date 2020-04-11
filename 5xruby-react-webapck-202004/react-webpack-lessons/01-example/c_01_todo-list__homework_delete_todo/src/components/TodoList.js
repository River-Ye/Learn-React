import React from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


export default class TodoList extends React.Component {
  state = {
    list: [
      { id: 'id1', text: '學會React', done: false },
      { id: 'id2', text: '學會Webpack', done: false },
      { id: 'id3', text: '年薪百萬', done: false },
    ],
  };

  addItem = (text) => {
    const item = {
      id: new Date().getTime().toString(),
      text,
      done: false,
    };
    const list = this.state.list.concat(item);
    this.setState({
      list,
    });
  }

  toggleItem = (id) => {
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          text: item.text,
          done: !item.done,
        };
      }
      return item;
    });

    this.setState({
      list: newList,
    });
  }

  onDelete = (id) => {
    const newList = this.state.list.concat();
    for (let i = 0; i < newList.length; i += 1) {
      const item = newList[i];
      if (item.id === id) {
        newList.splice(i, 1);
        break;
      }
    }
    this.setState({
      list: newList,
    });
  }

  render() {
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem} />
        <section>
          <h3>TodoList.js</h3>
          <ul className="todo-items">
            {
            this.state.list.map(item => (
              <TodoItem
                key={item.id}
                id={item.id}
                done={item.done}
                onDelete={this.onDelete}
                toggleItem={this.toggleItem}
              >
                {item.text}
              </TodoItem>
            ))
          }
          </ul>
        </section>
      </div>
    );
  }
}
