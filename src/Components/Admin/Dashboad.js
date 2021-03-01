import React, { useState } from 'react';
import Kids from './Kids';
import Men from './Men';
import Women from './Women';
import {faMale,faFemale,faChild } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideBar.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Dashboad = () => {
    const [men, setMen] = useState(true);
    const [women, setWomen] = useState(false);
    const [kids, setKids] = useState(false);
    const handleClient = (e) => {
        if (e.target.innerText === "Mens Clothing") {
            setMen(true);
            setWomen(false);
            setKids(false);
        }
        if (e.target.innerText === "Womens Clothing") {
            setMen(false);
            setWomen(true);
            setKids(false);
        }
        if (e.target.innerText === "Kids") {
            setMen(false);
            setWomen(false);
            setKids(true);
        }
    }
    return (
       <div>
           <Navbar></Navbar>
            <div className="row container">
            <div className="col-md-3 col-sm-4 col-12">
            <div className="sidebar">
                <ul>
                    <li onClick={handleClient} style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faMale} /> <span>Mens Clothing</span>
                    </li>

                    <li onClick={handleClient} style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faFemale} /> <span>Womens Clothing</span>
                    </li>

                    <li onClick={handleClient} style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faChild} /> <span>Kids</span>
                    </li>
                </ul>
            </div>
            </div>

            <div className="col-md-9 col-sm-8">
                    {
                        men && <Men></Men>
                    }
                    {
                        women && <Women></Women>
                    }
                    {
                        kids && <Kids></Kids>
                    }
                </div>

        </div>
        <Footer></Footer>
       </div>
    );
};

export default Dashboad;