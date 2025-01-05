import React from 'react'
import Link from 'next/link'
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from './ui/moving-border';
export default function Hero() {
  return (
    <div className='min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 relative z-10 w-full text-center mt-20'>
      <h1 className='mt-24 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  to-neutral-400' >Master the Art of Music </h1>
      <p className='mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto '>Drive into our comprehensive music courses and transform your musical journey today.  wheather you're a beginer or looking to refine your skills , join us to unlock your true potential </p>
      </div>
      <div className="mt-8">
      <Link href='/courses'>

      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
        </Button>
        </Link>
      </div>
    </div>

  )
}
