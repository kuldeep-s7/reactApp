import React from 'react';
import Card from './Card';

const CardList = ({ anime }) => {
    
    return (
        <div>{console.log("anime",anime)}
       { anime.map((user,i) => {
        return  <Card  key = {i} name= {anime[i].title} image = {anime[i].image_url} />
    } )};
   </div>
    );
}
export default CardList ;  