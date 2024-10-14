import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="bg-[#2d2e32] py-[2rem] px-0 w-full text-[#fff]">
            <div className="gap-[14px] mx-auto max-w-[1028px] flex-col md:flex-row flex px-[50px] justify-between">
                <h3 className="text-center text-[1rem] font-bold justify-center font-poppins tracking-[0.5px]">
                    Copyright © 2024. All rights are reserved
                </h3>
                <div className="flex gap-3 justify-center">
                    <Link href='https://www.linkedin.com/in/dipesh162/'>
                        <LiaLinkedinIn size={32} />
                    </Link>
                    <Link href='https://github.com/dipesh162'>
                        <FaGithub size={30} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}