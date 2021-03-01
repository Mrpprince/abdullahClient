import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import MD from '../../../jalil uddin.jpg'
const MdMessage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mt-3'>
                <div className='row container'> 
                <div className='col-md-6 col-sm-12 d-flex align-items-center'>
                    <img src={MD} className='img-fluid' style={{height:'600px',width:'800px'}} />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h3>MESSAGE FROM MD</h3>
                    <p>Welcome to Tex Source BD . I would like to take this opportunity to thank all our clients, business associates and international partners for being part of  our incredible journey to success and prosperity. Texsource Global BD was founded in 2012 by a small passionate and dedicated team with extensive professional experience in readymade garments manufacturing and supply chain management. We have come a long way from our humble beginning to become one of the leading and a fast growing textile sourcing and manufacturing company in Bangladesh.</p>
                    <br/>
                    <p>
                    The textile industry is a major contributor to the national economy and to the development of Bangladesh for the last 25 years. In this respect, Texsource Global BDis playing a significant role to fulfill the requirements of the ever changing and challenging market place. We are determined to continuously invest in innovation and in developing and implementing effective solutions throughout the supply chain to increase efficiency and competitiveness. We are committed to continuous improvement in our Corporate and Social Responsibilities. Our relentless endeavor shall be to provide our clients an elite customer service with complete transparency and integrity. To proudly promoting sustainability and fairness in our global operations and business environment.
                    </p>
                    <br/>
                    <p>Abdul Jalil <br/>
                      Managing Director</p>
                </div>
                 </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MdMessage;