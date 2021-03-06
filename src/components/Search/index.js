import { connect } from 'react-redux';
import Search from './Search';
import { SELECT_LOCATION_KEY } from "../../actionConstants";

const mapStateToProps = state => {
  const { currentLocation } = state;
  return {
    currentLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelectLocation: (currentLocation) => dispatch({ type: SELECT_LOCATION_KEY, payload: { currentLocation }}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

