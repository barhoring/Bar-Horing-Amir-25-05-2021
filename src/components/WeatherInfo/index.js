import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../actionConstants";

const mapStateToProps = state => {
  const { currentLocation } = state;
  const cityKey = currentLocation?.Key;
  const isFavorite = cityKey in state.favoritesCities;
  return {
    currentLocation,
    isFavorite
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     handleAddToFavorites: (location) => dispatch({ type: ADD_TO_FAVORITES, payload: { location } }),
//   }
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  const handleRemoveFromFavorites = (locationKey) => dispatch({ type: REMOVE_FROM_FAVORITES, payload: { locationKey } });
  const handleAddToFavorites = (location) => dispatch({ type: ADD_TO_FAVORITES, payload: { location } });
  // const { location, isFavorite } = ownProps;
  // return {
  //   handleToggleFavorite: () => {
  //     debugger;
  //     if(isFavorite)
  //       handleRemoveFromFavorites(location.Key)
  //     else
  //       handleAddToFavorites(Location)
  //   },
  // }
  return {
    handleRemoveFromFavorites,
    handleAddToFavorites
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);

