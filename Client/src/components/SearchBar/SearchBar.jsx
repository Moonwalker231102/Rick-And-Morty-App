import { useState } from "react";
import style from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleKeyDown = (event) => {
      if (event.key === "Enter") {
         onSearch(id);
      }
   }

      return (
         <div>
            <input
               className={style.Input}
               type='search'
               onChange={handleChange}
               onKeyDown={handleKeyDown}
            />
            <button className={style.Button} onClick={() => onSearch(id)} onKeyDown={() => onSearch(id)}>Add</button>
         </div>
      );
   }

export default SearchBar;
