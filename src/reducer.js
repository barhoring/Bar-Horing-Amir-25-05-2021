import { 
  TOGGLE_IS_DARK_MODE, 
  TOGGLE_IS_CELSIUS,
  SELECT_LOCATION_KEY,
  ADD_TO_FAVORITES,
  REMOVE_TO_FAVORITES
} from "./actionConstants";

const defaultState = {
  isDarkMode: false,
  isCelsius: true,
  currentLocation: null,
  currentCityName: '',
  favoritesCities: {},
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
    case ADD_TO_FAVORITES:
      {
        const location = action.payload.location;
        const newState = {...state};
        const newFavoritesCities = {...newState.favoritesCities};
        const cityKey = location.Key;
        debugger;
        newFavoritesCities[cityKey] = location;
        return {...newState, favoritesCities: newFavoritesCities}
      }
    case REMOVE_TO_FAVORITES:
      {
        const locationKey = action.payload;
        const newState = {...state};
        delete newState[locationKey];
        return newState;
      }
    default:
      return state;
  }
};
