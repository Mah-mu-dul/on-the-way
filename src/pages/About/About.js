import React from 'react';
import './About.css'
import img from '../../img/formal.png'
const About = () => {
    return (
        <div className=' body'>
           <div className="bodyy w-100 d-flex flex-column  container">
                <div className=" mx-auto ">
                    <img className='img mx-auto ' src={img} alt="" />
               </div>
               <div className="description">
                    <h4>Hey ! this is <span className='text-danger'>MAHMUDUL HASAN</span> <br /> A  profetional traveller and travel guid. I have done almost 100  successful tour pakage in Asia, Eurup and America. I am also a student of Tourism and hospitality managemant at IUB  .<br /> You can choose me as  your travel partner. With me,  you can travel any corner of the planet. I am always ready to provide you the simple to extime  adventure. pleace make sure register my website and chackout some pakages.</h4>
                    <h2>After 5 year I want to become a full time travell guid and travell vloger </h2>
               </div>
           </div>
        </div>
    );
};

export default About;