import React from 'react'


function Card2() {
  return (
    <div className="flex flex-col h-min w-[19em] relative bottom-[1000px] left-[60px]">
      <button className="bg-gray-700 p-1 ml-14 rounded-full my-2 w-min">
        <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
      <div className="bg-black rounded-lg shadow-lg p-4 w-min md:w-fit">
        <div className="relative">
          <img
            src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png" 
            alt="Learner NFT"
            className="rounded-t-lg w-[147px] border-2 p-1 border-slate-700"
          />
          <div className='rounded-full bg-slate-800 opacity-[0.5px] w-fit p-2 flex justify-center relative bottom-[20px] left-[88px]'>
            <img src='https://www.intract.io/assets/lock-icon-2019798d.svg'/>
          </div>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-semibold text-white text-[1.3em]">Intract Certified: Earner NFT</h2>
          <p className="text-gray-600">Your proof of</p>
          <p className="text-gray-600">airdrop expertise</p>
          <button className="mt-4 bg-slate-800 text-slate-500 py-2 px-4 rounded-sm w-[10em]">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card2;