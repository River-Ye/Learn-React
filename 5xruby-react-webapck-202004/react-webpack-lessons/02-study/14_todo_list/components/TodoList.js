class TodoList extends React.Component {
  // TODO: 1 start
  state = {
    list: [
      { id: 'id1', text: '學會React', done: false },
      { id: 'id2', text: '學會Webpack', done: false },
      { id: 'id3', text: '年薪百萬', done: false },
    ],
  };
  // TODO: 1 end
  // TODO: 2 start
  addItem = (text)=> {
    /*
    var item = {
      id: new Date().getTime().toString(),
      text,
      done: false,
    };
    var list = this.state.list.concat(item);
    this.setState({ list });
    */
  }
  toggleItem = (id)=> {
    /*
    var list = this.state.list.map((item)=> {
      if(item.id === id){
        return {
          id: item.id,
          text: item.text,
          done: !item.done,
        };
      }
      return item;
    });
    
    this.setState({ list });
    */
  }
  // TODO: 2 end
  render () {
    // TODO: 3 start
    /*
    return (
      <section data-name="TodoList.js">
        <div className="todo-list">
          <TodoForm addItem={this.addItem} />
          <ul className="todo-items">
            {
              this.state.list.map((item)=> {
                return (
                  <TodoItem
                    key={item.id}
                    id={item.id}
                    done={item.done}
                    toggleItem={this.toggleItem} >
                    {item.text}
                  </TodoItem>
                );
              })
            }
          </ul>
        </div>
      </section>
    );
    */
    // TODO: 3 end
  }
};
