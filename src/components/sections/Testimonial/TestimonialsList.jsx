import React from 'react'
import Testimonial from './Testimonial'

const TestimonialsList = ({testimonials, className}) => {
  return (
    <ul className={`flex flex-col gap-y-6 max-xl:gap-y-4 ${className}`}>
      {testimonials.map(
        (testimonial)=>
          (
            <Testimonial testimonial = {testimonial} key={testimonial.id}/>
          )
      )}
    </ul>
  )
}

export default TestimonialsList;