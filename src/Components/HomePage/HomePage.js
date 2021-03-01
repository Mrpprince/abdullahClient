import React from 'react';

import './HomePage.css';
import img4 from '../../img4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faTrophy,faCogs,faSignal } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';
const HomePage = () => {
  AOS.init();
  return (
    <div className="mainHomePage">
      <Carousel></Carousel>
      <div style={{ textAlign: 'center', padding: '5%' }} className="welcome">
        <div className="row d-flex align-items-center container" style={{ textAlign: 'center', marginBottom: '5%' }}>
          <div style={{fontFamily:"cursive"}} className="col-md-6 col-sm-12" data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <h3>Welcome to Texsurce Global BD </h3>
            <h4>A leading textile solution provider in Bangladesh</h4>
            <p>Established in 2012, Texsource Global BD is a fast growing readymade garments manufacturer and a buying house in Bangladesh. We are engaged in manufacturing and supporting our valued clients to source high quality products with a correct price and product compliance mix. Our state of the art facilities and partners factories are fully certified with all compliance requirements such as BSCI, OEKO-TEX, WARP ACCORD etc.</p>
            <br />
            <p>Our objective is to stay ahead of the game by offering our global clients an elite customer service satisfaction, quality assurance and true sense of successful business partnership.</p>
          </div>
          <div className="col-md-6 col-sm-12" style={{ marginTop: "5%", textAlign: 'center' }}>
            <img src={img4} className='img-fluid' style={{ width: '520px', height: '330px' }} />
          </div>
        </div>
        <div className="col-sm-12 m-sm-2" style={{ marginTop: '10%' }}>
          <h5>Why work with us</h5>
          <p className="lead">In today’s ever changing and challenging fashion industry businesses need supply chain </p> <p style={{ textAlign: 'center' }}> partners that add value, bring innovation and create efficiencies within the supply chain.</p>
        </div>
      </div>
      <div style={{ padding: "3%", background: "lightgray" }}>
        <div className="container" style={{ marginTop: "5%" }}>
          <div className="row">
            <div className="col-md-4">
              <h3>

                Innovation in Design and Development
              </h3>
              <p className="lead" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                Focusing on fashion trends and sustainability by offering exceptional product development and design services.
              </p>
            </div>
            <div className="col-md-4">
              <h3>
                Cost re-engineering
              </h3>
              <p className="lead" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                Detailed cost analysis of product and process design while using reverse engineering of samples to fit price points.
              </p>
            </div>
            <div className="col-md-4">
              <h3>

                Global Sourcing and Supply Chain Management
              </h3>
              <p className="lead" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                With global reach and strong local presence we provide an all-encompassing level of support and commitment to deliver high quality, cost effective and compliant products.
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "3%" }}>
          <div className="row">
            <div className="col-md-4">
              <h3>


                Speed to Market
              </h3>
              <p className="lead" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                A pressing priority to enhance client’s competitiveness, positioning and profitability.
              </p>
            </div>
            <div className="col-md-4">
              <h3>

                Flexibility
              </h3>
              <p className="lead" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                We are small enough to respond quickly to any inquiry, and large enough to service multinational corporations.
              </p>
            </div>
            <div className="col-md-4">
              <h3>


                Cross Functional Expertise
              </h3>
              <p className="lead" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="7000">
                Providing innovative and effective solutions from product conception to delivery.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="container" style={{marginTop:"3%",textAlign:"center"}}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
            <FontAwesomeIcon  style={{fontSize:"40px" }} icon={faUser} />
            </div>
            <div className="col-md-3">
            <FontAwesomeIcon  style={{ fontSize:"40px" }} icon={faTrophy} />
            </div>
            <div className="col-md-3">
            <FontAwesomeIcon  style={{ fontSize:"40px" }} icon={faCogs} />
            </div>
            <div className="col-md-3">
            <FontAwesomeIcon  style={{fontSize:"40px" }} icon={faSignal} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePage;

