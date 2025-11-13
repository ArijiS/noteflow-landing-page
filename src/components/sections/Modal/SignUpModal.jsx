import React from 'react';
import Close from "../../icons/Close";
import Checkmark from "../../icons/Checkmark";

import { useState } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../../contexts/ModalContext';



const SignUpModal = () => {

  const {activeModal ,setActiveModal} = useContext(ModalContext); 

  const initialState = {
    email: "",
    password: "",
  };

  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  const handleInputs = (e) => {
    setInputs(
      (prev) => {
        return {...prev, [e.target.name]: e.target.value}
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(checked){
      console.log(inputs);
      setInputs(initialState);
      setActiveModal("");
      setChecked(false);
    }
  }

  return (
    <section className="grid grid-cols-2 max-sm:grid-cols-1 max-w-205">
      <div className="noise-bg-1300 p-10 max-md:px-6 max-md:py-8 flex max-sm:hidden flex-col gap-y-4 items-center justify-center text-center tracking-normal">
        <p className="text-4xl/12 font-bold tracking-tight">Lets Get You<br/>Signed Up</p>
        <p className="text-lg/8 max-md:text-base/loose font-light">No charges, no fees. Get note taking in minutes!</p>
      </div>

      <div className="relative bg-primary-1400 p-10 max-md:px-6 max-md:py-8 flex flex-col gap-y-24">

        <div className="flex justify-end"><button className="group hover:bg-primary-75 cursor-pointer flex justify-end p-3 max-md:p-2 border-primary-75 border-2 rounded-xl transition-properties"
        onClick={()=> setActiveModal("")}
        ><Close width={2} className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties"/></button></div>

        <div className="flex flex-col gap-y-6">
          <label className="text-lg font-bold max-md:font-normal tracking-tight flex flex-col gap-y-2">
          Email
          <input name="email" type="email" placeholder="janedoe@gmail.com"
          onChange={handleInputs} value={inputs.email} className="font-light text-base text-primary-1500 tracking-normal px-8 max-md:px-6 py-4 max-md:py-3 w-full rounded-full bg-primary-75"/>
        </label>
        <label className="text-lg font-bold max-md:font-normal tracking-tight flex flex-col gap-y-2">
          Password
          <input name="password" type="password" placeholder="••••••••••••"
          onChange={handleInputs} value={inputs.password} className="font-light text-base text-primary-1500 tracking-normal px-8 py-4 w-full rounded-full bg-primary-75"/>
        </label>
        </div>
        
        <div>
          <div className="flex gap-x-2 justify-center items-center mb-4 cursor-pointer" onClick={ ()=> setChecked( (prev)=> !prev ) }>
            <button className={`size-4.5 border-2 border-primary-75 rounded-md cursor-pointer flex items-center justify-center ${checked && "bg-primary-100"}`}>
              <Checkmark width={2} className={`${checked ? "stroke-primary-1500" : "hidden"} transition-properties`}/>
            </button>
            <p>I agree to all terms</p>
          </div>
          <button onClick={handleSubmit} className="cursor-pointer w-full px-8 max-md:px-6 py-4 max-md:py-3 rounded-full bg-primary-500 text-primary-1300 tracking-normal text-lg max-md:text-base/loose
          primary-glow hover:primary-glow-hover hover:bg-primary-50 transition-properties
          ">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default SignUpModal;