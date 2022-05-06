import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Spinner style={{height:'auto' }} className='h-5 w-5 d-flex justify-contant-center align-items-center' animation="grow" variant="dark" />

        </div>
    );
};

export default Loading;