import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillSpotify } from "react-icons/ai";
function Footer() {
  return (
    <footer className="bg-black text-white p-8 relative top-[500px] z-20">
      <div className="max-w-7xl mx-auto flex justify-between flex-wrap">
        <div>
          <h2 className="text-xl font-bold">intract.</h2>
          <p className="mt-2 text-slate-400">We are your personal guide for exploring </p>
          <p className="mt-2 text-slate-400">web3 projects & earning 100x rewards</p>
        </div>
        <div>
          <h3 className="font-bold">INTRACT</h3>
          <ul className="mt-2 space-y-2 text-slate-400">
            <li>Explore Quests</li>
            <li>Communities</li>
            <li>Alpha Hub</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">EARN</h3>
          <ul className="mt-2 space-y-1 text-slate-400">
            <li>Refer & Earn</li>
            <li>Leaderboard</li>
            <li>Achievements</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">ABOUT</h3>
          <ul className="mt-2 space-y-1 text-slate-400">
            <li>Product Roadmap</li>
            <li>Affiliate Program</li>
            <li>Sign up Program</li>
            <li>Growth Community</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">SUPPORT</h3>
          <ul className="mt-2 space-y-2 text-slate-400">
            <li>Help Center</li>
            <li>Create your quest</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Community Guidelines</li>
          </ul>
        </div>
      </div>
      <hr className='my-3 border-gray-700'/>
      <div className="mt-8 text-sm text-gray-400">
        <p>
          <strong>Disclaimer:</strong> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
        </p>
        <hr className='my-7 border-gray-700'/>
      </div>
      
      <div className='flex justify-between items-center'>
      <p className="mt-4">CREATED BY INTRACT</p>
      <div className='flex w-[100px] justify-between text-xl'>
        <span><TiSocialTwitter /></span>
        <span><FaDiscord /></span>
        <span><FaTelegramPlane /></span>
        <span><AiFillSpotify /></span>
      </div>
      </div>
      
    </footer>
  );
}

export default Footer
