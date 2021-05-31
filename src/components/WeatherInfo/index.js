import { connect } from 'react-redux';
import WeatherInfo from './WeatherInfo';
import { API_CURRENT_CONDITIONS_URL_BASE, API_FORECASTS_5_DAYS_URL_BASE, API_KEY1 } from "../../constants";

const mapStateToProps = state => {
  const { currentLocation } = state;
  return {
    currentLocation,
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

export default connect(mapStateToProps, {})(WeatherInfo);

