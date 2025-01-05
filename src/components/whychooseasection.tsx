"use client";
import { StickyScroll } from './ui/sticky-scroll-reveal';
import React from 'react'
import Image from 'next/image';

const content = [
    {
      title: "Learn with Experts",
      description:
        "Join our music school and learn from experienced professionals who have mastered their craft. From vocals to instruments, our teachers are dedicated to helping you achieve your musical dreams.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
          Learn with Experts
        </div>
      ),
    },
    {
      title: "Personalized Lessons",
      description:
        "Our music school offers one-on-one and group lessons tailored to your skill level and musical goals. Whether you're a beginner or an advanced student, we have a program just for you.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
        
        </div>
      ),
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Experience learning in a fully equipped music studio with the latest instruments and technology. Practice and perform in an environment that inspires creativity and passion for music.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
          State-of-the-Art Facilities
        </div>
      ),
    },
    {
      title: "Learn with Experts",
      description:
        "Join our music school and learn from experienced professionals who have mastered their craft. From vocals to instruments, our teachers are dedicated to helping you achieve your musical dreams.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
          Learn with Experts
        </div>
      ),
    },
    {
      title: "Learn with Experts",
      description:
        "Join our music school and learn from experienced professionals who have mastered their craft. From vocals to instruments, our teachers are dedicated to helping you achieve your musical dreams.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
          Learn with Experts
        </div>
      ),
    },
  ];
  

export default function Whychooseasection() {
  return (
    <div className='h-screen' >
    <StickyScroll content={content}  />
  </div>
  )
}
