import React from 'react'

function Contact() {
  return (
    <section id='contact' className='py-10 md:py-20 px-5 md:px-[50px]'>
        <div className="max-w-[1028px] mx-auto px-0 md:px-[62px]">
          <p className='text-[#147efb] text-[17px] font-poppins font-bold mb-[10px] text-center md:text-left'>CONTACT</p>
          <h3 className='text-[#2d2e32] text-[25px] font-poppins font-bold text-center md:text-left'>Let's connect and create something amazing together! 👇</h3>
      
          <div className='flex flex-col gap-[3rem] md:gap-[5rem] mt-[44px] md:flex-row'>
            <div className='flex flex-col md:flex-row gap-[1rem] items-center'>
              <div className='rounded-[50%] justify-center items-center bg-white text-[#147efb] flex w-[50px] h-[50px]' style={{boxShadow:'0 0 10px rgba(0,0,0,.1)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
              </div>
              <div className='flex flex-col gap-[2px] items-center md:items-baseline'>
                <h3 className='text-[#2d2e32] font-bold'>Location</h3>
                <p className='text-[#767676] hover:text-[#147efb] cursor-pointer font-poppins'>New Delhi, India</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[1rem] items-center'>
              <div className='rounded-[50%] justify-center items-center bg-white text-[#147efb] flex w-[50px] h-[50px]' style={{boxShadow:'0 0 10px rgba(0,0,0,.1)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
              </div>
              <div className='flex flex-col gap-[2px] items-center md:items-baseline'>
                <h3 className='text-[#2d2e32] font-bold'>Mail</h3>
                <a href="mailto:dipeshsingh162@gmail.com"><p className='text-[#767676] hover:text-[#147efb] font-poppins'>dipeshsingh162@gmail.com</p></a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact