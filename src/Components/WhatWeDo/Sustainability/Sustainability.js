import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './Sustainability.css'

const Sustainability = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img  src='https://pawlafashion.com/wp-content/uploads/2019/08/Sustainability.jpg' className="img-fluid w-100" />
            <div style={{ textAlign: 'center', borderBottom: '1px solid lightgray', padding: "2%" }}>
                
                <h3>SUSTAINABLE DEVELOPMENT</h3>
                <br />
                <p>At Texsource Global BDsustainable development is an essential element of our day-to-day business. We understand the hurdles and challenges laid on our path to achieving our sustainability goals and mission. However, the biggest challenge is how to improve the way things are made and how to have an approach that is also suitable with the current market needs and demands. We recognize that sustainable expansion of business is only achieved when compliance and corporate social responsibility are ingrained in the corporate process and vision.

                </p>
                <img src='https://pawlafashion.com/wp-content/uploads/2019/08/Diagram-8-1.jpg' className="img-fluid w-50" />
            </div>
            <div style={{  textAlign: 'center', borderBottom: '1px solid lightgray', padding: "2%" }}>
                <h3>
                    SUSTAINIBILITY
                </h3>
                <br />
                <p>
                    Our social and environmental responsibilities are at the heart of our way of working. We strive to give the highest priority to promote and maximize the use of organic cotton, recycled materials and durable materials, but also the production of added value garments. Garments that last and stand the test of time.
                </p>
                <p>We carefully select our factories and suppliers for their level of compliance and their approach to achieving sustainability and world className quality accreditation such as:</p>
                <div className='row'>
                    <div className="col-md-6">
                        <ul>
                            <li>
                                SO9001: Quality Management Systems
                            </li>
                            <li>
                                SEDEX : Supplier Ethical Data Exchange
                            </li>
                            <li>
                                EMS: Environmental Management Systems
                            </li>
                            <li>
                                OEKO-TEX (Standard 100)
                            </li>
                            <li>
                                GOTS (Global Organic Textiles Standard)
                            </li>
                            <li>
                                OCS (Organic Content Standard)
                            </li>
                            <li>
                                GRS (Global Recycled Standard)
                            </li>
                            <li>
                                WRAP (Worldwide Responsible Accredited Production
                            </li>

                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <img className="img-fluid w-50" src='https://pawlafashion.com/wp-content/uploads/2019/08/Diagram-5-300x208.jpg' />
                    </div>
                </div>

            </div>
            <div style={{textAlign:'center'}}>

                <img className="img-fluid w-75" src='https://pawlafashion.com/wp-content/uploads/2019/08/Diagram-9-1-1024x683.jpg' />

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Sustainability;