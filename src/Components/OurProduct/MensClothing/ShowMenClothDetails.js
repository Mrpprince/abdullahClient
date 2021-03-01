import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import mensCloth from '../mensCloth';


const ShowMenClothDetails = () => {
    const { Code } = useParams();
    const [data, setData] = useState({});
    const history = useHistory()
    // const [product,setProduct] = useState([]);
    // console.log(product)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/findMensCloth',{
    //         method: "POST",
    //         headers: { 'content-type': 'application/json'},
    //         body: JSON.stringify({code: Code})
    //     })
    //     .then(res=> res.json())
    //     .then(data=> setProduct(data))
    // },[]);
    // const pd = product[0];
    // console.log(pd);
    const product = mensCloth.find(pd => pd.Code === Code);
    const handleBlur = (e) => {
        const newUserInfo = { ...data };
        newUserInfo[e.target.name] = e.target.value;
        setData(newUserInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/sendMessage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {

            })
            .catch(error => {
                console.error(error)
            })
        e.target.reset()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='row container mt-4'>
                <div className='col-md-4  px-5'>
                    <div class="img-magnifier-container">
                        <Link to={'/mensClothPicture/' + product.Code}>
                            <img id="myimage" src={product.image} className="img-fluid w-100 " alt="Tex source Global BD" />
                        </Link>
                    </div>

                    {/* <img src={product.image} className="img-fluid" /> */}
                    <button className="btn btn-success mt-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquery</button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content w-100">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Inquiry For {product.Code}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className='container'>
                                        <div className='row d-flex justify-content-between'>
                                            <div className="col-md-6 col-sm-12">
                                                <form onSubmit={handleSubmit}>
                                                    <div className='form-group'>
                                                        <label for='code'>
                                                            CODE
                                                         </label>
                                                        <input type='text' onBlur={handleBlur} className='form-control' name='code' />
                                                    </div>

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
                                                        <label for='phone'>
                                                            YOUR PHONE
                                                        </label>
                                                        <input type='number' onBlur={handleBlur} name='mobile' className='form-control' required />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label for='email'>
                                                            YOUR COUNTRY
                                                        </label>
                                                        <input type='text' onBlur={handleBlur} name='country' className='form-control' />
                                                    </div>

                                                    <div className='form-group'>
                                                        <label for='subject'>
                                                            SUBJECT
                                                     </label>
                                                        <input className='form-control' onBlur={handleBlur} name='subject' type='text' required />
                                                    </div>
                                                    <div className='form-group'>
                                                        <label for="message">Message</label>
                                                        <textarea name='message' cols='87' onBlur={handleBlur} name='message' type='text' className='form-control' rows='10' required />
                                                    </div>
                                                    <br />
                                                    <input type='submit' value='Send' className='btn btn-danger' />
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row container'>
                    <div style={{fontFamily:"cursive",fontSize:"20px"}} className='col-md-8  px-5'>

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

export default ShowMenClothDetails;