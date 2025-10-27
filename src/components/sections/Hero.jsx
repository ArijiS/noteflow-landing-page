import React from 'react'
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from '../icons/ArrowRightLine';
import heroGraphic from "../../assets/graphics/heroGraphic.webp";


const Hero = () => {
  return (
    <div className="tracking-tight m-auto max-w-360 grid grid-cols-[5fr_4fr] gap-x-17 justify-between items-center py-42">

        <div className="flex flex-col">
            <h1 className="text-6xl/[4.5rem] font-semibold mb-6">AI-Powered Notes. Organize and Summarize in Seconds</h1>

            <p className="text-xl/[2.5rem] font-light text-primary-100 mb-10">Let AI organize & summarize your notes,<br/>
                saving you time and boosting productivity</p>

            <button className="flex text-primary-1300 font-light text-lg bg-primary-500 px-8 py-5 gap-x-3 w-fit rounded-full primary-glow hover:primary-50-glow hover:bg-primary-50 cursor-pointer group transition-properties"
            ><p>Get Started</p>
            <div className="w-6">
                <ArrowRightLine alt="arrow right line" className="inline stroke-primary-1300 -mr-3 w-3" width={2.5}/>
                <ArrowRight alt="arrow right" className="inline stroke-primary-1300 w-5" width={2}/>
            </div>
            
            </button>
        </div>

        <div>
            <div/>
            <img src={heroGraphic} alt="" className="max-h-120 w-auto justify-self-end"/>
        </div>

    </div>
  )
}

export default Hero