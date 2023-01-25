import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';


export default function Footer() {

  
  return (
    <>
    
   <MDBFooter className='bg-grey text-center text-black'>
      <MDBContainer className='p-4 pb-0' >
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/campusfp/'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/Campus_FP'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/campusfp_/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/school/campus-fp/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/avalonxii/T2_HG_SERVIDOR_FORMUWORLD'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#5BC0F8'}}>
        ©2023 Copyright-
        <a className='text-black' href='https://campusfp.es/'>
        FormuWorld
        </a>
      </div>
    </MDBFooter>

    </>
  );
}