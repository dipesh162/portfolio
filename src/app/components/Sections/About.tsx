'use client'
import React, { useState } from 'react'

function About() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber:number) => {
    setActiveTab(tabNumber);
  };

  return (
    <section id='about' className='max-w-[107rem] py-14 md:py-20 px-5 md:px-[64px]'>
        <div className='flex flex-col md:grid md:grid-cols-2'>
          <div className='flex justify-center'>
            <img src={'/images/intro.jpg'} className='h-[300px] w-[90%] md:w-[90%] rounded-[20px]' alt="" />
          </div>
          <div>
            <p className='text-[#147efb] text-[17px] font-poppins font-bold mb-[10px] text-center mt-5 md:mt-0 md:text-left'>ABOUT ME</p>
            <h3 className='text-[#2d2e32] text-[25px] font-poppins font-bold mb-[20px] text-center md:text-left'>A dedicated Front-end Developer based in Delhi, India 📍</h3>
            <p className='text-[#767676] font-mulish text-[17px] font-[500]'>
              I am a seasoned React/Next.js developer with over <b>3.3 years</b> of dedicated experience in crafting an ed-tech platform from scratch. My expertise lies in front-end development within the <b>MERN stack</b>, where I have consistently demonstrated a passion for creating seamless <b>UI/UX</b>.
              Throughout my career,I have a proven track record of translating complex design requirements into elegant and functional <b>UI/UX's</b>. My commitment to staying abreast of the latest technologies and trends in web development ensures that I bring cutting-edge solutions to the table.
              My proficiency in React and Next.js is complemented by a solid understanding of back-end technologies, enabling me to collaborate effectively within cross-functional teams.
              As a front-end specialist, I am poised to bring my technical skills and creative problem-solving abilities to future projects, contributing to the continued success of innovative and impactful educational technology initiatives.
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

    </section>
  )
}

export default About