import SearchBar from "../SearchBar/SearchBar";
import { NavLink} from 'react-router-dom';
import style from "./Nav.module.css";
const Nav = ({onSearch, randomSearch, setAccess}) => {
    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav className={style.Nav}>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => randomSearch()} className={style.Button}>Aleatory Character</button>
            <NavLink to="/about"className={`${style.About} ${style.Button}`}>About</NavLink>
            <NavLink to="/home" className={`${style.Home} ${style.Button}`}>Home</NavLink>
            <NavLink to="/favorites" className={`${style.Favorites} ${style.Button}`}>Favorites</NavLink>
            <button onClick={handleLogOut} className={style.Button} >Log Out</button>
        </nav>
    );
};

export default Nav;