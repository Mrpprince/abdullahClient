import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const Service = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-3 p-3" style={{ borderBottom: '1px solid lightgray', textAlign: 'center' }}>
                <h3 style={{fontWeight:"bold"}}>WHAT WE DO</h3>
                <br />
                <p>
                    At Texsource Global BD we believe that we must be valued by our clients equally for our services, business relationships as well as our products.
                    We forged our business and reputation with dedicated and professional teams focusing on our individual customers, ensuring a transparent, honest and prosperous relationships.
            </p>
            </div>
            <div  className="mt-3 p-3"  style={{ textAlign: 'center', borderBottom: '1px solid lightgray' }}>
                <h3 style={{fontWeight:"bold"}}>OUR SERVICES</h3>
                <br />
                <p>
                    We are a service provider that primarily focus on client’s requirements  and compliance. We offer swift response manufacturing to satisfy our clients’ constant changing needs and requirements. This allows us to meet any changing demands due to constantly evolving market conditions.
            </p>
                <img className="img-fluid w-75"  src='https://pawlafashion.com/wp-content/uploads/2019/08/service2-1024x792.jpg' />
            </div>
            <div className="mt-3 p-3" style={{ textAlign: "center"}}>
                <h3 style={{fontWeight:"bold"}}>WHY WORK WITH US</h3>
                <br />
                <p>
                    With an extensive experience in the textile and readymade garments industry, Texsource Global BDis well positioned to react to the ever-changing needs and challenges of the market such as the evolution of the global sourcing dynamics, the impact of online retailing and its resulting effects on the fashion supply chain.
                    As a reliable textile manufacturer and garments exporter we continued to grow with a forward thinking vision and the ability to meet customers’ requirements with value added, partnership driven solutions.
            </p>
            <img className="img-fluid" src='https://pawlafashion.com/wp-content/uploads/2019/08/service-1024x473.jpg' />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;