import { connect } from 'react-redux';
import { actionClearTodo } from '../actions';
import TodoClear from '../components/TodoClear';

function mapStateToProps(state) {
  return {
    count: state.todos.length,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClear() {
      dispatch(actionClearTodo());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoClear);
