import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => {
  const { isDarkMode, isCelsius } = state;
  return {
    isDarkMode,
    isCelsius
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggleIsDarkMode: () => dispatch({ type: 'TOGGLE_IS_DARK_MODE' }),
    handleToggleIsCelsius: () => dispatch({ type: 'TOGGLE_IS_CELSIUS' }),
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

