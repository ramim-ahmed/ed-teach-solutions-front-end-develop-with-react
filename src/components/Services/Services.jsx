import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({fetchURL}) => {
  return (
    <div className='my-5'>
      <div className="container px-5">
        <div className="row">
          <div className="col-12 text-center">
            <p> Our Services</p>
            <h1 className='fw-bold'>Provide All Kind Of Tech Solutions</h1>
            <p className='text-secondary'>Technology can be most broadly defined as the entities, both material and immaterial, created by the application of mental and physical effort in order to ...</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
         {
           fetchURL.map( data => (
             <div key={data.id} className="col-12 col-md-5 text-center p-3 border m-3">
               <img width={60} height={60} src={data.img} alt="" className="img-fluid" />
               <div className='mt-3'>
               <p className='fw-bold'>{data.title}</p>
               <p className='text-secondary'>{data.description}</p>
               </div>
               <Link to={`/services/${data.slug}`}>
                 <button className='btn_choose'>Choose</button>
               </Link>
             </div>
           ))
         }
        </div>
      </div>
    </div>
  )
}

export default Services;