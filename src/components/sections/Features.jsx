import React from 'react';

import ContextualReminders from "../../assets/graphics/ContextualReminders.webp";
import SmartOrganization from "../../assets/graphics/SmartOrganization.webp";

const Features = () => {
  return (
    <section className="noise-bg-dark">
        <div className="relative max-w-360 px-25 max-xl:px-16 max-lg:px-8 max-md:px-6 py-32 max-xl:py-24 m-auto z-0">

            <h2 className="text-6xl/[4.5rem] max-xl:text-5xl/[3.5rem] max-lg:text-4xl/10 max-sm:text-3xl/9 max-sm:tracking-tighter font-semibold tracking-tighter max-lg:tracking-tight text-center mb-28 max-xl:mb-18 max-sm:mb-16">All The Tools You Need to<br/>
            <span className="text-primary-500 primary-glow">Supercharge</span> Your Note Taking
            </h2>

            <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-x-16 max-md:gap-y-10 max-xl:gap-x-10 mb-20 max-xl:mb-12 max-md:mb-16">
                <figure className="relative flex w-full justify-start">
                    <div className="absolute top-0 bottom-0 -left-20 right-0 bg-primary-1200 rounded-full blur-3xl opacity-40"/>
                    <img src={SmartOrganization} alt="" className="max-h-180 max-md:max-w-[90%] max-sm:w-full max-sm:h-auto relative"/>
                </figure>
                <div className="max-w-lg max-md:max-w-max justify-self-end max-md:justify-self-start max-md:row-start-1">
                    <p className="text-5xl/14 max-xl:text-4xl/10 max-lg:text-3xl/12 max-sm:text-2xl/8 tracking-tighter max-sm:tracking-tight max-lg:tracking-tight mb-8 max-xl:mb-6 max-lg:mb-4 font-semibold">Smart Organization</p>
                    <p className="text-xl/10 max-xl:text-lg/8 max-lg:text-base/7 text-primary-100 tracking-normal">Automatically categorize and tag your notes using AI-driven analysis. NoteFlow intelligently identifies key topics and organizes your content, making it easy to find and retrieve your notes when you need them most.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-x-16 max-md:gap-y-10 max-xl:gap-x-10">
                <div className="max-w-lg max-md:max-w-max justify-self-start">
                    <p className="text-5xl/14 max-xl:text-4xl/10 max-lg:text-3xl/12 max-sm:text-2xl/8 tracking-tighter max-sm:tracking-tighter max-lg:tracking-tight mb-8 max-xl:mb-6 max-lg:mb-4 font-semibold">Contextual Reminders</p>
                    <p className="text-xl/10 max-xl:text-lg/8 max-lg:text-base/7 text-primary-100 tracking-normal">Stay on top of important tasks with AI-powered reminders that adapt to the context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions from your notes and sends timely alerts to ensure nothing slips through the cracks.</p>
                </div>
                <figure className="relative flex w-full justify-end">
                    <div className="absolute top-0 left-40 max-md:left-20 -right-10 bottom-0 bg-primary-1200 rounded-full blur-3xl opacity-50"/>
                    <img src={ContextualReminders} alt="" className="relative max-h-180 max-md:max-w-[90%] max-sm:w-full max-sm:h-auto"/>
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Features