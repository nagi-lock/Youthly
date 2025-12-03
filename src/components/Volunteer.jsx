import React, {useState} from 'react'

export default function Volunteer(){
  const [method, setMethod] = useState('google-form')
  
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-y-purple mb-2">Join Our Movement</h2>
        <p className="text-gray-700">Join 95+ volunteers across India. Bring empathy and positive change to young lives.</p>
      </div>

      <div className="flex gap-4 justify-center mb-6">
        <button onClick={() => setMethod('google-form')} style={{
          backgroundColor: method === 'google-form' ? '#5b21b6' : '#e9d5ff',
          color: method === 'google-form' ? 'white' : '#5b21b6',
          boxShadow: method === 'google-form' ? '0 10px 15px rgba(91, 33, 182, 0.2)' : 'none'
        }} className="px-6 py-3 rounded-full font-semibold transition-all">Fill Google Form</button>
        <button onClick={() => setMethod('why-volunteer')} style={{
          backgroundColor: method === 'why-volunteer' ? '#5b21b6' : '#e9d5ff',
          color: method === 'why-volunteer' ? 'white' : '#5b21b6',
          boxShadow: method === 'why-volunteer' ? '0 10px 15px rgba(91, 33, 182, 0.2)' : 'none'
        }} className="px-6 py-3 rounded-full font-semibold transition-all">Why Volunteer?</button>
      </div>

      {method === 'google-form' && (
        <div className="fade-in">
          <div className="p-6 bg-white rounded-xl shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-y-purple">Sign Up as a Volunteer</h3>
            <p className="text-gray-700">Ready to help. Fill our Google Form and join our volunteer network. We have roles for you:</p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><span className="font-semibold">Content & Social Media</span> - Write and share stories</li>
              <li><span className="font-semibold">Mentoring & Support</span> - Guide young people</li>
              <li><span className="font-semibold">Event Coordination</span> - Run Opening-Up Circles and sessions</li>
              <li><span className="font-semibold">Research & Strategy</span> - Work on our mental health approach</li>
              <li><span className="font-semibold">Community Building</span> - Grow Youthly in your area or online</li>
            </ul>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-6">
              <p className="text-gray-700 mb-4"><span className="font-semibold text-y-purple">All opportunities fit your skills and schedule.</span></p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKvA57Kipm7OqRC2R5fpnDyg4vQxO8kZTgilgg4H3Vo8wjNw/viewform" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg transition-shadow" style={{backgroundColor: '#fb923c'}}>
                Fill the Google Form →
              </a>
            </div>
          </div>
        </div>
      )}

      {method === 'why-volunteer' && (
        <div className="fade-in space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white shadow-md border-l-4 border-y-purple">
              <h3 className="font-semibold text-y-purple text-lg mb-2">Make Real Impact</h3>
              <p className="text-gray-700">Work with an organization focused on mental health and youth leadership in underserved communities.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-md border-l-4 border-y-orange">
              <h3 className="font-semibold text-y-purple text-lg mb-2">Grow as a Leader</h3>
              <p className="text-gray-700">Build leadership skills. Develop empathy. Join a movement shaping a braver India free from mental health crises.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-md border-l-4 border-purple-300">
              <h3 className="font-semibold text-y-purple text-lg mb-2">Flexible and Supportive</h3>
              <p className="text-gray-700">Give what fits your life. A few hours a week or a specific skill. No pressure. Just passion and purpose.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-md border-l-4 border-purple-300">
              <h3 className="font-semibold text-y-purple text-lg mb-2">Join 95+ Volunteers</h3>
              <p className="text-gray-700">Work with volunteers across India. Create safe spaces. Heal young minds. Build compassionate community.</p>
            </div>
          </div>

          <div className="p-6 bg-orange-50 border border-y-orange rounded-xl">
            <p className="text-gray-700 italic mb-4">Every conversation, every vulnerable moment, every young person choosing healing over fear reminds me why I started.</p>
            <p className="text-y-purple font-semibold">— Pondharshini, Founder of Youthly</p>
          </div>
        </div>
      )}
    </div>
  )
}
