import React from 'react';

import { useContext } from 'react';
import { ModalContext } from '../../../contexts/ModalContext';

import { motion } from "motion/react";

const Modal = ({children, modalName}) => {

    const {activeModal, setActiveModal} = useContext(ModalContext);
    const activelyDisplayedModal = modalName === activeModal;
  return (
    <motion.div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center px-25 max-xl:px-16 max-lg:px-8 py-32 max-xl:py-24 backdrop-blur-sm bg-primary-1500/15"
        animate={activelyDisplayedModal ? "visible" : "hidden"}
        variants={{
            visible:{
                opacity: 100, visibility: "visible"
            },
            hidden:{
                opacity: 0, visibility: "hidden"
            },
        }}
        transition={{duration: 0.25, ease: "easeInOut"}}
        onClick={(e)=> e.target === e.currentTarget && setActiveModal("") }>

        <motion.div className="flex overflow-hidden rounded-2xl shadow-[0px_0px_20px_rgb(6,18,18,0.4)]"
        initial={{opacity:0, y:40}}
        animate={activelyDisplayedModal ? {opacity:100, y: 0} : {opacity:0, y:30}}
        transition={{duration: 0.25, ease: "easeInOut"}}
        >
            {children}
        </motion.div>
         
    </motion.div>
  )
}

export default Modal;