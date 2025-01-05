import React from 'react'
import coursedata from "../data/music_course.json"
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
import Link from 'next/link';

export default function Featuredcourses() {
      
  return (
    <div className='py-12 bg-gray-900'>
           <div><h2 className='text-green-700 text-center'>FEATURED COURSES</h2>
         
               <p className='text-5xl ptext-white text-center mt-4 font-bold'  >Learn with the Best</p>
               </div>
           <div className='mt-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 justify-center'>
          
           </div>

           <div className='text-center mt-10'>
              <Link href={"/courses"} className='mt-4 border rounded-md p-4 bg-slate-200 text-black text-center '>
                 View all courses
              </Link>
           </div>
    </div>
  )
}
