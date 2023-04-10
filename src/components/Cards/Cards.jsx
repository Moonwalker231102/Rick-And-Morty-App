import Card from '../Card/Card';
import React from 'react';

class Cards extends React.Component { 
   constructor(props) { 
      super(props);
   }

   render() { 
      const { characters, onClose } = this.props;
      return (
         <div>
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
      )
   }
}

export default Cards;