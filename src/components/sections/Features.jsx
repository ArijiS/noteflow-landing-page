import React from 'react';

import contextualReminders from "../../assets/graphics/contextualReminders.webp";
import smartOrganization from "../../assets/graphics/smartOrganization.webp";

const Features = () => {
  return (
    <section className="bg-primary-1500 px-25 py-32 overflow-hidden">
        <div className="relative max-w-360 m-auto z-0">

            <div className="absolute bg-primary-1200 size-250 rounded-full top-[25%] left-[70%] translate-x-[50%] blur-[15rem] opacity-50 -z-10"/>

            <h2 className="text-6xl/[4.5rem] font-semibold tracking-tighter text-center mb-28">All The Tools You Need to<br/>
            <span className="text-primary-500 primary-glow">Supercharge</span> Your Note Taking
            </h2>

            <div className="grid grid-cols-2 items-center gap-x-16 mb-20">
                <figure>
                    <img src={smartOrganization} alt="" className="max-h-180"/>
                </figure>
                <div className="max-w-lg justify-self-end">
                    <p className="text-5xl/14 tracking-tighter mb-8">Smart Organization</p>
                    <p className="text-2xl/10 text-primary-100 tracking-normal">Automatically categorize and tag your notes using AI-driven analysis. NoteFlow intelligently identifies key topics and organizes your content, making it easy to find and retrieve your notes when you need them most.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 items-center gap-x-16">
                <div className="max-w-lg">
                    <p className="text-5xl/14 tracking-tighter mb-8">Contextual Reminders</p>
                    <p className="text-2xl/10 text-primary-100 tracking-normal">Stay on top of important tasks with AI-powered reminders that adapt to the context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions from your notes and sends timely alerts to ensure nothing slips through the cracks.</p>
                </div>
                <figure>
                    <img src={contextualReminders} alt="" className="max-h-180 justify-self-end"/>
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Features