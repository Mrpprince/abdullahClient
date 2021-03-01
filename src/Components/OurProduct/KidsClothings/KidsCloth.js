import React from 'react';
import { Link } from 'react-router-dom';

const KidsCloth = (props) => {
    const {Code,image} = props.kidscloth;
    return (
        <div className='col-md-3 mb-2'>
        <Link to={'/KidsclothingDetails/'+Code}><img src={image} className='img-fluid px-3 py-4' style={{borderRadius: "30px"}} role='button' />
        </Link> 
     </div>
    );
};

export default KidsCloth;