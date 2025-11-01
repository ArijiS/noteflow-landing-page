import React from 'react'
import {logos} from "../../utils/content";


const Logos = () => {
  return (
    <section className="noise-bg-light-to-dark">
        <div className="max-w-360 m-auto px-25 max-xl:px-16 py-28 max-xl:py-24">
            <p className="text-xl max-xl:text-lg/loose tracking-normal mb-20  text-center font-light">Organizations powered by <span className="font-bold">NoteFlow</span></p>

            <div className="flex flex-col gap-y-16">
                <ul className="flex justify-between">
                {
                    logos.slice(0,4).map(
                        ({id, src, alt})=>(
                            <li key={id}>
                                <img src={src} alt={alt} className="h-10 max-xl:h-8"/>
                            </li>
                        )
                    )
                }
                </ul>

                <ul className="flex justify-between">
                    {
                        logos.slice(4).map(
                            ({id, src, alt})=> (
                                <li key={id}>
                                    <img src={src} alt={alt} className="h-10 max-xl:h-8"/>
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