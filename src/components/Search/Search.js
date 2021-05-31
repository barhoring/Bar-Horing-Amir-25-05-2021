import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { API_KEY1, API_AUTO_COMPLETE_BASE } from "../../constants";

const URL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
// const API_KEY1 = "L4XQxeAAeKSSx0AfIcOyQLi1mD9htWe5";
const API_KEY2 = "jCLPUDFqHDZV7369qCF3gfHGutmpcVKG";
let awKey1 = `vJvpSEzy3aG3nRuNhrMeVnhBeDSj7JFK`;
let awkey2 = `JmVIFm5N5S9A6D5BnIBp0ah5tVJIg9GA`;
let awKey3 = `cNJ6YSXkDrtUrElsVG1kMQMvLrFK4xAg`;

// change the name
const ComboBox = ({ currentLocation, handleSelectLocation }) => {
  const [ query, setQuery] = useState('');
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  let prevQuery = '';

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      console.log(query);
      const uri = `${API_AUTO_COMPLETE_BASE}?apikey=${API_KEY1}&q=${query}`;
      if(query !== prevQuery && query) {
        // const params = { q: "new", apiKey: "L4XQxeAAeKSSx0AfIcOyQLi1mD9htWe5" }
        // add catch
        fetch(uri)
        .then(res => res.json()).then(res => { console.log(res); setAutoCompleteOptions(res) });
      }
      prevQuery = query;
      // fetch options

    }, 2000);
    // Every key up rerenders
    return () => clearInterval(interval);
  }, [query]);

  return (
    <div className="search">
      <SearchBox {... { query, setQuery, currentLocation, handleSelectLocation, autoCompleteOptions } } />
    </div>
  );
}

export default ComboBox;
