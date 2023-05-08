import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import { removeFav } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFav(id));
  };
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
}

const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
}
  return (
    <div>
      <div className={style.FilterContainer}>
      <select onChange={handleOrder} className={style.Filter}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} className={style.Filter}>
          <option value="allCharacters">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
      </select>
      </div>
      <div className={style.CardsFav}>
      {myFavorites.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          isFav={true}
          onClose={handleRemoveFromFavorites}
          hideKillButton={true}
        />
      ))}
    </div>
    </div>
  );
};

export default Favorites;
