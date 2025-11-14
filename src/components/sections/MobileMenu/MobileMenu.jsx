import React from 'react';
import { motion } from 'motion/react';
import Close from "../../icons/Close";
import { navigationLinks } from "../../../utils/content";
import { useMobileMenuContext } from '../../../contexts/MobileMenuContext';
import { useModalContext } from '../../../contexts/ModalContext';


const MobileMenu = () => {

  const {mobileMenuOpened, setMobileMenuOpened} = useMobileMenuContext();
  const { activeModal ,setActiveModal } = useModalContext();
  
  const handleGetStarted = () => {
    setActiveModal("signUp");
    setMobileMenuOpened(false);
  }

  return (
    <motion.div className="bg-primary-1300/50 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-end px-6 py-6 pl-28 backdrop-blur-sm" 
    
    animate={mobileMenuOpened ? "visible" : "hidden"}
    variants={
      {hidden: {
        opacity: 0,
        visibility: "hidden",
      },
      visible: {
        opacity: 100,
        visibility: "visible",
      }
    }}
    transition={{duration: 0.25}}
    onClick={ (e) => e.target === e.currentTarget && setMobileMenuOpened(false)}
    >

      <motion.div className="noise-bg-1400 flex basis-80 flex-col justify-between px-6 py-8 rounded-2xl" 
      
      animate={mobileMenuOpened ? "visible" : "hidden"}
      variants={
        {hidden:{opacity:0, visibility: "hidden", x: "100%"},
        visible: {opacity: 100, visibility: "visible", x:0}}
      }
      transition={{duration: 0.25, ease: "easeInOut"}}
      
      >

        <div className="flex flex-col gap-y-16">
          <button className="group hover:bg-primary-75 cursor-pointer flex justify-end items-center p-3 size-11 border-primary-75 border-2 rounded-xl transition-properties"
          onClick={()=>{setMobileMenuOpened(prev=> !prev)}}>
            <Close width={2} className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties"
            />
          </button>
          <ul className="flex flex-col gap-y-6 font-light text-lg">
            {navigationLinks.map(
              ({id, link, href}) => (
                <li key={`${id}-${link}`}><a href={href} className="inline-block text-lg/8 max-xl:text-base/loose font-light hover:text-primary-500 transition-properties">{link}</a></li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-y-3 text-base">
          <button className="px-8 py-4 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose rounded-full border-2 border-primary-50 hover:bg-primary-50 hover:text-primary-1300 cursor-pointer transition-properties">login</button>
          <button className="px-8 py-4 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose rounded-full bg-primary-500 text-primary-1300 cursor-pointer primary-glow hover:primary-50-glow hover:bg-primary-50 transition-properties"
          onClick = {handleGetStarted}
          >Get Started</button>
        </div>

      </motion.div>

    </motion.div>
  )
}

export default MobileMenu;