
const DayForecast = ({ degrees, isCelsius, temperature, day }) => {
  const units = isCelsius ? "C" : "F";
  return (
    <div className="day-forecast">
      <h4>
        {day}
      </h4>
      <div className="temp">
        Minimum: {temperature?.Minimum.Value}° {units}
      </div>
      <div className="temp">
        Maximum: {temperature?.Maximum.Value}° {units}
        {/* {degrees}° {units} */}
      </div>
    </div>
  );
}

export default DayForecast;
