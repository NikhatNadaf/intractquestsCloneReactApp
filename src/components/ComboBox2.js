import React,{useState} from 'react';
import OptionComponent from './OptionComponent';
const ComboBox2 = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = [{
    no:'1',
    head:'What are airdrops, and ...',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg',
    task:'7',
  },
  {
    no:'2',
    head:'Types of airdrops',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg',
    task:'10',
  },
  {
    no:'3',
    head:'How to earn huge $$$..',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png',
    task:'11',
  },
  {
    no:'4',
    head:'Things to keep in mind!',
    img:'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg',
    task:'7',
  },
  
];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative left-[500px] bottom-[600px]">
      <div
        onClick={toggleOpen}
        className="flex items-center cursor-pointer bg-[#060505] p-2 border-slate-600 border-2 rounded-2xl w-[450px]"
      >
        <img src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png" alt="heading" className="w-[160px] h-[170px] border p-2 rounded-md m-3 " />
        <div className='absolute text-white font-bold left-[58px] top-[120px] border-1 rounded-lg bg-black bg-opacity-30 p-2'>4 Quests</div>
        <span className='flex flex-col gap-2  p-2'>
          <p className='text-2xl font-bold text-white'>Introduction to Airdrops
          </p>
          <p className='text-[18px] font-semibold text-slate-500'>Your best bet to make it big in crypto!</p>
          <hr className='border-dashed border-3 text-opacity-10'/>
          <div className='flex justify-center items-center border-1 w-[100px] p-1 rounded-3xl bg-slate-200 bg-opacity-30'>
            <img src='https://www.intract.io/assets/xp-icon-aacd204a.svg' className='h-4'/>
            <span className='font-bold text-white'>1440 XPs</span>
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
            <OptionComponent img={option.img} no={option.no} head={option.head} task={option.task}/>
          </li>
        ))}
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default ComboBox2;
