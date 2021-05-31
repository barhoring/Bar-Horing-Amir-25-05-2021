const Favorites = ({ favoritesCities, handleAddToFavorites, handleRemoveFromFavorites }) => {
  return (
    <div>
      your favs
      {JSON.stringify(favoritesCities)}
    </div>
  );
}

export default Favorites;