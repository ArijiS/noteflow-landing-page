import React from 'react'
import CaretUp from "../../icons/CaretUp"
import TestimonialsList from './TestimonialsList';
import { useState } from 'react';
import { testimonials as testArr } from '../../../utils/content';


const Testimonials = () => {

    const [expanded, setExpanded] = useState(false);

  return (
    <section className="noise-bg-light-to-dark">
        <div className="max-w-360 px-25 max-xl:px-16 py-32 max-xl:py-24 m-auto flex flex-col items-center">

            <div className="max-w-210 flex flex-col justify-center items-center m-auto gap-y-6 mb-20 max-xl:mb-16">
                <p className="text-base/8 text-primary-1300 tracking-normal px-4 py-2 bg-primary-500 primary-glow rounded-full">Testimonials</p>
                <h2 className="text-6xl/18 max-xl:text-5xl/16 font-semibold tracking-tighter text-center">What our AI-powered<br/>notetakers have to say</h2>
                <p className="text-xl/10 max-xl:text-lg/8 text-primary-100 tracking-normal text-center max-w-154">NoteFlow has helped 1000’s supercharge their productivity with cutting edge AI note taking tools</p>
            </div>

            <div className="mb-20 max-xl:mb-16 grid grid-cols-3 gap-x-6 max-xl:gap-x-4">
              <TestimonialsList testimonials = {testArr.slice(0, expanded ? 5 : 2)}/>
              <TestimonialsList testimonials = {testArr.slice(5, expanded ? 10 : 7)}/>
              <TestimonialsList testimonials = {testArr.slice(10, expanded ? 15 : 12)}/>
            </div>
            <button className="text-lg max-xl:text-base/loose font-light tracking-normal w-50 max-xl:w-46 h-16 max-xl:h-15 rounded-full border-2 border-primary-50 cursor-pointer hover:bg-primary-50 hover:text-primary-1300 transition-properties flex gap-x-3 items-center group justify-center" onClick={ ()=> setExpanded( (prev) => !prev ) }>
              {expanded ? "Show less" : "Show more"}
              <CaretUp width={2} className={`stroke-primary-50 group-hover:stroke-primary-1300 rotate-180 transition-properties ${expanded && "rotate-360"}`}/>
              </button>
        </div>
    </section>
  )
}

export default Testimonials