import React from 'react';

function SubCard(props) {
  return (
    <div className='w-[281px] h-[418px] border-gray-500 border-1 my-2 '>
      <img src={props.img} className='absolute z-0 rounded-lg'/>
      <img src="https://www.intract.io/assets/reel-video-ee824737.svg" className='absolute z-10 border-1 rounded-full bg-gray-700 p-2'/>
      <p className='absolute z-10 text-white font-semibold text-2xl top-[82%] mx-2'>{props.text1}</p>
      <p className='absolute z-10 text-white font-semibold text-2xl top-[85%] m-2'>{props.text2}</p>

    </div>
  )
}

export default SubCard
