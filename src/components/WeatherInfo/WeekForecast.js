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
            const day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(new Date(e.Date));
            debugger;
            console.log(day)
            return (
            <DayForecast degrees={forecast[e]} isCelsius={true} day={day} temperature={temperature} />
          )})
        }
      </div>
  );
}

export default WeekForecast;
