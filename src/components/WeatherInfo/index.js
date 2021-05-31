import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';
import { ADD_TO_FAVORITES } from "../../actionConstants";

const mapStateToProps = state => {
  const { currentLocation } = state;
  return {
    currentLocation,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddToFavorites: (location) => dispatch({ type: ADD_TO_FAVORITES, payload: { location } }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);

