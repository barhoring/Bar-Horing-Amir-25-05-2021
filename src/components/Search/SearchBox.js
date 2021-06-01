import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBox = ({ setQuery, handleSelectLocation, autoCompleteOptions }) => {
  return (
    <div className="search">
      <Autocomplete
        onKeyUp={(event) => {
          setQuery(event.target.value);
        }}
        id="combo-box-demo"
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
