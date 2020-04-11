import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classnames from 'classnames';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  // TODO: 2
  state = {
    list: [],
    isLoading: false,
  };

  // TODO: 3 start
  componentDidMount() {
    /*
    console.log('fetch list JSON Data');
    this.setState({ isLoading: true });
    axios.get(this.props.url).then((response) => {
      this.setState({
        list: response.data,
        isLoading: false,
      });
    });
    */
  }
  // TODO: 3 end

  // TODO: 4 start
  addItem = (text) => {
    /*
    this.setState({ isLoading: true });
    axios({
      method: 'POST',
      url: this.props.url,
      data: {
        text,
      },
    })
      .then((response) => {
        const { data } = response;
        this.setState(state => ({
          list: state.list.concat(data),
          isLoading: false,
        }));
      });
    */
  }
  // TODO: 4 end

  // TODO: 5 start
  toggleItem = (id) => {
    // api 成功會回傳 [{id,text,done}]
    /*
    this.setState({ isLoading: true });
    axios({
      method: 'PUT',
      url: this.props.url,
      data: { id },
    })
      .then((response) => {
        const { data } = response;
        this.setState({
          list: data,
          isLoading: false,
        });
      });
    */
  }
  // TODO: 5 end

  render() {
    const { isLoading, list } = this.state;
    const clazz = classnames('todo-list', {
      'is-loading': isLoading,
    });
    return (
      <div className={clazz}>
        <TodoForm addItem={this.addItem} />
        <ul className="todo-items">
          {
            list.map(item => (
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
      </div>
    );
  }
}

TodoList.propTypes = {
  url: PropTypes.string.isRequired,
};
