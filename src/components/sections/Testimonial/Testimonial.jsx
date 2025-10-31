import React from 'react';
import { easeInOut, motion } from "motion/react";
import Star from "../../icons/Star";

const Testimonial = ({testimonial}) => {
  return (
    <motion.li className="bg-primary-1300 py-10 px-8 rounded-2xl"
      initial={{opacity:0, y:40}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:false, amount:0.75}}
      transition={{opacity:{duration: 0.75, ease: easeInOut}}}
    >
      <div className="flex mb-8 gap-x-1">
        {
          Array.from({length : testimonial.rating}).map((_,i) => <Star key={i} className="fill-primary-100"/>)
        }
        {
          Array.from({length : 5 - testimonial.rating}).map((_,i) => <Star key={i} className="stroke-primary-100"/>)
        }
      </div>

        <p className="font-light text-lg/9 tracking-normal">{testimonial.description}</p>

        <div className="mt-16 flex gap-x-6 items-center">
          <img src={testimonial.src} alt="" className="size-18 rounded-full"/>

          <div>
            <p className="text-xl/7 tracking-tight font-bold text-primary-300">{testimonial.name}</p>
            <p className="text-primary-75 text-[1rem]/8 tracking-tight">{testimonial.title}</p>
          </div>
        </div>

    </motion.li>
  )
}

export default Testimonial;