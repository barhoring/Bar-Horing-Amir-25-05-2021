const Celsius2Fahrenheit = (celsiusValue) => {
  const f = celsiusValue * 1.8 + 32;
  return f.toFixed(2);
}

const DayForecast = ({ isCelsius, temperature, day }) => {
  const units = isCelsius ? "C" : "F";
  const min = temperature?.Minimum.Value;
  const max = temperature?.Maximum.Value;
  return (
    <div className="day-forecast">
      <h4>
        {day}
      </h4>
      <div className="temp">
        Minimum: {isCelsius ? min : Celsius2Fahrenheit(min)}° {units}
      </div>
      <div className="temp">
        Maximum: {isCelsius ? max : Celsius2Fahrenheit(max)}° {units}
      </div>
    </div>
  );
}

export default DayForecast;
