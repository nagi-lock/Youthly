import React from 'react'
export default function Footer(){
  return (
    <footer className="border-t py-6 mt-auto w-full" style={{backgroundColor: '#f3f4f6'}}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Youthly • All rights reserved</div>
        <div className="flex gap-4 items-center">
          <a className="font-medium" style={{color: '#5b21b6'}}>Instagram</a>
          <a className="font-medium" style={{color: '#5b21b6'}}>Twitter</a>
          <a className="font-medium" style={{color: '#5b21b6'}}>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
