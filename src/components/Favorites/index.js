import { connect } from 'react-redux';
import Favorites from './Favorites';

const mapStateToProps = state => {
  const { favoritesCities, isCelsius } = state;
  return {
    favoritesCities,
    isCelsius
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const handleRemoveFromFavorites = (locationKey) => dispatch({ type: 'TOGGLE_IS_DARK_MODE', payload: { locationKey } });
  const handleAddToFavorites = (location) => dispatch({ type: 'TOGGLE_IS_DARK_MODE', payload: { location } });
  return {
    handleToggleFavorite: () => {
      const { location, isFavorite } = ownProps; 
      if(isFavorite)
        handleRemoveFromFavorites(location.Key)
      else
        handleAddToFavorites(Location)
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

