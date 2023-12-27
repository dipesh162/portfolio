import Link from "next/link";

export default function Header(){

    return (
        <nav className="bg-white fixed w-full pt-[25px] pr-[40px] pb-[25px] pl-[50px] border-b-[1px] border-[#e8e8e8] z-[1] hidden md:flex max-w-[1280px] mx-auto justify-between" style={{boxShadow: '0 0 10px rgba(0,0,0,.09)'}}>
            <div className="flex justify-between w-full">
                <h2 className="text-[18px] font-extrabold font-poppins text-[#2D2E32]">Dipesh.dev</h2>

                <ul className="flex gap-5 font-[600] text-[17px] text-[#2d2e32] tracking-[0.5px]">
                    <li className="font-poppins font-[600]">
                        <Link href="#hero" style={{transition: 'all .23s'}}>Home</Link>
                    </li>
                    <li className="font-poppins font-[600]">
                        <Link href="#about" style={{transition: 'all .23s'}}>About</Link>
                    </li>
                    <li className="font-poppins font-[600]">
                        <Link href="#projects" style={{transition: 'all .23s'}}>Projects</Link>
                    </li>
                    <li className="font-poppins font-[600]">
                        <Link href="#contact" style={{transition: 'all .23s'}}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}