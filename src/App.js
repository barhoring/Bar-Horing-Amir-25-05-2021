import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
// import DefaultReact from './components/DefaultReact';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <WeatherInfo />
      {/* <DefaultReact /> */}
    </div>
  );
}

export default App;
