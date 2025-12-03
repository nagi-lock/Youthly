import React from 'react'
import LogoImage from '../assets/Logo.jpeg'
const Logo = () => (
  <img src={LogoImage} alt="Youthly logo" className="h-12 w-12 object-contain"/>
)

export default function Header({route, setRoute}){
  const tabs = [
    {id:'home', label:'Home'},
    {id:'about', label:'About'},
    {id:'volunteer', label:'Volunteering'}
  ]
  return (
    <header className="sticky top-0 z-30 shadow-lg" style={{backgroundColor: '#5b21b6'}}>
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setRoute('home')}>
          <Logo />
          <div className="text-2xl font-bold text-white">YOUTHLY</div>
        </div>
        <nav className="hidden md:flex gap-2 items-center">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setRoute(t.id)} className="py-2 px-5 rounded-full font-medium transition-all duration-200 text-white" style={{
              backgroundColor: route === t.id ? '#fb923c' : 'transparent',
              transform: route === t.id ? 'scale(1.05)' : 'scale(1)',
              boxShadow: route === t.id ? '0 10px 15px rgba(0,0,0,0.1)' : 'none',
              opacity: route === t.id ? 1 : 0.8
            }}>{t.label}</button>
          ))}
        </nav>
        <div className="md:hidden">
          <select value={route} onChange={(e)=> setRoute(e.target.value)} className="border-2 border-white text-white rounded-lg p-2 font-medium cursor-pointer" style={{backgroundColor: '#5b21b6'}}>
            {tabs.map(t=> <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>
      </div>
    </header>
  )
}
