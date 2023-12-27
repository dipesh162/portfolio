import Image from 'next/image'

import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
