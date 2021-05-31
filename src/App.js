import './App.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import MainPage from "./components/screens/MainPage";
import FavoritesPage from "./components/screens/FavoritesPage"

import { Router } from "@reach/router";

const mapStateToProps = state => {
  const { isDarkMode } = state;
  return {
    isDarkMode,
  };
};

function App({ isDarkMode }) {
  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Header />
      <Router>
        <MainPage path="/" />
        <FavoritesPage path="/favorites" />
      </Router>
    </div>
  );
}

export default connect(mapStateToProps, {})(App);

// export default App;