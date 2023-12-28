'use client'

import { FiGithub } from "react-icons/fi";
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ProjectCard({project,index}:{project:any,index:number}){


    const cardsAlignment = (index+1)%2 ==0 ? 'left' : 'right'
    console.log(index)
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const imagesLength = project.images.length

    useEffect(()=>{
        let timer = setTimeout(()=>{
            // setActiveImageIndex(activeImageIndex+1)
            setActiveImageIndex(activeImageIndex+1 == imagesLength ? 0 : activeImageIndex+1)
        },4000)

        return ()=>{
            clearTimeout(timer)
        }
    },[activeImageIndex])

    return(
        <div className="mt-12 p-[20px] text-[16px] rounded-[16px] flex flex-col md:flex-row gap-5" style={{boxShadow:'0 0 10px rgba(0,0,0,.1)'}}>
            <div className={`w-full order-${cardsAlignment == 'right'? 1 : 2} md:w-[60%] flex justify-center`}>
                <div className=" h-[400px] w-full relative">
                    {project.images.map((proj:any,i:number)=>(
                        <Image
                            alt="Project Image"
                            fill={true}
                            className={`${activeImageIndex == i ? 'block': 'hidden'} rounded-[16px] `}
                            src={`/images/Projects/${project.title}/${i+1}.jpg`}
                        />  
                    ))
                    }
                </div>
            </div>
            <div className={`w-full order-${cardsAlignment == 'left'? 1 : 2} md:w-[40%] text-center flex flex-col justify-center gap-5`}>
                <h2 className="uppercase text-[16px] text-[#2d2e32] font-bold font-poppins">{project.title}</h2>
                <p className="text-[#767676] font-[400] font-poppins">{project.description}</p>

                <div className="flex flex-wrap justify-center gap-3">
                    {project.skills.map((skill:any,i:number)=>(
                        <div className="w-fit p-2 text-[#2d2e32] font-semibold" key={i} style={{boxShadow:'0 0 10px rgba(0,0,0,.1)'}}>
                            {skill}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-6">
                    <a href={project.githubLink} className="hover:text-[#147efb] gap-2 flex cursor-pointer">
                        <h3>Code</h3>
                        <FiGithub size={24}/>
                    </a>
                    <a href={project.hostedUrl} className="hover:text-[#147efb] gap-2 flex cursor-pointer">
                        <h3>Live Demo</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}