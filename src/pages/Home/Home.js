import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Home.css'


const Home = () => {
    return (
        <div>
            <header>
                
                <div className="">
                    <img className='w-100' src="https://img.freepik.com/free-photo/amazing-views-lake-bratan-mountains-covered-with-clouds_247622-18394.jpg?w=996" alt="" />
                </div>
            </header>
            <body className=''>
                <div className="  mt-5 d-sm-flex justify-content-evenly  ">
                    <div className="">
                        <Card className='mx-auto' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://img.freepik.com/free-photo/kelingking-beach-sunset-nusa-penida-island-bali-indonesia_335224-338.jpg?t=st=1651238135~exp=1651238735~hmac=ac99c9344f49dbd8ffb98a876860d297b6954e5950d86d8115c6b088d65049c2&w=996" />
                            <Card.Body>
                                <Card.Title> <h1>Bali trip</h1></Card.Title>
                                <h4>T- Rex point</h4>  
                                <Card.Text>
                                    Bali is a super budget-friendly destination, so it's pretty easy to visit the island and not have to worry about breaking the bank. Though often busy with tourists, Bali is still surprisingly affordable if you know where to look.
                                </Card.Text>
                                <h2>Rs. 75,813.00</h2>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="">
                        <Card className='mx-auto' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://independenttravelcats.com/wp-content/uploads/2020/06/chateau-doex-balloon-festival-52.jpg" />
                            <Card.Body>
                                balloon <Card.Title> <h1>Hot air balloon </h1></Card.Title>
                                <h4>switzerland</h4>
                                <Card.Text>
                                    Bali is a super budget-friendly destination, so it's pretty easy to visit the island and not have to worry about breaking the bank. Though often busy with tourists, Bali is still surprisingly affordable if you know where to look.
                                </Card.Text>
                                <h2>Rs. 80,000.00</h2>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="">
                        <Card className='mx-auto' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://img.freepik.com/free-photo/landscape-view-fields-manali-mountains-india_181624-30083.jpg?t=st=1651415387~exp=1651415987~hmac=be16a269bf4f0cd1a8c7bb8548eadc7c1e034cc1d2c4dbf699fb88fdd8b8f8a4&w=1060" />
                            <Card.Body>
                                <Card.Title> <h1>manali trip</h1></Card.Title>
                                <h4>Manali mountains</h4>
                                <Card.Text>
                                    Planning to book Manali packages from Manali? Look no beyond Yatra. Find an array of Manali tour packages from Manali that can be customised, from short-term weekend stays to long-term ones. Go through our offers and avail seasonal discounts on domestic holiday packages with star hotel stays thrown into the mix.
                                </Card.Text>
                                <h2>Rs. 7,813.00</h2>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </body>
          
        </div>
    );
};

export default Home;