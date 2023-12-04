import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Explore from './components/Explore'
import Accordian from './components/Faq/Accordian'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Integration from './components/Integration'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Explore/>
    <Integration/>
<Accordian/>
<Pricing/>
<Testimonial/>
<Footer/>
    </>
  )
}

export default App;
