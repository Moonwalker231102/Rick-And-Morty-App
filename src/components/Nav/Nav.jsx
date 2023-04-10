import SearchBar from "../SearchBar/SearchBar";
import { NavLink} from 'react-router-dom'
const Nav = (props) => {
    const randomSearch = props.randomSearch;
    return (
        <nav>
            <SearchBar onSearch={props.onSearch} />
            <button onClick={() => randomSearch()}>Aleatory Character</button>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink>
        </nav>
    );
};

export default Nav;