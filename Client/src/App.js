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
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   // const onSearch = async (id) => {
   //    try {
   //       const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         
   //       if (data.name) {
   //          // Buscar el personaje en la lista de personajes
   //          const characterExists = characters.find((character) => character.id === data.id);
         
   //          // Agregar el personaje solo si no existe en la lista
   //          if (!characterExists) {
   //             setCharacters((oldChars) => [...oldChars, data]);
   //          }
   //       }
   //    } catch (error) {
   //          alert(`Character with id ${id} not found`);
   //    }
   // };
   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

         data.name && !characters.find((char) => char.id === data.id) 
         && setCharacters((oldChars) => [...oldChars, data]);
         
      } catch (error) {
         alert(`Character with id ${id} not found`);
      }
   };

   const login = async (userData)=>{
      try {
         const {email, password} = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
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

