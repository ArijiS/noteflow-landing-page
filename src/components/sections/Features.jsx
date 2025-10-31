import React from 'react';

import ContextualReminders from "../../assets/graphics/contextualReminders.webp";
import SmartOrganization from "../../assets/graphics/smartOrganization.webp";

const Features = () => {
  return (
    <section className="noise-bg-dark">
        <div className="relative max-w-360 px-25 py-32 m-auto z-0">

            <h2 className="text-6xl/[4.5rem] font-semibold tracking-tighter text-center mb-28">All The Tools You Need to<br/>
            <span className="text-primary-500 primary-glow">Supercharge</span> Your Note Taking
            </h2>

            <div className="grid grid-cols-2 items-center gap-x-16 mb-20">
                <figure className="relative">
                    <div className="absolute top-0 bottom-0 -left-20 right-0 bg-primary-1200 rounded-full blur-3xl opacity-40"/>
                    <img src={SmartOrganization} alt="" className="max-h-180 relative"/>
                </figure>
                <div className="max-w-lg justify-self-end">
                    <p className="text-5xl/14 tracking-tighter mb-8 font-semibold">Smart Organization</p>
                    <p className="text-xl/10 text-primary-100 tracking-normal">Automatically categorize and tag your notes using AI-driven analysis. NoteFlow intelligently identifies key topics and organizes your content, making it easy to find and retrieve your notes when you need them most.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 items-center gap-x-16">
                <div className="max-w-lg justify-self-start">
                    <p className="text-5xl/14 tracking-tighter mb-8 font-semibold">Contextual Reminders</p>
                    <p className="text-xl/10 text-primary-100 tracking-normal">Stay on top of important tasks with AI-powered reminders that adapt to the context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions from your notes and sends timely alerts to ensure nothing slips through the cracks.</p>
                </div>
                <figure className="relative">
                    <div className="absolute top-0 left-40 -right-10 bottom-0 bg-primary-1200 rounded-full blur-3xl opacity-50"/>
                    <img src={ContextualReminders} alt="" className="relative max-h-180 justify-self-end"/>
                </figure>
            </div>

        </div>

    </section>
  )
}

export default Features