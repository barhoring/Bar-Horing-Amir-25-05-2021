import "./App.css";
import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import MainPage from "./components/screens/MainPage";
import FavoritesPage from "./components/screens/FavoritesPage";
import { API_GEOPOSITION_BASE, API_KEY1 } from "./constants";
import { Router } from "@reach/router";
import { SELECT_LOCATION_KEY } from "./actionConstants";

/* This is the App component
 It hosts the Router which sets the current 
screen(MainPage/FavoritesPage) based on the URL
It also handles the current location weather (geoposition)
 */

const mapStateToProps = (state) => {
  const { isDarkMode } = state;
  return {
    isDarkMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectLocation: (currentLocation) =>
      dispatch({ type: SELECT_LOCATION_KEY, payload: { currentLocation } }),
  };
};

function App({ isDarkMode, handleSelectLocation }) {
  const success = useCallback(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const uri_geoposition_conditions = `${API_GEOPOSITION_BASE}?apikey=${API_KEY1}&q=${latitude},${longitude}`;
      fetch(uri_geoposition_conditions)
        .then((res) => res.json())
        .then((res) => {
          handleSelectLocation(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [handleSelectLocation]
  );

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, (error) =>
        console.log(error)
      );
    }
  }, [success]);

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Header />
      <Router>
        <MainPage path={process.env.PUBLIC_URL} />
        <FavoritesPage path={`${process.env.PUBLIC_URL}/favorites`} />
      </Router>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
