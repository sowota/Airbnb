import React from 'react';
import  Image  from 'next/image';

export default function Hero() {
  return (
    <div className='relative bg-black w-full h-[400px] sm:h-[600px] lg:h-screen'>
      <Image src='/Unique-Airbnb-Hawaii.jpg' layout='fill' objectFit='contain' objectPosition='contain' priority='true'/> 

      <div className='absolute top-[7rem] w-full text-center lg:top-[25%]'>
          <p className='text-white sm:text-3xl font-bold lg:text-5xl '>
              Not sure where to go? Perfect.
          </p>
          <button className='text-purple-800 mt-5 bg-white px-5 py-2 rounded-full my-3 hover:shadow-xl active:scale-90 transition duration-150 sm:text-xl lg:mt-10 lg:px-7 lg:py-3'>
              I'm flexible
          </button>
      </div>
    </div>
  )
}
