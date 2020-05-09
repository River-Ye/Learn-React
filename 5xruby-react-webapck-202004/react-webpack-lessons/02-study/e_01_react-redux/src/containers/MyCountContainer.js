import { connect } from 'react-redux';
import MyCount from '@/components/MyCount';

function mapStateToProps(state) {
  // /*
  return {
    count: state.count,
  };
  // */
}
function mapDispatchToProps() {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCount);
