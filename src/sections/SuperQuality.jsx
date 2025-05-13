
import React from 'react';
import Button from "../components/Button";
import { shoe8 } from '../assets/images';


const SuperQuality = () => {
  return (
    <section 
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className='flex flex-1 flex-col '>
            <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
              We provide you&nbsp;  
              <span className='text-coral-red inline-block mt-3'>Super</span>
              <br/>
              <span className='text-coral-red inline-block mt-3'> Quality </span> Shoes
              <br/>
            </h2>
          <p className='mt-4 lg:max-w-lg font-montserrat text-slate-gray font-medium'>
              Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
              <br/>
              Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className='mt-11'>
            <Button label="View details"/>
          </div>
        </div>

        <div className='flex flex-1 justify-center items-center'>
          <img 
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
          />
        </div>
    </section>
  )
}

export default SuperQuality