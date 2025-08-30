import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'

export default function App(){
  const [showIntro, setShowIntro] = useState(true)

  useEffect(()=>{
    const seen = sessionStorage.getItem('hrtc_seen_intro')
    if(seen === '1') setShowIntro(false)
  },[])

  const handleIntroEnd = ()=>{ sessionStorage.setItem('hrtc_seen_intro','1'); setShowIntro(false) }

  return (
    <div className="min-h-screen">
      {showIntro ? (
        <div className="fixed inset-0 z-50 bg-black">
          <video id="hrtc-intro" src="/intro.mp4" autoPlay muted playsInline className="w-full h-full object-cover" onEnded={handleIntroEnd} />
        </div>
      ) : (
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/events' element={<Events/>} />
          </Routes>
        </Layout>
      )}
    </div>
  )
}
