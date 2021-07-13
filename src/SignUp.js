import React from 'react';

import logo from "./logo.jfif"
import  { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard,MDBIcon, MDBCardBody } from 'mdb-react-ui-kit';

function Signup() {
  return (
    
    <MDBContainer style={{"background-color" : "#F6F8FC", "min-height" : "100vh"}} fluid>
      <br />
      <div style={{"float" : "right"}} className='px-4'>
           <MDBBtn className='px-4 btn btn-white mx-2'>Login</MDBBtn>
            <MDBBtn style={{"background-color" : "#9a3bf9"}}>Signup</MDBBtn>
      </div><br />

      <br /><br />

     <MDBRow >
     <MDBCol md="2">

     </MDBCol>
        <MDBCol md="4" className='' style={{"margin-top" : "0%"}}>

       
          <div style={{"width" : "100%"}} className="mx-auto  " >

          
           
            <MDBCardBody className='p-0 rounded'>
          
            <div className=' ' style={{ "object-fit" : "scale-down"}}>
            <h1 className='text-center text-muted'>Register for ATS</h1>
            <p className="text-center">Get Your Free Trial for 30 Days!!</p>


            </div>
              <form className='px-4'>
                
                <div className="grey-text px-4">
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

                  <MDBInput
                    label="Username"
                    icon="Lock"
                    group
                    type="email"
                    validate
                    error="wrong"
                    className = "my-4"
                    success="right"
                  />
                  <MDBInput
                    label="password"
                    icon="Lock"
                    group
                    type="email"
                    validate
                    error="wrong"
                    className = "my-4"
                    success="right"
                  />
                 
                </div>


                <div className='px-4'>
                    <lable ><input type='checkbox' /> You Agree our Terms and Conditions </lable>
                </div>


                <div className="text-center py-2 mt-3" >
                  <MDBBtn color="cyan" className='btn btn-primary' type="submit" style={{"width" : "90%", "background-color" : "#9a3bf9"}}>
                    Register
                  </MDBBtn>
                </div>

                
              </form>

              <div className="text-center py-2 mt-3">
                  <MDBBtn color="cyan" className='btn btn-white' type="submit" style={{"width" : "82%"}}>
                  <MDBIcon fab icon="google" />   Register with google
                  </MDBBtn>
                </div>

                <div className="text-center">
                  <MDBBtn color="cyan" className='btn btn-primary' type="submit" style={{"width" : "82%"}}>
                  <MDBIcon fab icon="facebook-f" />    Register with facebook
                  </MDBBtn>
                </div>

                <br /><br />

            </MDBCardBody>
          </div>
        </MDBCol>
        <MDBCol md="4" sm="12" style={{
            backgroundImage : `url("https://www-cdn.ezcast-pro.com/wp-content/uploads/2019/11/EZCast-Pro-wireless-presentation-meeting-room.jpg")`,
            backgroundRepeat: 'no-repeat',
            objectFit : "cover",
          }} >

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
