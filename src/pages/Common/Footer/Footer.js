import React from 'react';
import { Facebook, Github, Google, Instagram, Mailbox, Youtube } from 'react-bootstrap-icons';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer  '>

            <div className=" mx-auto">
                <h2 className='text-center pt-5'>All turms and conditions resurved <span className='text-warning'>On The Way</span> </h2>
                <h4 className="text-center">social links</h4>
                <div className="social d-flex justify-content-center">
                    <a target='_blank' href="https://web.facebook.com/mahmudulhasaniub/"><h1 className="text-center"><Facebook className='me-2' color="white" size={20} /></h1></a>
                    <a target='_blank' href="https://www.youtube.com/c/SANYGiRi"><h1 className="text-center"><Youtube className='me-2' color="white" size={20} /></h1></a>
                    <a target='_blank' href="https://github.com/wanna-be-pro"><h1 className="text-center"><Github className='me-2' color="white" size={20} /></h1></a>
                    <a target='_blank' href="https://www.instagram.com/mah.mu.dul_ha.san/?hl=en"><h1 className="text-center"><Instagram className='me-2' color="white" size={20} /></h1></a>
                </div>
                <h6 className='text-center'>

                    <small>Copyright © {year} On The Way</small>

                </h6>
            </div>


        </footer>
    );
};

export default Footer;