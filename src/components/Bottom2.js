import React from 'react'
import TabComponent from './TabComponent';
function Bottom2() {
  return (
    <div className='text-white relative top-[500px] overflow-hidden left-0 bg-black flex flex-col items-center max-h-[700px]'>
      <p className='text-2xl font-semibold m-2'>Crypto Dictionary</p>
      <p className='text-gray-400 font-semibold mx-2 mb-4'>Your one-stop to catch up on all crypto terms</p>
      <div className='sticky'>
        <img src='https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg' className='relative rounded-xl'/>
      <div className='absolute z-10 top-[86%] right-[70%] text-opacity-25  text-white'>
      <p className='text-3xl font-semibold'>Web3 + Degen Glossary</p>
      <p className='text-lg'>Your own crypto dictionary</p>
      </div>
      </div>
      
      <hr className='w-full border-1 border-gray-700 relative mt-20'/>
    </div>
  )
}

export default Bottom2;
