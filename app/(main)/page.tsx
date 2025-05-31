"use client"
import Image from 'next/image';
import AboutSection from './components/about/About.Section';
import HeroSection from './components/home/Home.Section';
import ServicesSection from './components/services/Services.Section';
import layer from "../../public/assets/layer1.svg"
import layer2 from "../../public/assets/layer2.svg"
import ProjectSection from './components/projects/Project.Section';
import WorkExperience from './components/WorkExperience/Work.Section';
import ContactSection from './components/contact/Contact.Section';

import { useQuery } from '@tanstack/react-query';


export default function HomePage() {
  return (
    <div className='w-full relative overflow-hidden bg-indego-dark'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      
      {/* Fixed: Added relative container for the first image */}
      <div className="relative">
        <Image 
          src={layer} 
          className='w-60 absolute hidden md:block left-[-100px] opacity-50' 
          alt='layer'
        />
      </div>
      
      <ProjectSection/>
      <WorkExperience/>
      
      {/* Fixed: Added relative container for the second image */}
      <div className="relative">
        <Image 
          src={layer2} 
          className='w-60 absolute hidden md:block right-[-100px] opacity-50' 
          alt='layer' 
        />
      </div>
      
      <ContactSection/>
    </div>
  )
}