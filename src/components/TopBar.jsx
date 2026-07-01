import React from 'react';
import { FiBell, FiMenu, FiSearch } from 'react-icons/fi';

const TopBar = () => { 
    return ( 
    <header className="flex items-center justify-between border-b border-slate-600 bg-[linear-gradient(135deg,#0F172A_0%,#1E293B_50%,#0F766E_100%)] -mt-6 -mx-6 px-5 py-5 shadow-sm">
    
   { /* <div className='md:hidden flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold text-green-600'>NombaFlow</h1>

     <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='text-3xl'> {menuOpen ? <FiX /> : <FiMenu />} </button>
    </div> */}

    {/* Left Side */}
     <div>
        <h1 className="text-lg font-semibold text-slate-50">Good Morning, Aisha 👋.</h1>
        <p className="text-sm text-slate-400">Manage your payments and monitor transactions in real time.</p>
     </div>

     {/* Right Side */}
     <div className="flex items-center gap-5">

        <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-3 py-2">
            <FiSearch className="text-slate-500" />
            <input 
            type='text'
            placeholder='Search...'
            className='bg-transparent outline-none ml-2' />
        </div>

        <button className='relative text-2xl text-slate-50 hover:text-green-600'>
            <FiBell />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>2</span>
        </button>
     
     <div className='flex items-center gap-3'>
     <div className="h-11 w-11 bg-green-600 rounded-full text-white items-center justify-center font-bold flex">
        AI
        </div>

        <div className='hidden md:block'>
            <h4 className='font-semibold text-slate-50'>Aisha</h4>

            <p className='text-sm text-slate-100'>Merchant</p>
        </div>
        </div>
        </div>
        
    </header>
    );
};

export default TopBar;