import { useState, useEffect } from "react";
import CityForecast from "../WeatherInfo/CityForecast";
import { API_CURRENT_CONDITIONS_URL_BASE, API_KEY1 } from "../../constants";

const attachTempToCityArray = (cities, data, cityKeys) => {
  const newCities = { ...cities };
  cityKeys.forEach((key, index) => {
    newCities[key].conditionsNow = data[index][0];
  })
  return newCities;
}

const Favorites = ({ favoritesCities, handleToggleFavorite, isCelsius }) => {
  const [favoritesCitiesTemps, setFavoritesCitiesTemps] = useState(favoritesCities);
  useEffect(() => {
    const cityKeys = Object.keys(favoritesCities);
    const cityKeysPromise = cityKeys.map(cityKey => {
    const uri_current_conditions = `${API_CURRENT_CONDITIONS_URL_BASE}/${cityKey}?apikey=${API_KEY1}&metric=true`;
    return fetch(uri_current_conditions)
    .then(res => res.json()).catch(e => { console.log(e)});
  })

  Promise.all(cityKeysPromise).then((values) => {
    setFavoritesCitiesTemps(attachTempToCityArray(favoritesCities, values, cityKeys));
  });
}, [])

  return (
    <div className="favorites">
      <div>
        Your favorites cities
      </div>
      <div>
        {Object.values(favoritesCitiesTemps).map(city => {
          return (
            <CityForecast 
              key={city.Key}
              handleToggleFavorite={handleToggleFavorite}
              conditionsNow={city.conditionsNow}
              isCelsius={isCelsius}
              currentLocation={city}
          />)
        })}
      </div>
    </div>
  );
}

export default Favorites;