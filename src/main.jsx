import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ModalContextProvider } from './contexts/ModalContext.jsx';
import { MobileMenuContextProvider } from './contexts/MobileMenuContext.jsx';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <MobileMenuContextProvider>

      <ModalContextProvider >

        <App />

      </ModalContextProvider>

    </MobileMenuContextProvider>

    

  </StrictMode>,
)
