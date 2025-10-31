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

import Testimonials from './components/sections/Testimonial/Testimonials';
import Noise from "./assets/Noise.webp";


function App() {
  

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

          </Page>
  )
}

export default App;
