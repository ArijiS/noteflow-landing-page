import React from 'react';
import CaretUp from "../../icons/CaretUp"
import {motion} from "motion/react";

const FAQ = ({question, activeQuestion, handleQuestionClick}) => {
  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
  }

  return (
    <motion.li variants={itemVariants} className="shrink-0 grow-0">
        <button className="flex w-full items-center cursor-pointer" onClick={()=> handleQuestionClick(question.id)}>

          <div className="border-2 border-primary-50 mr-6 rounded-xl p-3.5">
            <question.Icon className="stroke-primary-50" width={2}/>
          </div>

          <p className="font-medium max-lg:font-semibold text-xl max-md:text-left max-lg:text-lg tracking-tighter max-lg:tracking-tight">{question.question}</p>
          
          <div className="ml-auto flex grow-0 shrink-0 pl-4 w-12 items-center justify-center">
            <CaretUp width={2.5} className="stroke-primary-50" activeQuestion = {activeQuestion === question.id}/>
          </div>

        </button>

        <motion.p className="text-primary-100 tracking-normal text-lg/8 max-lg:text-base/loose font-light pt-0 pl-20 pr-14"
          initial = {{ opacity: 0, maxHeight: 0, visibility: "hidden" }}
          animate = {activeQuestion === question.id ? {opacity: 1, maxHeight: "400px", visibility: "visible", paddingTop: "1rem"} : {}}
          transition = {{duration: 0.3, ease: "easeInOut"}}
        >
          {question.answer}
        </motion.p>
    </motion.li>
  )
}

export default FAQ;