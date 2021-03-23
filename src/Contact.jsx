import React, { useState } from 'react'


const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Full Name</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="fullname"  onChange={InputEvent} placeholder="Enter your Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone </label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"  name="phone"  onChange={InputEvent} placeholder="Enter your Phone No" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"  name="email" onChange={InputEvent} placeholder="Enter your Email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="msg"  onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

    
    
   
  
export default Contact;