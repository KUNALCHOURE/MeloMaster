'use client'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';


const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

export default function UpcommingWebinar() {
    
  return (
    <div className='py-12 bg-gray-900'>
           <div><h2 className='text-green-700 text-center'> FEATURED WEBINAR</h2>
         
               <p className='text-5xl ptext-white text-center mt-4 font-bold'  >Enhance your Music Journey</p>
               </div>

               <div>
               <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={featuredWebinars.map((webminar)=>(
        {
        title: webminar.title,
        description:webminar.description,
        link:'/',
      }
      ))} />
    </div>
               </div>

           <div className='text-center mt-24'>
              <Link href={"/courses"} className='mt-4 border rounded-md p-4 bg-slate-200 text-black text-center '>
                 View all Webinars
              </Link>
           </div>
    </div>
  )
}
