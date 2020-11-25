import { connect } from 'react-redux';
import { setSortMethod } from '../../store/actions';
import SelectSortMethod from './index';

// provide the currently selected property to the element
const mapStateToProps = state => ({ property: state.sortMethod.sortMethod });

const mapDispatchToProps = dispatch => ({
  // change the sort property to the selected option
  onChange: property => dispatch(setSortMethod(property)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectSortMethod);
