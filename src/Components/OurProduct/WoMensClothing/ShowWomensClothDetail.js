import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import woMensCloth from '../woMensCloth';

const ShowWomensClothDetail = () => {
    const { Code } = useParams();
    const product = woMensCloth.find(pd => pd.Code === Code);
    return (
        <div>
            <Navbar></Navbar>
            <div className='row container'>
                <div className='col-md-4  px-5 mt-4'>
                    <div class="img-magnifier-container w-100">
                        <Link to={'/woMensClothPicture/' + product.Code}>
                            <img id="myimage" src={product.image} className="img-fluid w-100 " alt="Tex source Global BD" />
                        </Link>
                    </div>
                    <button className="btn btn-success mt-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquery</button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content w-100">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className='container'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className="col-md-6 col-sm-12">
                                                <form>
                                                    <div className='form-group'>
                                                        <label for='name'>
                                                            your Name(required)
                                                    </label>
                                                        <input type='text' className='form-control' name='name' required />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label for='email'>
                                                            your Email(required)
                                                   </label>
                                                        <input type='email' name='email' className='form-control' required />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label for='subject'>
                                                            Subject
                                                </label>
                                                        <input className='form-control' name='subject' type='text' required />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label for="message">Message</label>
                                                        <textarea name='message' cols='87' name='message' type='text' className='form-control' rows='10' required />
                                                    </div>
                                                    <br />
                                                    <input type='submit' value='Send' className='btn btn-danger' />
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row container'>
                    <div style={{ fontFamily: "cursive", fontSize: "20px" }} className='col-md-8  px-5'>

                        <p><b>Code</b> : {product.Code}</p>
                        <p><b>Fabric</b> : {product.Fabric}</p>
                        <p><b>Material</b> : {product.Material}</p>
                        <p><b>Size</b> :{product.Size}</p>
                        <p><b>Color</b> :{product.Color}</p>
                        <p><b>MOQ</b> :{product.MOQ}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowWomensClothDetail;