import './App.css'
import Page from './components/sections/Page';

import Header from './components/sections/Header';
import Navigation from './components/sections/Navigation';
import Hero from "./components/sections/Hero";
import Reviews from './components/sections/Reviews';

import Main from './components/sections/Main';
import Logos from './components/sections/Logos';
import Features from './components/sections/Features';
import Footer from "./components/sections/Footer";

import FAQs from './components/sections/FAQ/FAQs';
import MobileMenu from './components/sections/MobileMenu/MobileMenu';

import Testimonials from './components/sections/Testimonial/Testimonials';

import Modal from "./components/sections/Modal/Modal";
import Noise from "./assets/Noise.webp";
import SignUpModal from './components/sections/Modal/SignUpModal';

import { useModalContext , ModalContextProvider } from './contexts/ModalContext';
import { useMobileMenuContext , MobileMenuContextProvider } from './contexts/MobileMenuContext';
import { useEffect } from 'react';


function App() {

  const { activeModal } = useModalContext();
  const { mobileMenuOpened } = useMobileMenuContext();

  useEffect(
    ()=> {
      document.documentElement.style.overflow = (activeModal || mobileMenuOpened) ? "hidden" : "";
    }
    , [activeModal, mobileMenuOpened]
  );
  

  return (
        
          <Page>

            <Header>
              <Navigation/>
              <Hero/>
              <Reviews/>
            </Header>

            <Main>
              <Logos />
              <Features />
              <FAQs/>
              <Testimonials />
              <Footer />
            </Main>

            <Modal modalName="signUp">
              <SignUpModal />
            </Modal>

            <MobileMenu />
          </Page>
        
  )
}

export default App;
