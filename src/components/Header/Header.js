import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = ({ isDarkMode, isCelsius, handleToggleIsDarkMode, handleToggleIsCelsius }) => {
  return (
      <header className="logo-header">
        <div className="title">
          Herolo Weather Task
        </div>
        <Logo />
        <div>
          <Navigation/>
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
