import React from 'react';
import { Link } from 'react-router-dom';

const WomenCloth = (props) => {
    const {Code,image} = props.women;
    return (
        <div className='col-md-3 mb-2'>
        <Link to={'/WomensclothingDetails/'+Code}><img src={image} className='img-fluid px-3 py-4' style={{borderRadius: "30px"}} role='button' />
        </Link> 
     </div>
    );
};

export default WomenCloth;