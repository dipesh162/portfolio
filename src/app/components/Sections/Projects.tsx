import React from 'react'
import ProjectCard from '../Project/ProjectCard'
import ProjectsData from '../../static/Projects'

function Projects() {
  console.log(ProjectsData)

  return (
    <section id='projects' className='py-10 md:py-20 px-5 md:px-[50px] bg-[#f9f9f9]'>
        <div className="max-w-[1028px] mx-auto px-0 md:px-[62px]">
          <p className='text-[#147efb] text-[17px] font-poppins font-bold mb-[10px] text-center md:text-left'>PROJECTS</p>
          <h3 className='text-[#2d2e32] text-[25px] font-poppins font-bold text-center md:text-left'>Each project is a unique piece of development 🧩</h3>
        
            {ProjectsData?.map((project:any,i:number)=>(
              <ProjectCard
                project={project}
                key={i}
                index={i}
              />
            ))}
        </div>
    </section>
  )
}

export default Projects