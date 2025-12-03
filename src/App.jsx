import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Volunteer from './components/Volunteer'
import Footer from './components/Footer'

export default function App(){
  const [route, setRoute] = useState('home')
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header route={route} setRoute={setRoute} />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
        {route === 'home' && <Home />}
        {route === 'about' && <About />}
        {route === 'volunteer' && <Volunteer />}
      </main>
      <Footer />
    </div>
  )
}
