import Card from '../Card/Card';
import React from 'react';
import style from "./Cards.module.css"

const Cards = ({ characters, onClose }) => { 

      return (
         <div className={style.background}>
         <div className={style.Cards}>
            {characters.map(({ id, image, name, gender, status, species, origin}) => { 
               return (
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     gender={gender}
                     image={image}
                     status={status}
                     species={species}
                     origin={origin}
                     onClose={onClose}
                  />
               );
            })}
         </div>
         </div>
      )
   }


export default Cards;