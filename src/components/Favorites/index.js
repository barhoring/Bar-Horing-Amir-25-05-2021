import { connect } from 'react-redux';
import Favorites from './Favorites';
import { SELECT_LOCATION_KEY } from "../../actionConstants";

const mapStateToProps = state => {
  const { favoritesCities, isCelsius } = state;
  return {
    favoritesCities,
    isCelsius
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelectLocation: (currentLocation) => dispatch({ type: SELECT_LOCATION_KEY, payload: { currentLocation }}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

