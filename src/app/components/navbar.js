// write basic code for a react navbar component using tailwind

import React from 'react';
import Calendlylink from '../buttons/callbutton';


export default function Navbar() {

    return (
        <div className="bg-white shadw-lg h-24 hidden md:flex md:justify-evenly">

            {/* logo */ }
            <a href="" className=" flex-shrink-0 flex items-center  lg:mr-10 justify-center px-4 lg:px-6 xl:px-8">
                <h1 className='text-2xl font-bold'>PG-AGI</h1>
            </a>

            {/* navbar links */}
            <nav className="header-links contents font-semibold text-base lg:text-lg">
                <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
                    <li className="p-3 xl:p-6 active">
                        <a href="">
                            <span>Our Projects</span>
                        </a>
                    </li>
                    <li className="p-3 xl:p-6">
                        <a href="">
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li className="p-3 xl:p-6">
                        <a href="">
                            <span>Industries</span>
                        </a>
                    </li>
                    <li className="p-3 xl:p-6">
                        <a href="">
                            <span>About us</span>
                        </a>
                    </li>

                    <li className="p-3 xl:p-6">
                        <a href="">
                            <span>AI Resources</span>
                        </a>
                    </li>

                </ul>
            </nav>

            {/* search bar and button */}
            <div className="  flex items-center gap-5 px-4 lg:px-6 xl:px-8">

                <form action="" class="relative mx-auto w-max">
                    <input type="search"
                        class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-primary focus:pl-16 focus:pr-4" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-primary peer-focus:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </form>


                
                    <Calendlylink/>
                


            </div>
        </div>
    );
}