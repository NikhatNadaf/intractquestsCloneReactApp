import React,{useState} from 'react';
import OptionComponent from './OptionComponent';
const ComboBox = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = [{
    no:'1',
    head:'But what is crypto and...',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
    task:'8',
  },
  {
    no:'2',
    head:'Setting up your own we..',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg',
    task:'8',
  },
  {
    no:'3',
    head:'What the heck is a..',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg',
    task:'8',
  },
  {
    no:'4',
    head:'Swapping and bridging...',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg',
    task:'8',
  },
  {
    no:'5',
    head:'NFTs and why they’re...;)',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg',
    task:'8',
  },
  {
    no:'6',
    head:'Doing quests and winning...',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg',
    task:'8',
  }
];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative left-[90px] z-10">
      <div
        onClick={toggleOpen}
        className="flex items-center cursor-pointer bg-[#060505] p-2 border-slate-600 border-2 rounded-2xl w-[450px]"
      >
        <img src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png" alt="heading" className="w-[160px] h-[170px] border p-2 rounded-md m-3 " />
        <div className='absolute text-white font-bold left-[58px] top-[120px] border-1 rounded-lg bg-black bg-opacity-30 p-2'>6 Quests</div>
        <span className='flex flex-col gap-2  p-2'>
          <p className='text-2xl font-bold text-white'>Basics of Crypto</p>
          <p className='text-[18px] font-semibold text-slate-500'>The safest and easiest place to start</p>
          <p className='text-[18px] font-semibold text-slate-500'>your crypto journey!</p>
          <hr className='border-dashed border-3 text-opacity-10'/>
          <div className='flex justify-center items-center border-1 w-[100px] p-1 rounded-3xl bg-slate-200 bg-opacity-30'>
            <img src='https://www.intract.io/assets/xp-icon-aacd204a.svg' className='h-4'/>
            <span className='font-bold text-white'>1490 XPs</span>
          </div>
        </span>
        <span className="ml-auto text-slate-600 text-2xl w-12">
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full mt-1 w-[455px] h-[350px] overflow-y-auto border  bg-black">
          <ul
            value={selectedValue}
            onChange={handleChange}
            className="w-full p-2"
            size={options.length}
          >
            {options.map((option, index) => (
          <li key={index}  className='w-full my-2'>
            <OptionComponent img={option.img} no={option.no} head={option.head} tas={option.task}/>
          </li>
        ))}
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default ComboBox;
