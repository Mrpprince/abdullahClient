import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import mensCloth from '../mensCloth';
import MenCloth from './MenCloth';

const MensClothings = () => {

        // const [menCloth, setMenCloth] = useState([]);
        // useEffect(() => {
        //         fetch(`http://localhost:5000/mensCloth`)
        //         .then(res=>res.json())
        //         .then(data=> setMenCloth(data) )
        // }, [])

        return (
                <div>
                        <Navbar></Navbar>
                        <div className="container w-75">

                                <div className="row">
                                        {
                                                mensCloth.map(men => <MenCloth men={men}></MenCloth>

                                                )
                                        }
                                </div>

                        </div>
                        <Footer></Footer>
                </div>
        )

};

export default MensClothings;