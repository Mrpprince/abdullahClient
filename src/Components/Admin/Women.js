import React, { useState } from 'react';

const Women = () => {
    const [addService, setAddService] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newService = { ...addService };
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddService = (e) => {

        const formData = new FormData()

        formData.append('file', file);
        formData.append('code', addService.code);
        formData.append('fabric', addService.fabric);
        formData.append('material', addService.material);
        formData.append('size', addService.size);
        formData.append('color', addService.color);
        formData.append('moq', addService.moq);
        formData.append('description', addService.description);
       
        fetch('http://localhost:5000/addWomensCloth', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }
    return (
        
            <div>
            <div className="row" style={{ margin: "0 0" }}>
                <div className="col-md-12 d-flex justify-content-between mb-3">
                    <h4>Add Women Cloths</h4>
                    {/* <h4> {loggedInUser.name} </h4> */}
                </div>
                <div className="col-md-12" style={{ backgroundColor: "rgb(215, 240, 243)" }}>
                    <div className="col-md-10 py-2 px-2 my-5 mx-4">
                        <form onSubmit={handleAddService}>
                            <div className="px-4 py-4 row" style={{ backgroundColor: "white", borderRadius: "10px" }}>
                                <div className="col-6">
                                    <div className="form-group">
                                        <h6>Code</h6>
                                        <input onBlur={handleBlur} name="code" type="text" className="form-control" placeholder="CODE" required/>
                                    </div>
                                    <div className="form-group">
                                        <h6>Fabric</h6>
                                        <input onBlur={handleBlur} name="fabric" type="text" className="form-control" placeholder="FABRIC" required/>
                                    </div>
                                    <div className="form-group">
                                        <h6>Material</h6>
                                        <input onBlur={handleBlur} name="material" type="text" className="form-control" placeholder="MATERIAL" required />
                                    </div>
                                    <div className="form-group">
                                        <h6>Size</h6>
                                        <input onBlur={handleBlur} name="size" type="text" className="form-control" placeholder="SIZE" required/>
                                    </div>
                                    <div className="form-group">
                                        <h6>Color </h6>
                                        <input onBlur={handleBlur} name="color" type="text" className="form-control" placeholder="COLOR" required/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <h6>MOQ</h6>
                                        <input onBlur={handleBlur} name="moq" type="text" className="form-control" placeholder="MOQ" required/>
                                    </div>
                                    <div className="form-group">
                                        <h6>Description</h6>
                                        <textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="5" rows="5" placeholder="Enter description" required></textarea>
                                    </div>
                                </div>
                                <div className="col-6 mt-1">
                                    <h6>Icon</h6>
                                    <input onChange={handleFileChange} name="file" type="file" required />
                                </div>
                            </div>
                            <div className="form-group mt-2 d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary">Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
       
    );
};

export default Women;