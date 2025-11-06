import React from 'react';
import { motion } from "motion/react";
import Menu from "../../icons/Menu";

const MobileMenuIcon = () => {

    const mobileMenuOpened = false;

  return (
    <motion.button
    className="cursor-pointer hidden max-lg:flex items-center justify-center"
    animate={{rotate: mobileMenuOpened ? 90 : 0}}
    transition= {{duration: 0.2, ease: "easeInOut"}}
    >
        <Menu className="stroke-primary-50 size-7 width={2}"/>
    </motion.button>
  )
}

export default MobileMenuIcon