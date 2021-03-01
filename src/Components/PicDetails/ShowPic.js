import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import mensCloth from '../OurProduct/mensCloth';

const ShowPic = () => {
    const { PicCode } = useParams();
    const product = mensCloth.find(pd => pd.Code === PicCode);
    return (
        <div>
            <Navbar></Navbar>
            <div style={{textAlign:'center'}} className="mt-3 img-magnifier-container ">
                <img  style={{width:"50%",height:"50%"}} src={product.image} className="img-fluid"  />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowPic;