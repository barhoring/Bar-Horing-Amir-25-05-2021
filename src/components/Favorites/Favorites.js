import { useState, useEffect } from "react";
import CityForecast from "../WeatherInfo/CityForecast";
import { API_CURRENT_CONDITIONS_URL_BASE, API_KEY1 } from "../../constants";

const attachTempToCityArray = (cities, data, cityKeys) => {
  const newCities = { ...cities };
  cityKeys.forEach((key, index) => {
    debugger;
    newCities[key].conditionsNow = data[index][0];
    // cities[key].tempNow = data[index][0].Temperature.Metric.Value;
  })
  return newCities;
}

const Favorites = ({ favoritesCities, handleToggleFavorite, handleAddToFavorites, handleRemoveFromFavorites }) => {
  const [favoritesCitiesTemps, setFavoritesCitiesTemps] = useState(favoritesCities);
  useEffect(() => {
    const cityKeys = Object.keys(favoritesCities);
    const cityKeysPromise = cityKeys.map(cityKey => {
    const uri_current_conditions = `${API_CURRENT_CONDITIONS_URL_BASE}/${cityKey}?apikey=${API_KEY1}&metric=true`;
    // add catch
    return fetch(uri_current_conditions)
    .then(res => res.json()).catch(e => { debugger; console.log(e)});
  })

  Promise.all(cityKeysPromise).then((values) => {
    console.log(values);
    setFavoritesCitiesTemps(attachTempToCityArray(favoritesCities, values, cityKeys));
  });
}, [])

  return (
    <div>
      your favs
      {JSON.stringify(favoritesCitiesTemps)}
      {Object.values(favoritesCitiesTemps).map(city => {
        return (<CityForecast 
          handleToggleFavorite={handleToggleFavorite}
          conditionsNow={city.conditionsNow}
          isCelsius={true}
          currentLocation={city}
         />)
      })}
    </div>
  );
}

export default Favorites;