import React from 'react'
import TestimonialsList from './TestimonialsList';
import { useState } from 'react';


const Testimonials = () => {

    const [expanded, setExpanded] = useState(true);

  return (
    <section className="bg-linear-to-b from-primary-1300 to-primary-1500">
        <div className="max-w-360 px-25 py-32 m-auto">

            <div className="max-w-210 flex flex-col justify-center items-center m-auto gap-y-6 mb-20">
                <p className="text-[1rem]/8 text-primary-1300 tracking-normal px-4 py-2 bg-primary-500 primary-glow rounded-full">Testimonials</p>
                <h2 className="text-6xl/18 font-semibold tracking-tighter text-center">What our AI-powered<br/>notetakers have to say</h2>
                <p className="text-xl/10 text-primary-100 tracking-normal text-center max-w-154">NoteFlow has helped 1000’s supercharge their productivity with cutting edge AI note taking tools</p>
            </div>

        </div>
    </section>
  )
}

export default Testimonials