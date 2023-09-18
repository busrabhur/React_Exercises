import { useState } from 'react';
import Angular from './imgs/c.png';
import Bootstrap from './imgs/csharp.png';
import Csharp from './imgs/linq.png';
import KompleWeb from './imgs/react.png';
import './Course.css';

const courseMap={
    Angular,
    Bootstrap,
    Csharp,
    KompleWeb,
};

function Course({courseName}) {

    return ( 
        <>
            <div className='courseDiv'>
                <img className='course' src={courseMap[courseName]} alt="" />
            </div>
        </>
     );
}

export default Course;