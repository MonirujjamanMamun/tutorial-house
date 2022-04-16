import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Teacher from '../../images/teacher.png';
import useSubject from '../CoustomLink/useSubject';
import Servise from '../Servise/Servise';
import './Home.css';

const Home = () => {
    const [subjects, setSubject] = useSubject();

    return (
        <div className='container'>
            <Row >
                <Col xs={12} md={6} lg={6}>
                    <h6 className='fw-bold wlc-text'>WELCOME TO MY WORLD</h6>
                    <h3 className='fw-bolder fs-1'>Hi, I'm <span className='pink-color'>Monirujjaman</span></h3>
                    <h3 className='fw-bolder fs-1'><span className='pink-color'>a</span> Professional Teacher.<span className='pink-color'>|</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima harum enim dolores ipsa, eveniet exercitationem natus est dignissimos nisi eligendi sint, fugiat laboriosam atque magni consectetur sunt ad. Numquam.</p>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <img className='img-fluid' src={Teacher} alt="teacher" />
                </Col>

                <Col>
                    { subjects.map(subject=><Servise key={subject.id} subject={subject}></Servise>)}
                </Col>
            </Row>

        </div>
    );
};

export default Home;