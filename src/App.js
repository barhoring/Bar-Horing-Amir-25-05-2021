import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <WeatherInfo />
    </div>
  );
}

export default App;
