'use client'
import React, { useState } from 'react'

function About() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber:number) => {
    setActiveTab(tabNumber);
  };

  return (
    <section id='about' className='max-w-[107rem] py-14 md:py-20 px-5 md:px-[64px]'>
        <div className="max-w-[1200px] mx-auto px-0 md:px-[62px]">
          <div className='flex flex-col md:grid md:grid-cols-2'>
            <div className='flex justify-center md:justify-normal'>
              <img src={'/images/intro2.jpg'} className='w-full md:w-[90%] rounded-[20px] object-scale-down' alt="" />
            </div>
            <div>
              <p className='text-[#147efb] text-[17px] font-poppins font-bold mb-[10px] text-center mt-5 md:mt-0 md:text-left'>ABOUT ME</p>
              <h3 className='text-[#2d2e32] text-[25px] font-poppins font-bold mb-[20px] text-center md:text-left'>A dedicated Front-end Developer based in Delhi, India 📍</h3>
              <p className='text-[#767676] font-mulish text-[17px] font-[500]'>
                <b>Experienced Frontend Developer | React & Next.js Specialist</b>
                <p>
                  With over 5 years of experience, I specialize in building dynamic, user-friendly web applications using React and Next.js. I played a key role in developing a full-scale ed-tech platform from scratch, transforming complex requirements into intuitive, high-performance solutions. My expertise in front-end development, coupled with a solid understanding of the MERN stack, allows me to deliver cutting-edge features that elevate user experiences. I thrive in fast-paced environments, collaborating effectively with cross-functional teams to ensure smooth, scalable product development. Passionate about innovation, I stay up-to-date with the latest technologies to drive impactful projects forward.
                </p>   
              </p>            
              {/* <div className='mt-8'>
                <div className="tab-buttons flex gap-4">
                  <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'text-[#2D2E32] font-bold' : 'text-[#2D2E32] font-semibold'}>
                    Experience
                  </button>
                  <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'text-[#2D2E32] font-bold' : 'text-[#2D2E32] font-semibold'}>
                    Education
                  </button>
                </div>

                <div className="tab-content">
                  {activeTab === 1 && <div>Content for Tab 1</div>}
                  {activeTab === 2 && <div>Content for Tab 2</div>}
                </div>
              </div> */}
            </div>
          </div>
        </div>
    </section>
  )
}

export default About