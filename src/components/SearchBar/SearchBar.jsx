import { useState } from "react";

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
               type='search'
               onChange={handleChange}
               onKeyDown={handleKeyDown}
            />
            <button onClick={() => onSearch(id)} onKeyDown={() => onSearch(id)}>Add</button>
         </div>
      );
   }

export default SearchBar;
