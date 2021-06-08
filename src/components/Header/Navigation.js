import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <div>
      <Link to={process.env.PUBLIC_URL}>Home</Link> |
      <Link to={`${process.env.PUBLIC_URL}/favorites`}>Favorites</Link>
    </div>
  );
};

export default Navigation;
