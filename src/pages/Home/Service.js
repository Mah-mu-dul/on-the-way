import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, id, price, des, point } = service
    const navigate = useNavigate()
    const navigateToSirviceDetail = id =>{
        navigate(`/services/${id}`)
    }
    return (
        <div>

            

                <div className=" m-3">
                    <Card className='mx-auto' style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title> <h1>{name}</h1></Card.Title>
                            <h4>{point}</h4>
                            <Card.Text>
                                {des}
                            </Card.Text>
                            <h2>Rs. {price}.00</h2>
                        <Button onClick={() => navigateToSirviceDetail(id) } variant="primary">Chackout</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>


    );
};

export default Service;