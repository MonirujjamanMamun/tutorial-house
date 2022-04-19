import React from 'react';


const Footer = () => {
    return (
        <div className='bg-dark text-center p-3 my-3'>
            <h6 className='text-light cursor-pointer'> Info <span className='pink-color'>|</span> Support <span className='pink-color'>|</span> Marketing <span className='pink-color'>|</span> </h6>
            <h6 className='text-light'>Terms of Us <span className='pink-color'>|</span> Privacy Policy <span className='pink-color'>|</span></h6>
            <p className='text-light'><span>&copy;</span> <span>2022 Tutorial House</span></p>
        </div>
    );
};

export default Footer;