import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { WavyBackground } from './ui/wavy-background';

const ins = [
    {
      id: 1,
      name: 'Elena Briggs',
      designation: 'Vocal Coach',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Marcus Reid',
      designation: 'Guitar Instructor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Piano Teacher',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Drumming Expert',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];

export default function Instructors() {
  return (
    <div className="relative h-screen overflow-hidden">
    {/* Background */}
    <WavyBackground className="absolute  w-full h-full z-0" />
  
    {/* Content */}
    <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
      <div>
        <p className="text-8xl md:text-7xl lg:text-8xl text-white font-bold inter-var">
          Meet Our Instructors 
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var">
        Discover the talented proffesional who will guide your musical Journey
        </p>

        <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={ins} />
    </div>
      </div>
    </div>
  </div>
  
  
      
       
    
  )
}
