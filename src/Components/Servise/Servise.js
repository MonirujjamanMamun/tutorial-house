import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Servise = ({ subject }) => {
    console.log(subject)
    const { name, price, img, description } = subject;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5 className="card-title">{price}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>

    );
};

export default Servise;