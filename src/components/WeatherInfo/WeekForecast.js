import DayForecast from "../DayForecast";

const WeekForecast = ({ dailyForecasts, isCelsius }) => {
  return (
      <div className="week-forecast">
        {
          dailyForecasts && Object.values(dailyForecasts).map(e => {
            const temperature = e.Temperature;
            const day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(new Date(e.Date));
            const key= e.EpochDate; // a unique key
            console.log("e:", e)
            return (
            <DayForecast key={key} isCelsius={isCelsius} day={day} temperature={temperature} />
          )})
        }
      </div>
  );
}

export default WeekForecast;
