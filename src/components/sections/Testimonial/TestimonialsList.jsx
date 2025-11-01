import React from 'react'
import Testimonial from './Testimonial'

const TestimonialsList = ({testimonials}) => {
  return (
    <ul className="flex flex-col gap-y-6 max-xl:gap-y-4">
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