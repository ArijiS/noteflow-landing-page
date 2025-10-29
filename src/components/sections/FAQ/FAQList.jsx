import React from 'react';
import FAQ from "./FAQ";
import { useState } from 'react';
import { motion, stagger } from "motion/react";


const FAQList = ({category, activeQuestion, questionsArr, handleQuestionClick}) => {

  const [inView, setInView] = useState(false);

  return (
    <motion.ul className="m-auto flex flex-col gap-y-14 max-w-206.5"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      key={category}
      layout
      variants={
        {
          hidden: {opacity : 0},
          visible: {
            opacity: 1,
            transition: {
              delayChildren: stagger(0.25),
              ease: "easeIn"
            }
          }}}
        
        onViewportEnter = {()=> setInView(true)}
        onViewportLeave = {()=> setInView(false)}
        viewport={{once: true, amount: 0.5}}
    >
      {
        questionsArr.map(
          (question)=>(
            <FAQ key={question.id} question={question} activeQuestion={activeQuestion} handleQuestionClick = {handleQuestionClick}/>
          )
        )
      }
    </motion.ul>
  )
}

export default FAQList;