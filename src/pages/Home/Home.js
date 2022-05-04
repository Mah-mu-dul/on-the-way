import React from 'react';
import './Home.css'
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <div className="">
                <img className='w-100' src="https://img.freepik.com/free-photo/amazing-views-lake-bratan-mountains-covered-with-clouds_247622-18394.jpg?w=996" alt="" />
            </div>
            <Services></Services>
            
        </div>
    );
};

export default Home;