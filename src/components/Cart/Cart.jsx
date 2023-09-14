/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './cart.css'

const cart = ({selectedActors, remaining, totalCoast}) => {
    return (
        <div>
            <h5>Total Actors: {selectedActors.length} </h5>
            <h5>Remaining:{remaining} </h5>
            <h5>Total Coast:{totalCoast} </h5>
            {
                selectedActors.map((actor)=> (
                   
                    <li key={actor.id} >{actor.name}</li> 
                   
                ))
            }
        </div>
    );
};

export default cart;