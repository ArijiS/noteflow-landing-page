import React from 'react'
import { reviews } from '../../utils/content'

const Reviews = () => {
  return (
            <section className="max-w-360 px-25 max-xl:px-16 m-auto flex flex-wrap gap-x-4 max-xl:gap-x-3 gap-y-4 items-center">
                <ul className="flex">
                {
                    reviews.map(
                        ({id, src, alt})=>(
                            <li key={id} className="size-12 max-xl:size-10 rounded-full border-2 border-primary-100 overflow-hidden object-cover -mr-4 last:mr-0">
                                <img src={src} alt={alt}/>
                            </li>
                        )
                    )
                }
                </ul>
                <p className="text-xl max-xl:text-lg font-light text-primary-100 tracking-normal">Trusted by <span class="font-bold text-primary-500 tracking-tight">12,653+</span> productivity junkies</p>
            </section>
  )
}

export default Reviews;