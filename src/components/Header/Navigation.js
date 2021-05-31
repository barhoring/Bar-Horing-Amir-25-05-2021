import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link> |
      <Link to="/favorites">Favorites</Link>
    </div>
  );
}

export default Navigation;
