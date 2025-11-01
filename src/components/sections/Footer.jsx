import React from 'react'
import logo from "../../assets/Logo.svg";
import {footerCols} from "../../utils/content";

const Footer = () => {
  return (
    <footer className="noise-bg-dark-to-light">
        <div className="max-w-360 px-25 max-xl:px-16 py-32 max-xl:py-24 m-auto flex justify-between">
            <a href="#" className="flex gap-x-4 items-center self-start">
                <img src={logo} alt="" className="h-6 w-auto"/>
                <p className="text-2xl font-bold tracking-tighter">NoteFlow</p>
            </a>

        <div className="grid grid-cols-4 gap-x-24 max-xl:gap-x-16">
            {
                footerCols.map(
                    ({id, category, links})=>(
                        <div className="w-fit">
                        <p key={id} className="text-xl font-semibold tracking-tight mb-8">{category}</p>
                        <ul className="flex flex-col gap-y-4">
                            {links.map((link, i) => (
                                <li key={i} className="text-lg max-xl:text-base font-light hover:text-primary-500 transition-properties"><a href="#">{link}</a></li>
                            )
                            )}
                        </ul>
                        </div>
                        
                        
                        
                    )
                )
            }
        </div>

        </div>
    </footer>
  )
}

export default Footer