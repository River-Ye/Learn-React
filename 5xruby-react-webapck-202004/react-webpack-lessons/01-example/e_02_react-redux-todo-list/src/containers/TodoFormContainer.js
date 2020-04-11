import { connect } from 'react-redux';
import { actionAddTodo } from '../actions';
import TodoForm from '../components/TodoForm';

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    addItem(text:string) {
      dispatch(actionAddTodo(text));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
