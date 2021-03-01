import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="p-3">
           <div className='lead p-2'  style={{ textAlign: 'center', borderBottom: '2px solid lightgray',fontFamily:"cursive" }}>
                <p style={{fontWeight:"bold",fontSize:"25px"}}>About Us</p>
                <p>
                    Established in 2012, Texsource Global BD is a fast growing readymade garments manufacturer and a buying house in Bangladesh. We are engaged in manufacturing and supporting our valued clients to source high quality apparel with a correct price and product compliance mix. Our state of the art facilities and partners factories are fully certified with all compliance requirements such as BSCI, OEKO-TEX, WARP ACCORD etc.
                </p>
                <br />
                <p>
                    Our objective is to stay ahead of the game by offering our global clients an elite customer service satisfaction, quality assurance and true sense of successful business partnership.
                </p>
            </div>
            <div className="mt-3 p-5" style={{ textAlign: 'center', width: 'auto', borderBottom: '2px solid lightgray' }}>
                <p style={{fontWeight:"bold",fontSize:"25px"}}>OUR VISION AND VALUES</p>
                <div className='container'>
                    <img className="img-fluid" src="https://pawlafashion.com/wp-content/uploads/2019/09/Dia-1-1024x829.jpg" />
                </div>
            </div>
            <div className="p-4" style={{ textAlign: 'center'}}>
                <p style={{fontWeight:"bold",fontSize:"25px"}}>WE ACT AS YOUR PARTNER TO SUCCESSFULLY MANAGE YOUR SUPPLY CHAIN</p>
                <p style={{ }}>We work hard by offering you solutions that  optimize, strengthen and enforce decisions across your supply chain from product  to delivery which includes all aspects of design, sourcing, manufacturing, warehousing and shipping.</p>
                <img className="img-fluid" src="https://pawlafashion.com/wp-content/uploads/2019/08/Flow-2.jpg" />
            </div>
            <div style={{ textAlign: 'center', }}>
                <p style={{fontWeight:"bold",fontSize:"25px"}}> WORKING FLOW PROCESS</p>
               
                <img  className="img-fluid" src='https://pawlafashion.com/wp-content/uploads/2019/09/dia-2.jpg' />
            </div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;