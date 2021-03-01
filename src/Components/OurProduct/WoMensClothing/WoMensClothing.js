import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import woMensCloth from '../woMensCloth';
import WomenCloth from './WomenCloth';

const WoMensClothing = () => {
    // const [womenCloth, setWoMenCloth] = useState([]);
    // useEffect(() => {
    //         fetch(`http://localhost:5000/womensCloth`)
    //         .then(res=>res.json())
    //         .then(data=> setWoMenCloth(data) )
    // }, [])

    return (
        <div>
        <Navbar></Navbar>
        <div className="container w-75">
            
                <div className="row">
                        {
                            woMensCloth.map(women=>  <WomenCloth women={women}></WomenCloth>
                            
                            )
                        }
                </div>
            
        </div>
        <Footer></Footer>
    </div>
    );
};

export default WoMensClothing;