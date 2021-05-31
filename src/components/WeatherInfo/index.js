import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../actionConstants";

const mapStateToProps = state => {
  const { currentLocation, isCelsius } = state;
  const cityKey = currentLocation?.Key;
  const isFavorite = cityKey in state.favoritesCities;
  return {
    currentLocation,
    isFavorite,
    isCelsius
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRemoveFromFavorites: (locationKey) => dispatch({ type: REMOVE_FROM_FAVORITES, payload: { locationKey } }),
    handleAddToFavorites: (location) => dispatch({ type: ADD_TO_FAVORITES, payload: { location } })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);

