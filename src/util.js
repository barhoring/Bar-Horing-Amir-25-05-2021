export const Celsius2Fahrenheit = (celsiusValue) => {
  const f = celsiusValue * 1.8 + 32;
  return f.toFixed(2);
}