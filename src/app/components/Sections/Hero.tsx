import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className='bg-[#f9f9f9] max-w-[107rem] py-0 px-[64px]'> 
        <div className='flex'>
    <div className=''>
      <div className=''>
        <h1 className='font-caros text-[55px] leading-[1.2] font-bold relative'>Front-End React Developer 
          <img src='/images/wave.png' width={60} className='absolute right-[235px] top-[65px]'/>
        </h1>
      </div>

      <h4 className='text-[18px] text-[#555] font-mulish font-medium leading-[1.6]'>Hi, I'm Dipesh, a passionate full-stack MERN developer based in New Delhi, India, with expertise primarily in front-end development.</h4>

      <div className="flex gap-4">
        <Link href='https://www.linkedin.com/in/dipesh162/'>
            <FaLinkedin size={32}/>
        </Link>
        <Link href='https://github.com/dipesh162'>
            <FaGithub size={32}/>
        </Link>
      </div>
    </div>

    <div className={`animate-morph transition-all duration-1000 ease-in-out animate-morph w-[35rem] h-[35rem] animate-[morph] relative bg-[50%] bg-cover bg-no-repeat bg-[url('/images/random.jpg')] border-[3px] border-[#2d2e32] rounded-[60% 40% 30% 70%/60% 30% 70% 40%]`}>
      
{/* // animation: morph 8s ease-in-out infinite;
// transition: all 1s ease-in-out; */}


      {/* <img src="/images/random.jpg" width={100} alt="" /> */}
    </div>
        </div>

        <div>
            Tech Stack | 
            <h3>https://skillicons.dev/</h3>
        </div>
    </section>
  )
}

export default Hero