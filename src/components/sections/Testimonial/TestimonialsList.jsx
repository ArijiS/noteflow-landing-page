import React from 'react'
import Testimonial from './Testimonial'

const TestimonialsList = ({testimonials}) => {
  return (
    <ul className="flex flex-col gap-y-6">
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