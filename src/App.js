import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import MainPage from "./components/screens/MainPage";
import FavoritesPage from "./components/screens/FavoritesPage"

import { Router, Link } from "@reach/router";

function App() {
  return (
    <>
    <Header />
    <Router>
      <MainPage path="/" />
      <FavoritesPage path="/favorites" />
    </Router>
  </>
  );
}

export default App;