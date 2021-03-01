import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import './Success.css'
import { Link } from 'react-router-dom';
const Success = () => {
    return (
        <div className="mt-5 pt-5 text-center">
            <div className="check mb-2 mt-3">
            <FontAwesomeIcon icon={faCheckCircle} className="mb-3" />
            <h1 style={{fontSize:'60px'}}>Thank You !</h1>
            <h1>Your Message have  Sent Successfully and we Will Contact You Soon </h1>
            </div>
        <div className="mt-4">
                <button className='btn btn-success'> <Link to="/">Back To Home</Link> </button>
        </div>
        </div>
    );
};

export default Success;