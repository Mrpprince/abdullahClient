import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer className="footer" style={{ marginTop: "3%" }}>

      <div className=" d-flex justify-content-between container">
        <div className=" ">
          <h5>Texsource Global BD Headquater</h5>
          <p> House #2,Road #14 ,Sector #4 </p>
          <p>Uttara, Dhaka</p>
          <p>Bangladesh</p>

        </div>

        <div className="">
          <h4>FOLLOW US ON</h4>
          <div className='d-flex align-items-center'>
             <FontAwesomeIcon icon={faFacebookF} className="mb-3 mx-2" />
             <p style={{color:"#fff",cursor:'pointer'}} href="">Facebook</p>
            
          </div>
          <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faTwitter} className="mb-3 mx-2" />
          <p style={{color:"#fff",cursor:'pointer'}} href="">Twitter</p>
          </div>
        </div>

      </div>

      <p style={{ textAlign: 'center', }}><small>© 2021 texsourceglobalbd.com . All rights reserved | TexSource Global BD</small></p>
    </footer>
  );
};

export default Footer;