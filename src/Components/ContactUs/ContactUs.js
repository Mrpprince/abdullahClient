import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import { useHistory } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactUs = () => {
    AOS.init();
    const [data, setData] = useState({});
    const history = useHistory()
    const handleBlur = (e) => {
        const newUserInfo = { ...data };
        newUserInfo[e.target.name] = e.target.value;
        setData(newUserInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/sendEmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                history.push('/success')
            })
            .catch(error => {
                console.error(error)
            })
        e.target.reset()
    }
    return (
        <div>

            <Navbar></Navbar>
            <div className='container mt-5'>
                <div className='row d-flex justify-content-between'>
                    <div className="col-md-6 col-sm-12">
                        <form onSubmit={handleSubmit} data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <div className='form-group'>
                                <label for='name'>
                                    YOUR NAME
                            </label>
                                <input type='text' onBlur={handleBlur} className='form-control' name='name' required />
                            </div>
                            <div className='form-group'>
                                <label for='email'>
                                    YOUR EMAIL
                            </label>
                                <input type='email' onBlur={handleBlur} name='email' className='form-control' required />
                            </div>
                            <div className='form-group'>
                                <label for='subject'>
                                    SUBJECT
                            </label>
                                <input className='form-control' onBlur={handleBlur} name='subject' type='text' required />
                            </div>
                            <div className='form-group'>
                                <label for="message">MESSAGE</label>
                                <textarea name='message' cols='87' onBlur={handleBlur} name='message' type='text' className='form-control' rows='10' required />
                            </div>
                            <br />
                            <input type='submit' value='Send' className='btn btn-danger' />
                        </form>
                    </div>
                    <div className='col-md-6 col-sm-12' data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" >
                        <h3>Get in touch</h3>
                        <br />
                        <p style={{ borderBottom: '1px solid lightgray', paddingBottom: '3%' }}>
                            Physical addresses are available for customers and partners willing to make site visits to our facilities in Bangladesh. Please send your enquiries directly by email or simply chat with us for quick & reliable response.
                        </p>
                        <br />
                        <h3>The Office
                         </h3>
                        <br />
                        <div className='d-flex'>
                            <FontAwesomeIcon className='font' style={{ marginRight: '1%' }} icon={faMapMarkerAlt} />
                            <p style={{ fontWeight: "bold", marginRight: '1%' }}> Address </p>
                            <p>Uttara sector 4,road 14/c,house#2</p>
                        </div>
                        <div className='d-flex'>
                            <FontAwesomeIcon className='font' style={{ marginRight: '1%', }} icon={faEnvelope} />
                            <p style={{ fontWeight: "bold", marginRight: '1%' }}> Email </p>
                            <p>jalil@texsourceglobalbd.com</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default ContactUs;