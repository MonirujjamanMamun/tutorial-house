import React from 'react';

const Servise = ({subject}) => {
    
    const {name, price, img, description} = subject;
    return (
        <div>
            <h1>Name :{name}</h1>
            <h4>Price : {price}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Servise;