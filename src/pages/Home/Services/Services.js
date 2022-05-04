import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Service from '../Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>

            <h2 className='mt-5 text-center'>Services </h2>
            <div className="  mt-5 d-lg-flex  d-sm-block justify-content-evenly  ">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;