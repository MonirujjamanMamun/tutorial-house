import React, { useEffect, useState } from 'react';
import useSubject from '../Hooks/useSubject';
import Servise from '../Servise/Servise';

const Servises = () => {
    const [subjects, setSubject] = useSubject()
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                {
                    subjects.map(subject => <Servise key={subject.id} subject={subject}></Servise>)
                }
            </div>
        </div>
    );
};

export default Servises;