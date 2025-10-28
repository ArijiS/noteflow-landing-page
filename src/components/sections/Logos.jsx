import React from 'react'
import {logos} from "../../utils/content";


const Logos = () => {
  return (
    <section className="bg-linear-to-b from-primary-1300 to-primary-1500 px-25 py-28">
        <div className="max-w-360 m-auto">
            <p className="text-xl tracking-normal mb-20 text-center font-light">Organizations powered by <span className="font-bold">NoteFlow</span></p>

            <div className="flex flex-col gap-y-16">
                <ul className="flex justify-between">
                {
                    logos.slice(0,4).map(
                        ({id, src, alt})=>(
                            <li key={id}>
                                <img src={src} alt={alt} className="h-10"/>
                            </li>
                        )
                    )
                }
                </ul>

                <ul className="flex justify-between">
                    {
                        logos.slice(4,8).map(
                            ({id, src, alt})=> (
                                <li key={id}>
                                    <img src={src} alt={alt} className="h-10"/>
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

export default Logos