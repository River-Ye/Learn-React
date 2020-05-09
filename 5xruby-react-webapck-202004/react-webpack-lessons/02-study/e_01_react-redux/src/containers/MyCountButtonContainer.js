import { connect } from 'react-redux';
import MyCountButton from '@/components/MyCountButton';
import { actionIncrease, actionDecrease } from '@/actions';


function mapStateToProps(state) {
  // /*
  return {
    count: state.count,
  };
  // */
}
function mapDispatchToProps(dispatch) {
  // /*
  return {
    onIncrease() {
      dispatch({ type: 'INCREASE' });
    },
    onDecrease() {
      dispatch(actionDecrease());
    },
  };
  // */
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCountButton);
