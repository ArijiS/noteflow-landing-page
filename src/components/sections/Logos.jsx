import React from 'react'
import {logos} from "../../utils/content";


const Logos = () => {
  return (
    <section className="noise-bg-light-to-dark">
        <div className="max-w-360 m-auto px-25 max-xl:px-16 max-lg:px-8 max-md:px-6 py-28 max-xl:py-24">
            <p className="text-xl max-xl:text-lg/loose tracking-normal mb-20 max-sm:mb-16 text-center font-light">Organizations powered by <span className="font-bold">NoteFlow</span></p>

            <div className="flex flex-col max-md:flex-row gap-y-16 max-sm:gap-x-14 max-md:justify-around">
                <ul className="flex justify-between max-md:flex-col max-md:gap-y-16 max-md:items-start">
                {
                    logos.slice(0,4).map(
                        ({id, src, alt})=>(
                            <li key={id}>
                                <img src={src} alt={alt} className="h-10 max-xl:h-8 max-lg:h-7"/>
                            </li>
                        )
                    )
                }
                </ul>

                <ul className="flex justify-between max-md:flex-col max-md:gap-y-16 max-md:items-end">
                    {
                        logos.slice(4).map(
                            ({id, src, alt})=> (
                                <li key={id}>
                                    <img src={src} alt={alt} className="h-10 max-xl:h-8 max-lg:h-7"/>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
            
        </div>
    </section>
  )
}

export default Logos;