import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Servise = ({ subject }) => {
    console.log(subject)
    const { name, price, img, description } = subject;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top w-75 h-75 mx-auto img-thumbnail mt-1" alt="" />
                <div className="card-body">
                    <h3 className="card-title text-center">{name}</h3>
                    <h5 className="card-title text-center">{price}</h5>
                    <p className="card-text">{description}</p>
                </div>
                    <Button className='d-block mx-auto'>See Details</Button> 
            </div>
        </div>

    );
};

export default Servise;