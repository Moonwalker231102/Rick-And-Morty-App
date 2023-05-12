import style from './App.module.css';
import Cards from "./components/Cards/Cards.jsx";
import Nav from './components/Nav/Nav.jsx';
import About from "./components/About/About";
import Detail from './components/Detail/Detail';
import Error from "./components/Error/Error";
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites"
import { useState, useEffect } from 'react';
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   // const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
   // const API_KEY = "64938ddbb093.4a7eb42afa301a18d706";
   // const Email = "ejimenezcadena@gmail.com";
   // const password = "Rosana2311";
   const onSearch = (id) => { 
      if (characters.find((char) => char.id === id)) { 
         alert("Character already exists")
         return;
      }
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(response => response.data)
         .then((data) => {
            setCharacters((oldChars) => [...oldChars, data]);
         })
         .catch((err) => { 
            if (err.response && err.response.status === 404) {
               alert(`Character with id ${id} not found`);
            }
            
         })
   };

   const login = (userData)=>{
      const {email, password} = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      if (!access) {
         navigate("/");
      }
   }, [access, navigate]);

   const randomSearch = () => { 
      const randomIndex = Math.floor(Math.random() * 826);
         axios(`http://localhost:3001/rickandmorty/character/${randomIndex}`)
         .then(response => response.data)
         .then((data) => { 
            setCharacters((oldChars)=>[...oldChars, data])
         })
   }



   const onClose = (id) => { 
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered);
   }
   
   
   return (
   
      <div className={style.App}>
      {location.pathname === "/" ? <Form login={login} className={style.Login}/> : <Nav onSearch={onSearch} randomSearch={ randomSearch} setAccess={setAccess}/>}
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
            {location.pathname !=="/" && <Route path="*" element={<Error />}  />}
         </Routes>
      
   </div>
);
}


export default App;

