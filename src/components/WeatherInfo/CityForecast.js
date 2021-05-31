// "http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=cNJ6YSXkDrtUrElsVG1kMQMvLrFK4xAg"
import { API_CURRENT_CONDITIONS_URL_BASE } from "../../constants";

const CityForecast = ({ degrees, isCelsius, currentLocation, conditionsNow }) => {
  const units = isCelsius ? "C" : "F";
  return (
    <div className="city-forecast">
      {/* <div>{JSON.stringify(conditionsNow)}</div> */}
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
        <div>
          ❤️
        </div>
      </div>
      <h1 className="today-sky">{conditionsNow.WeatherText}</h1>
    </div>
  );
}

export default CityForecast;
