import DayForecast from "../DayForecast";

const defaultForecast = {
  "Sun": "38",
  "Mon": "38",
  "Tue": "38",
  "Wed": "38",
  "Thu": "38",
}

// add key to loop
const WeekForecast = ({ forecast = defaultForecast, dailyForecasts }) => {
  return (
      <div className="week-forecast">
        {
          dailyForecasts && Object.values(dailyForecasts).map(e => {
            const temperature = e.Temperature;
            return (
            <DayForecast degrees={forecast[e]} isCelsius={true} temperature={temperature} />
          )})
        }
      </div>
  );
}

export default WeekForecast;
