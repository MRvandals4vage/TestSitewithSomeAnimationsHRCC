import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="bg-black/90 border-t border-neutral-900 mt-12">
      <div className="container px-6 py-10 text-center">
        <h3 className="text-white font-bold">COMMUNITY</h3>
        <p className="text-neutral-400 mt-2">Contact Us</p>

        <div className="mt-6">
          <h3 className="text-white font-bold">GOVERNING BODIES</h3>
          <p className="text-neutral-400 mt-2">Centre of Excellence</p>
          <p className="text-neutral-400">Dept. of Computational Intelligence</p>
        </div>

        <div className="mt-6">
          <h3 className="text-white font-bold">CONNECT</h3>
          <div className="flex gap-4 justify-center mt-3">
            <a href="#" className="text-neutral-300 hover:text-white"><FaLinkedin/></a>
            <a href="#" className="text-neutral-300 hover:text-white"><FaInstagram/></a>
            <a href="#" className="text-neutral-300 hover:text-white"><FaGithub/></a>
          </div>
        </div>

        <div className="text-sm text-neutral-500 mt-8">© HackerRank Tech Circle 2025</div>
      </div>
    </footer>
  )
}
