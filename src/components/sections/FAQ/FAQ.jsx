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

          <p className="font-medium text-xl tracking-tighter">{question.question}</p>
          
          <div className="ml-auto flex grow-0 shrink-0 pl-4 w-12 items-center justify-center">
            <CaretUp width={2.5} className="stroke-primary-50"/>
          </div>

        </button>

        <motion.p className="text-primary-100 tracking-normal text-lg font-light mt-4 pl-20 pr-14">
          {question.answer}
        </motion.p>
    </motion.li>
  )
}

export default FAQ;