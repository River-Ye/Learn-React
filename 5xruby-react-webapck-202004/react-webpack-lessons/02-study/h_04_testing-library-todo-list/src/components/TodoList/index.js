import React from 'react';

import TodoForm from '@/components/TodoForm';
import TodoItem from '@/components/TodoItem';


export default class TodoList extends React.Component {
  state = {
    list: [
      { id: 'id1', text: '學會React', done: false },
      { id: 'id2', text: '學會Webpack', done: false },
      { id: 'id3', text: '年薪百萬', done: false },
    ],
  };

  addItem = (text) => {
    const { list } = this.state;
    const item = {
      id: new Date().getTime().toString(),
      text,
      done: false,
    };
    this.setState({
      list: list.concat(item),
    });
  }

  toggleItem = (id) => {
    const { list } = this.state;
    const newList = list.map((item) => {
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

  render() {
    return (
      <section className="todo-list" data-name="TodoList">
        <TodoForm addItem={this.addItem} />
        <h3>TodoList.js</h3>
        <ul className="todo-items">
          {
            this.state.list.map(item => (
              <TodoItem
                key={item.id}
                id={item.id}
                done={item.done}
                toggleItem={this.toggleItem}
              >
                {item.text}
              </TodoItem>
            ))
          }
        </ul>
      </section>
    );
  }
}
