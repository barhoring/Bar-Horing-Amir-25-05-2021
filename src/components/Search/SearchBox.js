import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import top100Films from './top100Films';
import top100Films from './new_query_results';

const SearchBox = ({ query, setQuery, handleSelectLocation, currentLocation, autoCompleteOptions }) => {
  return (
    <div className="search">
      <Autocomplete
        onKeyUp={(event) => {
          setQuery(event.target.value);
        }}
        id="combo-box-demo"
        // options={top100Films}
        options={autoCompleteOptions}
        getOptionLabel={(option) => `${option.LocalizedName}, ${option.Country.LocalizedName}`}
        style={{ width: 300 }}
        onChange={(event, newValue) => {
          handleSelectLocation(newValue);
        }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      />
    </div>
  );
}

export default SearchBox;
