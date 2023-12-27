'use client'

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(){

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav className="bg-white fixed w-full pt-[25px] pr-[40px] pb-[25px] pl-[50px] border-b-[1px] border-[#e8e8e8] z-[1] flex justify-center" style={{boxShadow: '0 0 10px rgba(0,0,0,.09)'}}>
            <div className="max-w-[1280px] flex justify-between w-full">
                <Link href="#hero"><h2 className="text-[18px] font-extrabold font-poppins text-[#2D2E32]">Dipesh.dev</h2></Link>

                <ul className="hidden md:flex gap-5 font-[600] text-[17px] text-[#2d2e32] tracking-[0.5px]">
                    <li className="font-poppins font-[600]">
                        <Link href="#hero">Home</Link>
                    </li>
                    <li className="font-poppins font-[600]">
                        <Link href="#about">About</Link>
                    </li>
                    <li className="font-poppins font-[600]">
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li className="font-poppins font-[600]">
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>

                <GiHamburgerMenu className="block md:hidden cursor-pointer" size={25} onClick={()=> setShowMobileMenu(!showMobileMenu)} />

                { showMobileMenu &&
                    <div className="ease-in-out duration-300 items-center bg-white flex h-[100vh] justify-center fixed text-center left-0 top-0 w-[100vw] z-[100]" style={{transition: 'all .3s ease-in-out'}}>
                        <span onClick={()=>setShowMobileMenu((prev)=> !prev)} className='cursor-pointer text-[3.3rem] absolute right-[2rem] top-[2rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-x">
                                <path d="M18 6l-12 12"></path>
                                <path d="M6 6l12 12"></path>
                            </svg>
                        </span>
                        <ul className="flex flex-col justify-center gap-10">
                            <li>
                                <a onClick={()=>setShowMobileMenu((prev)=> !prev )} className="text-[23px] font-poppins text-[#000000]" href="#hero">Home</a>
                            </li>
                            <li>
                                <a onClick={()=>setShowMobileMenu((prev)=> !prev )} className="text-[23px] font-poppins text-[#000000]" href="#about">About</a>
                            </li>
                            <li>
                                <a onClick={()=>setShowMobileMenu((prev)=> !prev )} className="text-[23px] font-poppins text-[#000000]" href="#projects">Projects</a>
                            </li>
                            <li>
                                <a onClick={()=>setShowMobileMenu((prev)=> !prev )} className="text-[23px] font-poppins text-[#000000]" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}