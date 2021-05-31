import { 
  TOGGLE_IS_DARK_MODE, 
  TOGGLE_IS_CELSIUS,
  SELECT_LOCATION_KEY,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
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
        const _location = action.payload.location; // location is a reserved word
        const newState = {...state};
        const newFavoritesCities = {...newState.favoritesCities};
        const cityKey = _location.Key;
        newFavoritesCities[cityKey] = _location;
        return {...newState, favoritesCities: newFavoritesCities}
      }
    case REMOVE_FROM_FAVORITES:
      {
        const { locationKey } = action.payload;
        const newState = {...state};
        const newFavoritesCities = {...state.favoritesCities}
        delete newFavoritesCities[locationKey];
        return { ...newState, favoritesCities: newFavoritesCities };
      }
    default:
      return state;
  }
};
