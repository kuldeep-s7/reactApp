import React  from 'react';

const Card = ({name,email,image}) => {
    return (
        <div className = 'tc bg-light-blue dib br5 pad3 ma2 grow shadow-2 bw2'>
            <img alt = 'robots' src= {image}/>
            <div>
                <h2> {name} </h2>
                <p> {email}</p>
            </div>
        </div>
        );
}

export default Card;