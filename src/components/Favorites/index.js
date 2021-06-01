import { connect } from 'react-redux';
import Favorites from './Favorites';

const mapStateToProps = state => {
  const { favoritesCities, isCelsius } = state;
  return {
    favoritesCities,
    isCelsius
  };
};

export default connect(mapStateToProps, {})(Favorites);

