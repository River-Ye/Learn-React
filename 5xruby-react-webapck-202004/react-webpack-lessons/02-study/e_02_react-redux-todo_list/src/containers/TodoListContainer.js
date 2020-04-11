import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { actionToggleTodo } from '../actions';

function mapStateToProps(state) {
  // TODO
  /*
  return {
    todos: state.todos,
  };
  // */
}
function mapDispatchToProps(dispatch) {
  // TODO
  /*
  return {
    toggleItem(id:string) {
      dispatch(actionToggleTodo(id));
    },
  };
  // */
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
