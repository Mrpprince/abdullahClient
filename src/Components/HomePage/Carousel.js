import React from 'react';
import img1 from '../../img-1.jpg';
import img2 from '../../img-2.jpg';
import img3 from '../../img-3.jpg';
const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner main-carousel">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img2} className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img3} className="d-block w-100 img-fluid" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
};

export default Carousel;