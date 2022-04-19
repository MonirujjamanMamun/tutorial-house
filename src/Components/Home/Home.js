import React from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';
import Teacher from '../../images/teacher.png';
import useSubject from '../Hooks/useSubject';
import Servise from '../Servise/Servise';
import './Home.css';

const Home = () => {
    const [subjects, setSubject] = useSubject();

    return (
        <div className='my-2'>
            <Row className='container mx-auto'>
                <Col xs={12} md={6} lg={6}>
                    <h6 className='fw-bold wlc-text'>WELCOME TO MY WORLD</h6>
                    <h3 className='fw-bolder fs-1'>Hi, I'm <span className='pink-color'>Monirujjaman</span></h3>
                    <h3 className='fw-bolder fs-1'><span className='pink-color'>a</span> Professional Teacher.<span className='pink-color'>|</span></h3>
                    <p>I am Monirujjaman Mamun. I am a Professional teacher. I have many years teaches experience.</p>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <img className='img-thumbnail' src={Teacher} alt="teacher" />
                </Col>

            </Row>
            <div className='container'>
                <h1 className='text-center mt-2'>Servise</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                    {subjects.map(subject => <Servise key={subject.id} subject={subject}></Servise>)}
                </div>
            </div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                    <div className='col card'>
                        <h3 className='text-center p-2'>Necessary of english education</h3>
                        <p>Knowing English increases your chances of getting a good job in a multinational company within your home country or for finding work abroad. It's also the language of international communication, the media and the internet, so learning English is important for socialising and entertainment as well as work!</p>
                    </div>
                    <div className='col card'>
                        <h3 className='text-center p-2'>Necessary of Math</h3>
                        <p>Mathematics provides an effective way of building mental discipline and encourages logical reasoning and mental rigor. In addition, mathematical knowledge plays a crucial role in understanding the contents of other school subjects such as science, social studies, and even music and art.</p>
                    </div>
                    <div className='col card'>
                        <h3 className='text-center p-2'>Necessary of ICT education</h3>
                        <p>ICT plays a significant role in the field of education, it helps teachers to adapt the tools and provide and disseminate effective knowledge to the students. ICT education effectively promotes and develops the culture of learning by sharing experiences and information with others.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;