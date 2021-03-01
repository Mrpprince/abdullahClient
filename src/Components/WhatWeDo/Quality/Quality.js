import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const Quality = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ textAlign: 'center' ,borderBottom: '1px solid lightgray',padding:'2%', }}>
                <h3 style={{fontWeight:"bold",fontSize:"25px"}}>QUALITY ASSURANCE</h3>
                <br />
                <p>Texsource Global BD offers tailored solutions and customizable services for some of the world’s known apparel brands and retailers. We are committed to ensure all activities throughout the supply chain are through documented quality management system (QMS) enforcing compliance and requirement of ISO 9001 in every step of the manufacturing process and quality assurance system.

                </p>
                <br />
                <p>
                    We undertake stringent reviews, evaluations and performance measurement of all operations to ensure compliance with quality policy and continual improvement of the Quality Management System.
                </p>
                <img  className="img-fluid w-50" src='https://pawlafashion.com/wp-content/uploads/2019/11/Flow-44.jpg'/>
                <br /><br />
                <p>« Texso  Fashion is a recognised company for its quality
                   management, compliance and quality assurance ethos »</p>

            </div>
            <div style={{ textAlign: 'center', borderBottom: '1px solid lightgray',padding:'2%' }}>
                <h3 style={{fontWeight:"bold",fontSize:"25px"}}>QUALITY IS OUR FIRST PRIORITY</h3>
                <br />
                <p>
                    We have set high benchmarks for quality and speed to market in the supply chain industry by instituting global quality metrics and constantly encourage our factories partners to adopt and follow.
                       </p>
                       <img className="img-fluid w-50" src="https://pawlafashion.com/wp-content/uploads/2019/08/Diagram-9.jpg"/>
            </div>
            <div style={{ textAlign: 'center', borderBottom: '1px solid lightgray',padding:'2%' }}>
                <h3 style={{fontWeight:"bold",fontSize:"25px"}}>
                QUALITY FLOW CHARTs
                </h3>
                <br/>
                <p>
                Setting up a strict quality control standards, our specialized quality control and inspection teams work around the clock to oversee the complete process of lean production throughout the supply chain.
                </p>
                <img className="img-fluid w-50" src='https://pawlafashion.com/wp-content/uploads/2019/08/Diagram-4.jpg.png' />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Quality;