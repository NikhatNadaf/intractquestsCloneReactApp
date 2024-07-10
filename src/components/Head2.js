import React from 'react'
import leftImg from 'C:/Users/Admin/Desktop/HomeAssignment/intract-quests/src/assets/startLIne (8).png';
import rightImg from 'C:/Users/Admin/Desktop/HomeAssignment/intract-quests/src/assets/asset 22.png';
import ComboBox from './ComboBox';
import Card from './Card';
import rightMostImg from 'C:/Users/Admin/Desktop/HomeAssignment/intract-quests/src/assets/head2LeftImg.png';
import ComboBox2 from './ComboBox2';
import leftMostImg from 'C:/Users/Admin/Desktop/HomeAssignment/intract-quests/src/assets/asset 24.png';
import Card2 from './Card2';
import lastImg from 'C:/Users/Admin/Desktop/HomeAssignment/intract-quests/src/assets/asset 25.png';
import connectingLine from 'C:/Users/Admin/Desktop/HomeAssignment/intract-quests/src/assets/asset 19.png';
import BottomCompo1 from './BottomCompo1';
import BottomCompo2 from './BottomCompo2';
function Head2() {
  return (
    <div className="bg-[#000000] text-white w-full relative top-[600px] overflow-hidden max-h-[2200px]">
      <img src={leftImg} className='relative top-[75px] '/>
      <ComboBox/>
      <img src={rightImg} className='relative left-[300px] bottom-[30px]'/>
      <Card/>
      <img src={rightMostImg} className='relative left-[730px] bottom-[540px]'/>
      <ComboBox2/>
      <img src={leftMostImg} className='relative bottom-[800px] left-[220px] z-10'/>
      <Card2/>
      <img src={lastImg} className='relative bottom-[1300px] right-[200px]'/>
      <BottomCompo1 targetDate='09/07/2024'/>
      <img src={connectingLine} className='relative left-[900px] bottom-[1800px]'/>
      <BottomCompo2/>
      <hr className='text-white'/>
    </div>
  )
}

export default Head2;
