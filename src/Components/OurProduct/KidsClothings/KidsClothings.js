import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import kidsCloth from '../kidsCloth';
import KidsCloth from './KidsCloth';

const KidsClothings = () => {
    // const [kidsCloth, setkidsCloth] = useState([]);
    // useEffect(() => {
    //         fetch(`http://localhost:5000/kidsCloth`)
    //         .then(res=>res.json())
    //         .then(data=> setkidsCloth(data) )
    // }, [])
    return (
    
        <div>
        <Navbar></Navbar>
        <div className="container w-75">
            
                <div className="row">
                        {
                            kidsCloth.map(kidscloth=>  <KidsCloth kidscloth={kidscloth}></KidsCloth>
                            
                            )
                        }
                </div>
            
        </div>
        <Footer></Footer>
    </div>
    );
};

export default KidsClothings;