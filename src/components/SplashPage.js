import React, { useEffect, useState } from 'react';
import splashImg from 'C:/Users/Admin/Desktop/HomeAssignment/intract-quests/src/assets/splashImg.jpeg';
const SplashPage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // Duration of the splash screen (4 seconds)
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img
        src={splashImg}
        alt="Splash"
        className="animate-quick-zoom h-[300px] w-[300px]"
      />
    </div>
  );
};

export default SplashPage;
