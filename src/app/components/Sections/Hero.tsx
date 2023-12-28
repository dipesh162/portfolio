import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className='bg-[#f9f9f9] py-10 md:py-20 px-5 md:px-[50px]'> 
        <div className="max-w-[1028px] mx-auto">
          <div className='flex-col-reverse md:flex-row flex md:justify-center gap-12'>
            <div className='md:max-w-[50%]'>
              <div className=''>
                <h1 className='font-caros text-center md:text-left text-[36px] md:text-[55px] leading-[1.2] font-bold relative mb-3'>Front-End React <span className='flex text-center justify-center md:justify-start md:text-left'>Developer 
                <img src='/images/wave.png' className='w-[40px] md:w-[60px] ml-2.5 md:ml-5 static right-[235px] top-[65px]'/>
                </span>
                </h1>
              </div>

              <h4 className='text-[18px] text-center md:text-left text-[#555] font-mulish font-medium leading-[1.6]'>Hi, I'm Dipesh. A passionate full-stack MERN developer with expertise primarily in front-end development based in New Delhi, India.</h4>

              <div className="flex gap-4 my-7 md:my-10 justify-center items-center md:justify-normal">
                <Link href='https://www.linkedin.com/in/dipesh162/'>
                    <FaLinkedin size={32}/>
                </Link>
                <Link href='https://github.com/dipesh162'>
                    <FaGithub size={32}/>
                </Link>
                <a className='bg-[#767676] ml-0 md:ml-3 text-white rounded-[10px] py-[8px] px-[16px]' href="./Dipesh_Singh_Resume.pdf" download>Download Resume</a>
              </div>
            </div>
            {/* animate-morph */}

            <div style={{borderRadius: '37% 63% 56% 44% / 24% 31% 69% 76%'}} 
            className={`
              rounded-['37% 63% 56% 44% / 24% 31% 69% 76%'] transition-all duration-1000 ease-in-out w-[250px] mx-auto md:mx-0 h-[250px] md:w-[300px] md:h-[300px] animate-[morph] relative bg-[50%] bg-cover bg-no-repeat bg-[url('/images/random.jpg')] border-[3px] border-[#2d2e32] rounded-[60% 40% 30% 70%/60% 30% 70% 40%]
            `}>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-center gap-5 md:gap-8 my-5 items-center'>
            <p className='text-[#2d2e32] mx-auto md:mx-0 border-b-[2px] md:border-r-[2px] md:border-b-0 border-[rgba(45,46,50,.5)] h-fit font-semibold pb-3 md:pr-4 md:pb-0 w-fit'>Tech Stack</p>
            <ul className='flex gap-4 flex-wrap justify-center'>
              <li className='cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-4'>
                <img src="https://skillicons.dev/icons?i=html,css"></img>
              </li>
              <li className='cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-4'>
                <img src="https://skillicons.dev/icons?i=tailwind,materialui"></img>
              </li>
              <li className='cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-4'>
                <img src="https://skillicons.dev/icons?i=javascript,typescript"></img>
              </li>
              <li className='cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-4'>
                <img src="https://skillicons.dev/icons?i=react,next"></img>
              </li>
              <li className='cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-4'>
                <img src="https://skillicons.dev/icons?i=mongodb,nodejs"></img>
              </li>
            </ul>
          </div>
        </div>


    </section>
  )
}

export default Hero