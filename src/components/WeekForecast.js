import DayForecast from "./DayForecast";

const defaultForecast = {
  "Sun": "38",
  "Mon": "38",
  "Tue": "38",
  "Wed": "38",
  "Thu": "38",
}

const WeekForecast = ({ forecast = defaultForecast }) => {
  return (
      <div className="week-forecast">
      {
        Object.keys(forecast).map(e => <DayForecast />)
      }
      </div>
  );
}

export default WeekForecast;
