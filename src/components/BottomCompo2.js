import React from 'react'

function BottomCompo2() {
  return (
    <div className="flex items-center justify-center border-2 border-gray-800 relative left-[990px] bottom-[2290px] bg-gray-900 w-[300px] h-min">
      <div className="max-w-md p-4 bg-gray-800 rounded-lg shadow-lg ">
        <div className="flex justify-start items-center mb-4 text-gray-500 ">
          <span className="text-lg font-semibold">Reward info</span>
          <p className="border-2 border-gray-600 rounded-full w-3 h-5 flex justify-center items-center p-2 ml-1">i</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#f0eeee] mb-2">Free access to paid KOL (crypto earning) communities!</h2>
          <p className="text-gray-500 mb-2">
            Win access to exclusive earning communities of some of the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.
          </p>
          <p className="text-gray-500">
            To win: make sure you've connected your Twitter and Discord accounts – and follow our criteria!
          </p>
        </div>
      </div>
      
    </div>
    
  );
};

export default BottomCompo2;
