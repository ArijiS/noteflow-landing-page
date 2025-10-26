import React from 'react'

import logo from "../../assets/Logo.svg";
import { navigationLinks } from '../../utils/content';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center m-auto max-w-360">
      <a href="#" className="flex gap-x-3">
        <img src={logo} alt="" className="h-6" />
        <p className="font-bold text-[1.25rem] tracking-tight">NoteFlow</p>
      </a>
      <ul className="flex gap-x-8">
        {
          navigationLinks.map(
            ({id, link, href})=>(
              <li key={id}>
                <a href={href} className="inline-block text-lg/8 font-light hover:text-primary-500 transition-properties">{link}</a>
              </li>
            )
          )
        }
      </ul>
      <div className="text-lg font-light flex gap-x-3">
        <button className="px-8 py-4 rounded-full border-2 border-primary-50 hover:bg-primary-50 hover:text-primary-1300 cursor-pointer transition-properties">Login</button>
        <button className="px-8 py-4 rounded-full bg-primary-500 text-primary-1300 cursor-pointer primary-glow hover:primary-50-glow hover:bg-primary-50 transition-properties">Get Started</button>
      </div>
    </nav>
  )
}

export default Navigation;