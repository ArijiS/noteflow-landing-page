import { useContext, createContext, useState } from "react";
import React from 'react';

const ModalContext = createContext();

const ModalContextProvider = ({children}) => {
    const [activeModal, setActiveModal] = useState("");

    return(
        <ModalContext.Provider value={{activeModal, setActiveModal}}>
            {children}
        </ModalContext.Provider>
    );
}

export { ModalContext, ModalContextProvider };
