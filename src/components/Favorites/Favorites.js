import { useState, useEffect } from "react";
import CityForecast from "../WeatherInfo/CityForecast";
import { navigate } from "@reach/router";
import { API_CURRENT_CONDITIONS_URL_BASE, API_KEY1 } from "../../constants";

const attachTempToCityArray = (cities, data, cityKeys) => {
  const newCities = { ...cities };
  cityKeys.forEach((key, index) => {
    newCities[key].conditionsNow = data[index][0];
  });
  return newCities;
};

const Favorites = ({ favoritesCities, isCelsius, handleSelectLocation }) => {
  const [favoritesCitiesTemps, setFavoritesCitiesTemps] =
    useState(favoritesCities);
  useEffect(() => {
    const cityKeys = Object.keys(favoritesCities);
    const cityKeysPromise = cityKeys.map((cityKey) => {
      const uri_current_conditions = `${API_CURRENT_CONDITIONS_URL_BASE}/${cityKey}?apikey=${API_KEY1}&metric=true`;
      return fetch(uri_current_conditions)
        .then((res) => res.json())
        .catch((e) => {
          console.log(e);
        });
    });

    Promise.all(cityKeysPromise).then((values) => {
      setFavoritesCitiesTemps(
        attachTempToCityArray(favoritesCities, values, cityKeys)
      );
    });
  }, []);

  return (
    <div className="favorites">
      <h1>Your favorites cities</h1>
      <div>
        {Object.values(favoritesCitiesTemps).map((city) => {
          return (
            <div
              onClick={() => {
                handleSelectLocation(city);
                navigate(process.env.PUBLIC_URL);
              }}
            >
              <CityForecast
                key={city.Key}
                conditionsNow={city.conditionsNow}
                isCelsius={isCelsius}
                currentLocation={city}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
