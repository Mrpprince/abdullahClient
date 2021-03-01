import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const Ethics = () => {
    return (
        <div>
            <Navbar></Navbar>
           
            <div  className=" p-3 lead" style={{textAlign:"center"}}>
                <h3>CORPORATE ETHICS
                </h3>
                <br />
                <p>We are committed to promoting ethical fair trade practices ensuring workers are treated with respect, the working environment meet health and safety standards and basic human rights are guaranteed and their entitlement to a decent standard of living is secured</p>
                <br />
                <p>
                    We strive to build strong partnerships with factories that have a completely open policy allowing a free access for audit and evaluation of their facilities under the Supplier Ethical Data Exchange code of conduct.
                </p>
                <br />
                <p>
                    We are dedicated to improving workers skills and abilities through continous training and development to equip them with lifelong skills and qualifications. We particularly endorse factories that actively promote workers training such as :
                </p>
                </div>
            
                <div className='row' style={{textAlign:"center"}}>
                <div className='col-md-6 col-sm-12'>
                <ul >
                    <li>ISO 9001:2015</li>
                    <li>Human rights training</li>
                    <li>Team Leadership Skill Development Program</li>
                   <li> Leadership & Decision Making training</li>
                   <li> Technical training for Line chief</li>
                    <li>Product quality improvement and compliance training</li>
                    <li>Computer security training</li>
                    <li>5S training</li>
                    
                </ul>
                </div>
               
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Ethics;