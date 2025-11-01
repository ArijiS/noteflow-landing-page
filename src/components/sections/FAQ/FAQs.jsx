import React from 'react';
import { useState } from 'react';
import { frequentlyAskedQuestions } from '../../../utils/content';

import FAQList from "../FAQ/FAQList";

const FAQs = () => {

  const [category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions.filter(
    (obj)=> obj.category === category
  ).at(0);

  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) => {
   activeQuestion === id ? setActiveQuestion(null) : setActiveQuestion(id);
  }

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setCategory(category);
  }


  return (
    <section className="noise-bg-dark-to-light">
        <div className="max-w-360 px-25 max-xl:px-16 py-32 max-xl:py-24 m-auto">

            <h2 className="text-6xl/[4.5rem] max-xl:text-5xl/[3.5rem] font-semibold tracking-tighter text-center mb-8 max-xl:mb-6">Frequently Asked Questions</h2>
            <p className="text-xl/10 max-xl:text-lg/8 font-light text-primary-100 text-center mb-8 max-xl:mb-6">The most commonly asked questions about NoteFlow.<br/>
            Have any other questions? <a href="#" className="underline underline-offset-4 decoration-1">Chat with our expert tech team</a> 
            </p>

            <ul className="mb-16  flex flex-wrap justify-center gap-x-3 gap-y-4">
              {frequentlyAskedQuestions.map(
                (obj)=>(
                  <li key={obj.id}>
                    <button className={`cursor-pointer text-lg max-xl:text-base/loose font-light px-8 max-xl:px-6 py-4 max-xl:py-3 border-2 border-primary-50 rounded-full transition-properties
                    ${category === obj.category && " text-primary-1300 border-primary-500 bg-primary-500 primary-glow"}
                    ${category !== obj.category && " hover:text-primary-1300 hover:bg-primary-50"}

                    `} onClick={
                      ()=> handleCategoryClick(obj.category)
                    }>{obj.category}</button>
                  </li>
                )
              )}
            </ul>
            <FAQList 
              category={category}
              activeQuestion={activeQuestion}
              questionsArr={questionsArr}
              handleQuestionClick={handleQuestionClick}
            />            
        </div>
    </section>
  )
}

export default FAQs;