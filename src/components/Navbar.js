import React ,{useState} from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import TabComponent from './TabComponent';

function Navbar() {
  let Links =[
    {name:"Compas",link:"/"},
    {name:"Explore",link:"/"},
    {name:"Academy",link:"/"},
    {name:"NFTs",link:"/"},
    {name:"For Projects",link:"/"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='w-full fixed top-0 left-0 text-slate-600 z-20'>
    <div className='md:flex items-center justify-between bg-[#000000] py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    '>
      <img src='https://www.intract.io/logo/intract_text.svg'></img>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <a href={link.link} className='text-gray-200 hover:text-gray-400 duration-500'>{link.name}</a>
          </li>
        ))
      }
    </ul>

    <div className='flex content-between max-sm:text-sm'>
    <span className='flex justify-center items-center text-gray-600 text-[17px]  '><FaMagnifyingGlass /><input type='text' placeholder='Search for ecosystems,trending quests etc' className='placeholder-transparent md:placeholder-gray-500 bg-black p-3 md:w-[400px] rounded-xl'></input></span>
      <span className='border-2 border-orange-500 rounded-full w-[42.5px] h-[42.5px] flex justify-center items-center mx-2'><img src='https://www.intract.io/assets/broadcast_or-04af786c.svg'/></span>
      <button className='bg-white text-black w-[110px] font-bold rounded-sm mx-1 leading-normal'>Sing in</button>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-xl text-gray-400 absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>

    </div>

    
    </div>
    <TabComponent/>
  </div>
)
}

export default Navbar
