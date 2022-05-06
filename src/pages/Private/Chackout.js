import React from 'react';
import { useParams } from 'react-router-dom';
import './Chackout.css'
const Chackout = () => {
    const { servicesId, } = useParams()
    return (
        <div>
            <h2>this is from chackout </h2>
            <h1>this is for {servicesId}</h1>

        </div>
    );
};

export default Chackout;