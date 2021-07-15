import React from 'react';

import logo from "./logo.jfif"
import  { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard,MDBIcon, MDBCardBody } from 'mdb-react-ui-kit';
import {TextField} from  '@material-ui/core/Button';


const Input = (props) => {
  let formattedName = props.name;
  let inputRef = props.inputRef
  .toLowerCase()
  .split(" ")
  .join("_");
  
  return (
    <div className="custom-input input">      
      <input type="text" name={inputRef} />
      <label htmlFor={inputRef}>{formattedName}</label>
    </div>
  )
}


function Signup() {
  return (
    
    <MDBContainer style={{"background-color" : "#F6F8FC", "min-height" : "100vh"}} fluid>
      <br />
      <div style={{"float" : "right"}} className='px-4'>
           <MDBBtn className='px-4 btn btn-white mx-2'>Login</MDBBtn>
            <MDBBtn style={{"background-color" : "#9a3bf9"}}>Signup</MDBBtn>
      </div><br />



      <MDBCol>
        <MDBRow md='8' className='mx-auto'>
    <div className='card p-4'>
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
              <form className='px-4' method='POST' action='/http://localhost:8000/signup'>
              <Input name="Username" inputRef="Username" />
              <Input name="Company Name" inputRef="Company Name" />
              
              <Input name="Phone" inputRef="Phone" />

              <Input name="Email" inputRef="user email" />
              <Input name="Password" inputRef="Password" />


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

                <div className="text-center">
                  <MDBBtn color="cyan" className='mt-3 btn btn-primary' type="submit" style={{"width" : "82%"}}>
                  <MDBIcon fab icon="linkedin mx-2" />     Register with Linkedin
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
    </div>
  </MDBRow>
  </MDBCol>
    </MDBContainer>
  );
}

export default Signup;
