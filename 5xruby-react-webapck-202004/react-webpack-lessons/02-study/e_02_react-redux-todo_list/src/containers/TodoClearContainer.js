import { connect } from 'react-redux';
import { actionClearTodo } from '../actions';
import TodoClear from '../components/TodoClear';

function mapStateToProps(state) {
  // TODO 
  /*
  return {
    count: state.todos.length,
  };
  // */
}
function mapDispatchToProps(dispatch) {
  // TODO 
  /*
  return {
    onClear() {
      dispatch(actionClearTodo());
    },
  };
  // */
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoClear);
