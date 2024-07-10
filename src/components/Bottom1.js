import React from 'react'
import SubCard from './SubCard'

function Bottom1() {
  let textImg=[
    {
      t1:'How to plan your',
      t2:'retirement with crypto?',
      img:'https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png',
    },
    {
      t1:'Why are there limited',
      t2:'Bitcoin?',
      img:'https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png',
    },
    {
      t1:'How does Uniswap',
      t2:'actually work?',
      img:'https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png',
    },
    {
      t1:'How to spot crypto',
      t2:'projects to invest in?',
      img:'https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png',
    },
  ]
  return (
    <div className='text-white relative top-[500px] overflow-hidden left-0 bg-black flex flex-col items-center max-h-[700px]'>
      <hr className='border-1 w-full border-slate-600'/>
      <p className='text-2xl font-semibold m-2'>Top Crypto Creators and Projects to Follow</p>
      <p className='text-gray-400 font-semibold mx-2 my-1'>Answers to your crypto doubts, straight from the experts</p>
      <div className='flex gap-7 flex-wrap my-2 mb-3'>
        {
          textImg.map((item,index)=>(
           <SubCard key={index} img={item.img} text1={item.t1} text2={item.t2}/> 
          ))
        }
        
      </div>
      <hr className='border-1 w-full border-slate-600 my-3'/>
    </div>
  )
}

export default Bottom1
