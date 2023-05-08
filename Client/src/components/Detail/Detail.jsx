import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => { 
    
    const { id } = useParams();
    const [character, setCharacter]  = useState({});

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
        const API_KEY = "64938ddbb093.4a7eb42afa301a18d706";
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(({ data }) => {
        if (data.name) {
            setCharacter(data);
            } 
            })
        .catch((err) => { 
        if (err.response && err.response.status === 404) {
            alert(`Character with id ${id} not found`);
            }
        })
        return setCharacter({});
    }, [id]);
    
    return (
        <div>
        <div>
        <img src={character?.image} alt="" />
        </div>
        <h2>{character?.name}</h2>
        <h3>Status: {character?.status}</h3>
        <h3>Specie: {character?.species}</h3>
        <h3>Gender:{character?.gender}</h3>
        <h3>Origin:{character?.origin?.name}</h3>
        </div>
    );
}

export default Detail;