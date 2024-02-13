// write basic code for a react navbar component using tailwind

import React from 'react';
import Calendlylink from '../buttons/callbutton';
import Image from 'next/image';
// import {logo} from '../../../public/images/pgagi.png'


export default function Navbar() {

    return (
        <div className="bg-white border-b-2 h-24 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24">

            {/* logo */ }
            <div className='flex items-center justify-center'>
      <div className='flex-shrink-0'>
        <Image src="/images/pgagi.png" alt="Company logo" className="h-14 object-contain" width={60} height={60}/>
      </div>
      
      <div className='text-3xl font-bold ml-2'>PG-AGI</div>
    </div>

            {/* navbar links */}
            <div className="header-links contents font-semibold text-base lg:text-base ">
                <ul className="flex items-center ml-4  lg:ml-8 xl:ml-12 lg:mr-8">
                    <li className="p-2.5 xl:p-6 text-center">
                        <a href="">
                            <span>Our Projects</span>
                        </a>
                    </li>
                    <li className="p-2.5 xl:p-6">
                        <a href="">
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li className="p-2.5 xl:p-6">
                        <a href="">
                            <span>Industries</span>
                        </a>
                    </li>
                    <li className="p-2.5 xl:p-6 text-center">
                        <a href="">
                            <span>About Us</span>
                        </a>
                    </li>

                    <li className="p-2.5 xl:p-6 text-center">
                        <a href="">
                            <span>AI Resources</span>
                        </a>
                    </li>

                </ul>
            </div>

            {/* search bar and button */}
            <div className=" md: lg:-ml-12 flex items-center gap-5 ">

                <form action="" class="relative mx-auto w-max">
                    <input type="search"
                        class=" peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-primary focus:pl-16 focus:pr-4" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-0.5 absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-primary peer-focus:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </form>


                
                    <Calendlylink/>
                


            </div>
        </div>
    );
}