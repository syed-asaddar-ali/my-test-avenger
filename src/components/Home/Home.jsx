/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */

import React, { useEffect } from 'react';
import './Home.css';

import Cart from '../Cart/Cart'
import { useState } from 'react';

const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors]= useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCoast, setTotalCoast] =  useState(0);

    const budget = 20000;

    useEffect(()=>{
        fetch('./data.json')
        .then((res)=> res.json())
        .then(data=> setAllActors(data))
    },[]);
    
    const handleSelectActor =(actor)=> {
       const isExist = selectedActors.find((item)=> item.id==actor.id);
       
       let cost = actor.salary;

       if(isExist){
        return alert('already booked')
       }else{

        selectedActors.forEach((item)=> {
            cost += item.salary;
        });

        const totalRemaining = 20000-cost;
        
        if(cost > 20000){
            return alert('taka empty');
        }
        setTotalCoast(cost);
        
        setRemaining(totalRemaining);

        setSelectedActors([...selectedActors,actor]);

       }
       
        
    };
    

    return (
        <div className='container'>
            <div className="Home-container">
                <div className="card-container">
                {
                    allActors.map((actor)=> (
                    <div key= {actor.id} className="card">
                    <div className="card-img">
                        <img className='photo' src= {actor.image} alt="" />
                    </div>
                    <h2>{actor.name}</h2>
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, laudantium?</small></p>
                    <div className="info">
                        <p>salary: ${actor.salary} </p>
                        <p> {actor.role} </p>
                    </div>
                    <button onClick={()=> handleSelectActor(actor)}  className='card-btn' >select</button>
                </div>))
                }
                </div>
                <div className="cart">
                   <Cart selectedActors={selectedActors} remaining={remaining} totalCoast={totalCoast} ></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Home;