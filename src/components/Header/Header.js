import Navigation from "./Navigation";

const Header = ({ isDarkMode, isCelsius, handleToggleIsDarkMode, handleToggleIsCelsius }) => {
  return (
      <header className="logo-header">
        <div className="title">
          Herolo Weather Task
        </div>
        <div>
          <Navigation/>
          {/* <div>
            Home | Favorites
          </div> */}
          <div onClick={ handleToggleIsDarkMode }>
            { isDarkMode ? "Dark" : "Light" }
          </div>
          <div onClick={ handleToggleIsCelsius }>
            { isCelsius ? "C" : "F" }
          </div>
        </div>
      </header>
  );
}

export default Header;
