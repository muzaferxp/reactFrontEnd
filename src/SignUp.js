import React from 'react';

import logo from "./logo.jfif"
import  { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function Signup() {
  return (
    
    <MDBContainer style={{"background-color" : "#f7f2f2", "min-height" : "100vh"}} fluid>
     <MDBRow>
        <MDBCol md="4" className='mx-auto' style={{"margin-top" : "5%"}}>
          <MDBCard >
           
            <MDBCardBody className='p-0 rounded'>
          
            <div className='p-4 ' style={{"height" : "150px", "background-color" :  "#6dafbc", "object-fit" : "scale-down"}}>
            <img src={logo} class="rounded-circle" alt="..."  style={{"width" :" 70px" , "height" : "70px"}} />
            </div>
              <form className='p-4'>
                
                <p className="h4 text-center">Get Your Free Trial for 30 Days!!</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    className = "my-4"
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Company name"
                    icon="user"
                    group
                    type="text"
                    validate
                    className = "my-4"
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    className = "my-4"
                    success="right"
                  />
                   <MDBInput
                    label="Phone"
                    icon="Lock"
                    group
                    type="email"
                    validate
                    error="wrong"
                    className = "my-4"
                    success="right"
                  />

                  <MDBInput
                    label="Location"
                    icon="Lock"
                    group
                    type="email"
                    validate
                    error="wrong"
                    className = "my-4"
                    success="right"
                  />
                 
                </div>


                <div>
                    <lable ><input type='checkbox' /> You Agree our Terms and Conditions </lable>
                </div>


                <div className="text-center py-2 mt-3">
                  <MDBBtn color="cyan" className='btn btn-primary' type="submit" style={{"width" : "100%"}}>
                    Register
                  </MDBBtn>
                </div>

                <div className=' mt-2'>
                    <a href='/signin'>Already have an account? sign In here.</a>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
