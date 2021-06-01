import { connect } from 'react-redux';
import Header from './Header';

import { TOGGLE_IS_DARK_MODE, TOGGLE_IS_CELSIUS } from "../../actionConstants";

const mapStateToProps = state => {
  const { isDarkMode, isCelsius } = state;
  return {
    isDarkMode,
    isCelsius
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggleIsDarkMode: () => dispatch({ type: TOGGLE_IS_DARK_MODE }),
    handleToggleIsCelsius: () => dispatch({ type: TOGGLE_IS_CELSIUS }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

