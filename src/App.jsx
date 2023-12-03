import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Explore from './components/Explore'
import Accordian from './components/Faq/Accordian'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Explore/>
<Accordian/>
<Pricing/>
<Testimonial/>
    </>
  )
}

export default App;
