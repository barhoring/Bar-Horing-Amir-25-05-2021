import { useEffect, useState } from "react";
import CityForecast from "./CityForecast";
import WeekForecast from "./WeekForecast";
import { API_CURRENT_CONDITIONS_URL_BASE, API_FORECASTS_5_DAYS_URL_BASE, API_KEY1 } from "../../constants";

const WeatherInfo = ({ currentLocation, handleAddToFavorites, handleRemoveFromFavorites, isFavorite, isCelsius }) => {
  const [ dailyForecasts, setDailyForecasts ] = useState([]);
  const [ conditionsNow, setConditionsNow ] = useState({});

  const handleToggleFavorite = () => {
    isFavorite ? handleRemoveFromFavorites(currentLocation.Key) : handleAddToFavorites(currentLocation)
  }

  useEffect(() => {
    if(currentLocation) {
      const uri = `${API_FORECASTS_5_DAYS_URL_BASE}/${currentLocation.Key}?apikey=${API_KEY1}&metric=true`;
      fetch(uri)
      .then(res => res.json()).then(res => {
        setDailyForecasts(res.DailyForecasts);
      }).catch(e => console.log(e));

      const uri_current_conditions = `${API_CURRENT_CONDITIONS_URL_BASE}/${currentLocation.Key}?apikey=${API_KEY1}&metric=true`;
      fetch(uri_current_conditions)
      .then(res => res.json()).then(res => {
        setConditionsNow(res[0]);
      }).catch(e => { console.log(e)});
    }
  }, [currentLocation])

  return (
    <div className="weather-info-container">
      <div className="weather-info">
        <CityForecast handleToggleFavorite={handleToggleFavorite} isFavorite={isFavorite} handleAddToFavorites={handleAddToFavorites} conditionsNow={conditionsNow} isCelsius={isCelsius} currentLocation={currentLocation} />
        <WeekForecast {...{dailyForecasts, isCelsius} }/>
      </div>
    </div>
  );
}

export default WeatherInfo;
