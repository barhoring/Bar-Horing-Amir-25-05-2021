import { connect } from 'react-redux';
import Favorites from './Favorites';

const mapStateToProps = state => {
  const { favoritesCities } = state;
  return {
    favoritesCities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddToFavorites: (location) => dispatch({ type: 'TOGGLE_IS_DARK_MODE', payload: { location } }),
    handleRemoveFromFavorites: (locationKey) => dispatch({ type: 'TOGGLE_IS_DARK_MODE', payload: { locationKey } }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

