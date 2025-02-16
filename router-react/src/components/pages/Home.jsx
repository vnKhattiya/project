import React from 'react'
import CardProducts from '../layouts/CardProduct/CardProduct';
import Products from '../../Data.jsx';

const home = () => {

  return (
    <div>
       <div className='bg-light container-fluid py-5'>
        <div className='container'>

          {/* allProduct */}
          <h1 className='fw-bold text-center'>Products</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {Products.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
