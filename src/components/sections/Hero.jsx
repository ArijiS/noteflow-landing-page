import React from 'react'
import {motion} from 'framer-motion';


import { BsDashLg } from "react-icons/bs";
import { PiCaretRightBold } from "react-icons/pi";
import heroGraphic from "../../assets/graphics/heroGraphic.webp";



const Hero = () => {
  return (
    <div className="tracking-tight m-auto max-w-360 grid grid-cols-[5fr_4fr] gap-x-17 justify-between items-center py-42">

        <div className="flex flex-col">
            <h1 className="text-6xl/[4.5rem] font-semibold mb-6 tracking-tighter">AI-Powered Notes. Organize and Summarize in Seconds</h1>

            <p className="text-xl/[2.5rem] font-light text-primary-100 mb-10">Let AI organize & summarize your notes,<br/>
                saving you time and boosting productivity</p>

            <motion.button className="flex text-primary-1300 font-light text-lg bg-primary-500 px-8 py-5 gap-x-2 w-fit rounded-full primary-glow hover:primary-50-glow hover:bg-primary-50 cursor-pointer group transition-properties"
            whileHover="hover"
            ><p>Get Started</p>
            
            <motion.div 
            className="flex items-center stroke-primary-1300" 
            variants={{hover:{x:8}}}
            transition={{type: "tween", duration: 0.2, ease: "easeInOut"}}
            >
                <motion.span
                initial={{opacity: 0}}
                variants= {{hover:{opacity:1}}}
                transition={{type: "tween", duration:0.15, ease: "easeInOut"}}
                >
                    <BsDashLg className="-mr-3.5 stroke-1"/>
                </motion.span>
                <PiCaretRightBold/>
            </motion.div>
            
            </motion.button>
        </div>

        <div className="relative">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-primary-1300 rounded-full blur-2xl"/>
            <img src={heroGraphic} alt="" className="relative max-h-120 w-auto justify-self-end"/>
        </div>

    </div>
  )
}

export default Hero