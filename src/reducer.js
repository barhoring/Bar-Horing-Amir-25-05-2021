import { TOGGLE_IS_DARK_MODE, TOGGLE_IS_CELSIUS, SELECT_LOCATION_KEY } from "./actionConstants";

const defaultState = {
  isDarkMode: false,
  isCelsius: true,
  currentLocation: null,
  currentCityName: '',
  favoritesCities: [],
  clientLocation: null
}

export const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_IS_DARK_MODE:
      const { isDarkMode } = state;
      return {...state, isDarkMode: !isDarkMode }; 
    case TOGGLE_IS_CELSIUS:
      const { isCelsius } = state;
      return {...state, isCelsius: !isCelsius }; 
    case SELECT_LOCATION_KEY:
      const { currentLocation } = action.payload;
      return {...state, currentLocation };
    default:
      return state;
  }
};
