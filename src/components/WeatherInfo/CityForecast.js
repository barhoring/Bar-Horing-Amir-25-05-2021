import { Celsius2Fahrenheit } from "../../util";

const CityForecast = ({ isCelsius, currentLocation, conditionsNow, handleToggleFavorite, isFavorite }) => {
  const units = isCelsius ? "C" : "F";
  const tempNow = conditionsNow?.Temperature?.Metric?.Value;
  return (
    <div className="city-forecast">
      <div className="weather-now">
        <div className="city-weather">
          <span>
            {currentLocation?.LocalizedName}
          </span>
          <div>
            {isCelsius ? tempNow : Celsius2Fahrenheit(tempNow)}° {units}
          </div>
        </div>
        {/* in favorites page do not display ♡ heart */}
        { isFavorite !== undefined && (
          <div onClick={() => { handleToggleFavorite(currentLocation)}}>
                  { isFavorite ? "❤️" : "♡" }
          </div>
        )}
      </div>
      <h1 className="today-sky">{conditionsNow?.WeatherText}</h1>
    </div>
  );
}

export default CityForecast;
