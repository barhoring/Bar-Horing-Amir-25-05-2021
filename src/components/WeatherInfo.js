import CityForecast from "./CityForecast";
import WeekForecast from "./WeekForecast";

const WeatherInfo = () => {
  return (
    <div className="weather-info-container">
      <div className="weather-info">
        <CityForecast />
        <h1 className="today-sky">Scattered Clouds</h1>
        <div>5 days forecast</div>
        <WeekForecast />
      </div>
    </div>
  );
}

export default WeatherInfo;
