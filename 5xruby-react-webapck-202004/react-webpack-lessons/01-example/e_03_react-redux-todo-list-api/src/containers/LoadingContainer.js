import { connect } from 'react-redux';
import Loading from '../components/Loading';

function mapStateToProps(state) {
  return {
    show: state.common.loading,
  };
}
function mapDispatchToProps() {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
