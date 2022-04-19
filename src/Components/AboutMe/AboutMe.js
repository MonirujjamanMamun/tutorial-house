import React from 'react';
import AboutPic from '../../images/about-pic.jpeg';

const AboutMe = () => {
    return (
        <div className='container row my-5 align-items-center mx-auto'>
            <div className='col '>
            <h2 className='pink-color'>Hello..!</h2>
            <h5>I'm <span className='pink-color'>Monirujjaman Monir</span>.</h5>
            <p>My future goal is became a full stack web Developer.I worked last 3 months. Now, I am working hard and will working hard to achieve my goal. I am a slow learner but InsAllah, one day I will a good programmer. My dream is to be a full-stack developer, I work hard and will play an important role in the IT sector of the society</p>
            </div>
            <div className='col'>
            <img className='img-thumbnail ms-2' src={AboutPic} height="" alt="" />
            </div>
        </div>
    );
};

export default AboutMe;