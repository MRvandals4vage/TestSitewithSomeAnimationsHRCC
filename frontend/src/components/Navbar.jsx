import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur border-b border-neutral-900">
      <div className="container flex items-center justify-between px-0 h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 shadow-lg"></div>
          <div>
            <div className="font-bold">HackerRank Campus Crew</div>
            <div className="text-xs text-neutral-400">Build • Learn • Compete</div>
          </div>
        </Link>
        <nav className="flex gap-3 items-center">
          <NavLink to="/" className={({isActive})=>isActive? 'px-3 py-2 rounded-md text-green-400' : 'px-3 py-2 rounded-md hover:text-green-300'}>Home</NavLink>
          <NavLink to="/team" className={({isActive})=>isActive? 'px-3 py-2 rounded-md text-green-400' : 'px-3 py-2 rounded-md hover:text-green-300'}>Meet the Team</NavLink>
          <NavLink to="/events" className={({isActive})=>isActive? 'px-3 py-2 rounded-md text-green-400' : 'px-3 py-2 rounded-md hover:text-green-300'}>Events</NavLink>
        </nav>
      </div>
    </header>
  )
}
