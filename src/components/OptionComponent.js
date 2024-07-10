import React from 'react'

function OptionComponent(props) {
  return (
    <div className="flex items-center bg-slate-950 text-white p-4 rounded-lg shadow-md h-[130px] ">
      <img
        src={props.img}
        alt="Avatar"
        className="w-[90px] h-[80px] rounded-xl"
      />
      <div className="ml-4 flex-grow">
        <h2 className="text-lg font-semibold">#0{props.no}:{props.head}</h2>
        <hr className='border-dashed text-bg-slate-500 m-3'/>
        <div className="bg-gray-400 h-2 rounded-full mx-2">
          <div className="bg-slate-700 h-full rounded-full w-[100%]"></div>
        </div>
        <p className="mt-2 text-gray-800">{props.task} Tasks</p>
      </div>
      <button className="bg-gray-700 p-1 rounded-full">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  );
}

export default OptionComponent
