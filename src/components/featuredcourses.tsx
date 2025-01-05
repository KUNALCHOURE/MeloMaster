'use client'
import React from 'react'
import coursedata from "../data/music_course.json"
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
import Link from 'next/link';
import { div, p } from 'framer-motion/client';

interface Course{
    id:number,
    title:string,
    slug:string,
    description:string,
    price:number,
    instructor: string,
    isFeatured:boolean
  }

export default function Featuredcourses() {
    
const featuredcourse=coursedata.courses.filter((course:Course)=>course.isFeatured)


  return (
    <div className='py-12 bg-gray-900'>
           <div><h2 className='text-green-700 text-center'>FEATURED COURSES</h2>
         
               <p className='text-5xl ptext-white text-center mt-4 font-bold'  >Learn with the Best</p>
               </div>
               <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
  {featuredcourse.map((course: Course) => (
    <div
      key={course.id}
      className="flex justify-center"
    >
      <BackgroundGradient
        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
      >
        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
          <p className="text-lg sm:tx-xl mb-2 mt-4 text-slate-200">{course.title}</p>
          <p className="text-sm text-slate-500 mt-2 line-clamp-3">{course.description}</p>
          <Link href={`/courses/${course.slug}`} className="mt-2">
            Learn more
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  ))}
</div>


           <div className='text-center mt-24'>
              <Link href={"/courses"} className='mt-4 border rounded-md p-4 bg-slate-200 text-black text-center '>
                 View all courses
              </Link>
           </div>
    </div>
  )
}
