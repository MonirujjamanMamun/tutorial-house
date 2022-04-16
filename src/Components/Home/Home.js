import React from 'react';
import Teacher from '../../images/teacher.png';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-6'>
                    <h7 className='fw-bold wlc-text'>WELCOME TO MY WORLD</h7>
                    <h3 className='fw-bolder fs-1'>Hi, I'm <span className='pink-color'>Monirujjaman</span></h3>
                    <h3 className='fw-bolder fs-1'><span className='pink-color'>a</span> Profetional teacher.<span className='pink-color'>|</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima harum enim dolores ipsa, eveniet exercitationem natus est dignissimos nisi eligendi sint, fugiat laboriosam atque magni consectetur sunt ad. Numquam.</p>
                </div>
                <div className='col-6'>
                    <img className='img-fluid' src={Teacher} alt="teacher" />
                </div>
            </div>
        </div>
    );
};

export default Home;