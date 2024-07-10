import React from 'react';

const TabComponent = () => {
  return (
    <div className="flex justify-center space-x-4 bg-gray-800 rounded-full fixed top-[80%] left-[40%] z-20 w-[300px] ">
      <button className="bg-gray-500 text-white  rounded-full w-full p-2 ">
        Essentials
      </button>
      <button className="bg-gray-800 text-white w-full rounded-r-full hover:rounded-full hover:bg-gray-700 p-2 ">
        Alpha Hub
      </button>
    </div>
  );
};

export default TabComponent;