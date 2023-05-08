import {Link} from "react-router-dom"
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./Card.module.css";

export default function Card({ id, name, species, gender, status, origin, image, onClose }) {
   const myFavorites = useSelector(state=> state.myFavorites);
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   
   const handleFavorite = () => { 
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else { 
         setIsFav(true);
         dispatch(addFav({ id, name, species, gender, image, onClose }));
      }
   }
   
   useEffect(() => {
   if (myFavorites) {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }
}, [id, myFavorites]);
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.killButton }>X</button>
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Gender: {gender}</h2>
         <h2>Specie: {species}</h2>
         <img src={image} alt='' className={style.img} />
         {isFav ? (
         <button onClick={handleFavorite} className={style.favButton}>
         💙
         </button>
      ) : (
         <button onClick={handleFavorite} className={style.favButton}>
            ♡
         </button>
      )}
      </div>
   );
}
