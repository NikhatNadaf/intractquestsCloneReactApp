import React, { useState, useEffect } from "react";

function BottomCompo1({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-around relative bottom-[1460px] bg-slate-1000">
      <div className="flex flex-col items-center justify-center  text-[#ccc8c8]">
      <div className="text-center border-2 rounded-sm border-gray-600  w-[400px]  ">
        <div className="text-2xl mb-4 text-gray-500">
          Reward unlocks in
          <hr className="border-dashed m-2 border-gray-500" />
        </div>

        <div className="flex space-x-3 justify-center border-2 m-3 rounded-sm border-gray-700 ">
          {["Days", "Hrs", "Mins", "Sec"].map((label, idx) => (
            <div key={idx} className="flex flex-col items-center my-1">
              <div className="text-4xl">
                {Object.values(timeLeft)[idx] || "00"}
              </div>
              <div>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 bg-gray-800 p-4 rounded-lg border-2 w-[400px] border-gray-500">
        <div className="text-center">
          <img src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"></img>

          <div className="mt-4 text-gray-400">
            <span className="flex justify-between">
              <p>Exclusive Community</p>
              <div className="flex">
                <img src="https://www.intract.io/assets/discord-50baa5cf.svg" />
                <p className="ml-1">Earndrop</p>
              </div>
            </span>
            <hr className="border-dashed m-2 border-gray-500" />
            <span className="flex justify-between m-1">
              <p>Complete all Essential quests</p>
              <button className="bg-gray-800 p-1 rounded-full">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </span>

            <span className="flex justify-between m-1">
              <p>Complete at least 1 Alpha Hub quest today</p>
              <button className="bg-gray-800 p-1 rounded-full">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </span>
            <button className="bg-gray-600 text-gray-400 font-bold py-2 px-4 rounded w-full">
              Claim Now 
            </button>
        
          </div>
        </div>
      </div>
    </div>

    
    </div>
  );
}

export default BottomCompo1;
