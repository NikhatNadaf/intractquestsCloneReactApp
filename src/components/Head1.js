import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import img from 'C:/Users/Admin/Desktop/HomeAssignment/intract-quests/src/assets/academy-animated-logo-57b2ae61-0035-removebg-preview.png';
import Head2 from './Head2';


function Head1() {
  return (
    <div className='w-full top-12 left-0 relative z-0 flex justify-center'>
      <img src='https://www.intract.io/assets/intract-academy-background-5547a705.png' className='absolute z-0 w-full'>
      
      </img>
      <div className='absolute flex flex-col items-center h-[40em] justify-evenly'>
      <div className='flex flex-col justify-center items-center'>
      <img src={img} className='h-[130px] w-[300px] bg-transparent my-2'/>
      <div className='flex flex-col items-center leading-6 text-xl'>
        <p className=' text-slate-200 '>Intract users<span className='text-gray-500 my-2'>have together made more than</span>$100 million<span className='text-gray-500'> in web3.</span></p>
        <p className='text-gray-500'>Join them and<span className=' text-slate-200'>learn how to earn crypto!</span></p>
      </div>
      </div>

      <span className=' text-white bg-purple-600 w-[200px] flex justify-center items-center p-2 rounded-md relative bottom-[80px]'>
      <button className=''>Get Started</button>
      <FaArrowRightLong />
      </span>
      </div>
      <Head2/>
      
    </div>
  )
}

export default Head1
