import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { API_KEY1, API_AUTO_COMPLETE_BASE } from "../../constants";

const Search = ({ currentLocation, handleSelectLocation }) => {
  const [ query, setQuery] = useState('');
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  let prevQuery = '';

  useEffect(() => {
    const interval = setInterval(() => {
      const uri = `${API_AUTO_COMPLETE_BASE}?apikey=${API_KEY1}&q=${query}`;
      if(query !== prevQuery && query) {
        fetch(uri)
        .then(res => res.json()).then(res => { setAutoCompleteOptions(res) });
      }
      prevQuery = query;

    }, 1000);
    // Every key up rerenders
    return () => clearInterval(interval);
  }, [query]);

  return (
    <div className="search">
      <SearchBox {... { setQuery, handleSelectLocation, autoCompleteOptions } } />
    </div>
  );
}

export default Search;
