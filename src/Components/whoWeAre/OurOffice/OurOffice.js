import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const OurOffice = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ textAlign: "center" }}>
                <img className="img-fluid" src='https://pawlafashion.com/wp-content/uploads/2019/08/pawlafashion-office.jpg'/>
                <h3>DHAKA OFFICES</h3>
                <br />
                <div style={{textAlign:"center" }} className='d-block-sm-12 lead p-5'>
                    <p>Texsource Global BDis proudly contributing to the growth of Bangladesh RMG sector. By consistently delivering high quality, compliant products that add value and bring efficiency to our overseas clients supply chain management.</p>
                    <br />
                    <p>We have managed to build a successful and loyal business relations with many renewed, globally active retailers in the fashion and lifestyle industry.</p>
                    <br />
                    <p>
                        We are committed to helping our clients grow and maximize their investments, Texsource Global BDbrings you the latest and most relevant technical know-how in textile manufacturing and strategic sourcing expertise. Our careful activities and industry insight will help you make informed decisions and stay ahead of the competition.
                </p>
                    <br />
                    <p>Our offices are strategically located in the business district in Uttara with high accessibility and close proximity to Hazrat Shahjalal International Airport and the major hub for textile exports.</p>
                    <br/>
                    <h3>LONDON LIASON OFFICE</h3>
                    <p>Our immediate presence in London and Europe provide our european customers a comprehensive insight of our company services and operations.Being close to our customers give us the opportunity to interact quickly and to engage directly with our clients and business partners.</p>
                    <br/>
                    <p>
                    Our highly trained associates will ensure top level communication with all clients and ultimately provide them with continuous support and technical assistance.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurOffice;