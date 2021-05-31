const CityForecast = ({ isCelsius, currentLocation, conditionsNow, handleToggleFavorite, isFavorite }) => {
  const units = isCelsius ? "C" : "F";
  return (
    <div className="city-forecast">
      <div className="weather-now">
        <div className="city-weather">
          <span>
            {currentLocation?.LocalizedName}
          </span>
          {/* TODO Change here */}
          <div>
            {conditionsNow?.Temperature?.Metric?.Value}° {units}
          </div>
        </div>
        <div onClick={() => { handleToggleFavorite(currentLocation)}}>
          { isFavorite ? "❤️" : "♡" }
        </div>
      </div>
      <h1 className="today-sky">{conditionsNow?.WeatherText}</h1>
    </div>
  );
}

export default CityForecast;
