import React, { useState } from 'react'
import Carousel from './Carousel'

const IMAGES = [
  '/mnt/data/WhatsApp Image 2025-11-23 at 11.09.15.jpeg',
  '/mnt/data/WhatsApp Image 2025-11-23 at 11.09.25.jpeg',
  '/mnt/data/WhatsApp Image 2025-11-23 at 11.10.52.jpeg'
]

export default function Home(){
  const [expanded, setExpanded] = useState(false)
  
  return (
    <section className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-y-purple">Driven by youth, defined by purpose</h1>
          <p className="mt-4 text-gray-700">Youthly creates safe spaces where young people heal, grow, and discover who they truly are. Founded in March 2025, we build a culture of volunteering and empathy across India, especially in smaller towns.</p>

          <div className="mt-6 flex gap-3">
            <div className="px-4 py-2 rounded-full bg-y-orange text-white font-medium cursor-pointer">Volunteer</div>
            <button onClick={() => setExpanded(!expanded)} className="px-4 py-2 rounded-full border border-purple-200 text-y-purple cursor-pointer hover:bg-purple-50 transition-colors">{expanded ? 'Show less' : 'Show more'}</button>
          </div>

          {expanded && (
            <div className="mt-6 space-y-4 fade-in">
              <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                <h4 className="font-semibold text-y-purple mb-2">What we do</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Provide education and mentorship to youth</li>
                  <li>Support mental health awareness and counseling</li>
                  <li>Lead environmental sustainability work</li>
                  <li>Build leadership skills in young leaders</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-orange-50 border border-y-orange">
                <h4 className="font-semibold text-y-purple mb-2">How you can help</h4>
                <p className="text-gray-700">You have opportunities to match your skills and schedule. Tutor students. Create content. Organize events. Plan strategy. Build community in your area or online.</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <Carousel images={IMAGES} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white shadow-sm border-l-4 border-purple-200">
          <h3 className="font-semibold text-y-purple">Our Mission</h3>
          <p className="mt-2 text-gray-600">We help young people heal, lead, and transform with courage.</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-sm border-l-4 border-y-orange">
          <h3 className="font-semibold text-y-purple">Our Vision</h3>
          <p className="mt-2 text-gray-600">Young leaders who think clearly and act with compassion.</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-sm">
          <h3 className="font-semibold text-y-purple">Get Involved</h3>
          <p className="mt-2 text-gray-600">Share your skills. Social media, mentoring, events, strategy, or community work.</p>
        </div>
      </div>
    </section>
  )
}
