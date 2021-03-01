import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faFacebookF ,faTwitter} from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
  AOS.init();
  return (
    <div className=" my-navbar sticky-top">
      <nav className=" container  navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a style={{marginRight:"5%"}} className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/home">HOME</a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a style={{ background: 'none', color: '#fff', border: 'none' }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    WHO WE ARE
                   </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="/aboutUs">About us</a></li>
                    <li><a className="dropdown-item" href="/messageMd">Message From MD</a></li>
                    <li><a className="dropdown-item" href="/ourOffice">Our Office</a></li>

                  </ul>
                </div>

              </li>

              <li className="nav-item">
                <div className="dropdown">
                  <a style={{ background: 'none', color: '#fff', border: 'none' }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    WHAT WE DO
  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item" href="/service">services</a></li>
                    <li><a className="dropdown-item" href="/quality">Quality</a></li>
                    <li><a className="dropdown-item" href="/sustainability">Sustainability</a></li>
                    <li><a className="dropdown-item" href="/ethics">Ethics</a></li>
                  </ul>
                </div>

              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a style={{ background: 'none', color: '#fff', border: 'none' }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                    OUR PRODUCTS
  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">

                    <li >
                      <a href='/mensclothing' className='dropdown-item'>MEN'S CLOTHING</a>
                    </li>
                    <li >
                      <a href='/womensclothing' className='dropdown-item'>WOMEN'S CLOTHING</a>
                    </li>
                    <li >
                      <a href='/kidsclothing' className='dropdown-item'>KIDS'S CLOTHING</a>
                    </li>
                    
                  </ul>
                </div>

              </li>
              {/* <li className="nav-item">
                <a className="nav-link " href="/admin">ADMIN </a>
              </li> */}
              
              <li className="nav-item">
                <a className="nav-link " href="/contactUs">CONTACT US </a>
              </li>
              <li className="nav-item" style={{background:"#fff",width:"25px",height:"25px",marginTop:"1.3%",borderRadius:"50%",textAlign:"center"}}>
              <FontAwesomeIcon className='font' style={{ marginRight: '2%', }} icon={faFacebookF} />
              </li>
              <li className="nav-item" style={{background:"#fff",width:"25px",height:"25px",marginTop:"1.3%",borderRadius:"50%",textAlign:"center"}}>
              <FontAwesomeIcon className='font' icon={faTwitter} />
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;