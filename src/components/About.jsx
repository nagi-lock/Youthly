import React, { useState } from 'react'

export default function About(){
  const [activeTab, setActiveTab] = useState('who-we-are')

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <button onClick={() => setActiveTab('who-we-are')} style={{
          backgroundColor: activeTab === 'who-we-are' ? '#5b21b6' : '#e9d5ff',
          color: activeTab === 'who-we-are' ? 'white' : '#5b21b6'
        }} className="px-4 py-2 rounded-lg transition-colors font-medium">Who We Are</button>
        <button onClick={() => setActiveTab('what-we-do')} style={{
          backgroundColor: activeTab === 'what-we-do' ? '#5b21b6' : '#e9d5ff',
          color: activeTab === 'what-we-do' ? 'white' : '#5b21b6'
        }} className="px-4 py-2 rounded-lg transition-colors font-medium">What We Do</button>
        <button onClick={() => setActiveTab('founder')} style={{
          backgroundColor: activeTab === 'founder' ? '#5b21b6' : '#e9d5ff',
          color: activeTab === 'founder' ? 'white' : '#5b21b6'
        }} className="px-4 py-2 rounded-lg transition-colors font-medium">About Founder</button>
        <button onClick={() => setActiveTab('message')} style={{
          backgroundColor: activeTab === 'message' ? '#5b21b6' : '#e9d5ff',
          color: activeTab === 'message' ? 'white' : '#5b21b6'
        }} className="px-4 py-2 rounded-lg transition-colors font-medium">Message</button>
      </div>

      {activeTab === 'who-we-are' && (
        <div className="space-y-4 fade-in">
          <h2 className="text-2xl font-bold text-y-purple">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">Youthly started in March 2025 with one goal: support young people facing mental health struggles, identity questions, low self-worth, and insecurity. We saw therapy staying out of reach for many. In smaller towns, fear and lack of awareness stopped young people from seeking help.</p>
          <p className="text-gray-700 leading-relaxed">We built safe spaces where young people speak up, heal, grow, and become who they want to be. Healing came first. Then we realized something bigger: every struggling young person holds potential to lead, create change, and shape a braver India.</p>
          <p className="text-gray-700 leading-relaxed">That pushed us to build volunteering culture. We nurture empathy. We strengthen the urge to give. We develop compassionate leaders who tackle community problems in any field they choose. Pushed us to build a vibrant volunteering culture.
</p>
          <p className="text-gray-700 leading-relaxed font-semibold">We work in education and environment too. Right now, mental health stays our focus. We help young people become their strongest, happiest selves. We help young people become the strongest and best version of themselves.</p>
        </div>
      )}

      {activeTab === 'what-we-do' && (
        <div className="space-y-4 fade-in">
          <h2 className="text-2xl font-bold text-y-purple">What We Do</h2>
          <p className="text-gray-700 leading-relaxed">We create safe spaces where young people open up, understand themselves, and grow strong. We run Opening-Up Circles. We host storytelling events. We do reflective activities and campaigns. We host self-growth sessions focused on introspection, healing, confidence, and emotional awareness.</p>
          <p className="text-gray-700 leading-relaxed">Everything we offer is free. We reach people who cannot afford therapy. We reach areas lacking mental health awareness. Our main aim is to impart mental health education and awareness in the remotest cities and villages.</p>
          <p className="text-gray-700 leading-relaxed">We host guest sessions that inspire young people to volunteer and contribute the society positively. Today, 95 volunteers from across India support us to achieve our mission. They bring empathy and positive change to young lives.</p>
          <p className="text-gray-700 leading-relaxed">We work online now. Soon we're planning to open our doors offline. We are working towards becoming a nonprofit organization by next year.</p>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg mt-4">
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-y-purple">What makes us different:</span> We use research and data. We work with qualified mental health professionals who guide our event design of our events, campaigns, and agendas - ensuring everything we do is meaningful, responsible, and crafted to meet the real needs of young people. We are not another social media community. We are a passionate, informed, and committed movement shaping a braver India free from mental health crisis.</p>
          </div>
        </div>
      )}

      {activeTab === 'founder' && (
        <div className="space-y-4 fade-in">
          <h2 className="text-2xl font-bold text-y-purple">About the Founder</h2>
          <p className="text-gray-700 leading-relaxed"><span className="font-semibold">Pondharshini</span> founded this beautiful community called Youthly. She struggled with mental health issues for years. Confusion, fear, helplessness came because of lack of awareness, guidance and support.</p>
          <p className="text-gray-700 leading-relaxed">Stigma, hesitation and silence around therapy isolated her. She watched others suffer the same pain. That sparked a resistance. Resistance grew into a movement. The movement became Youthly.</p>
          <p className="text-gray-700 leading-relaxed">Meeting young people from across India gave her the greatest gift of her life. Listening to their stories, watching them open with courage, sharing their dreams and   watching them bloom into who they truly are. All these moments are her biggest motivation to continue building this space with love and purpose.</p>
          <p className="text-gray-700 leading-relaxed font-semibold italic">No young person should feel helpless or the inability to heal because of stigma, lack of awareness, or the absence of a safe space.</p>
        </div>
      )}

      {activeTab === 'message' && (
        <div className="space-y-4 fade-in">
          <h2 className="text-2xl font-bold text-y-purple">Message from the Founder</h2>
          <blockquote className="border-l-4 border-y-orange pl-6 italic text-gray-700 space-y-4">
            <p>To every young person reading this,</p>
            <p>You are not alone. No matter what you face, no matter how heavy your thoughts feel, no matter how lost you think you are. You'll find your way back to yourself. I wished I had a space where I could open up without fear, without judgement and without shame. So today, I want Youthly to be that open space for you.</p>
            <p>Healing is not a straight line. It is messy, confusing, painful, and beautiful all at once. You don't have to walk that path in silence. You deserve support. You deserve hope. You deserve a community that sees you, celebrates you, and reminds you of your strength.</p>
            <div className="bg-orange-50 p-4 rounded-lg border border-y-orange not-italic">
              <p className="text-y-purple font-semibold mb-2">My message to you is simple:</p>
              <p className="text-y-purple font-bold">Be brave enough to feel, brave enough to heal, and brave enough to become who you truly are.</p>
            </div>
            <p>You have a purpose. You matter. You deserve to build a life that feels like home.</p>
            <p>Youthly exists so that no young person ever has to struggle in the dark the way I did once. I believe in you, even on days you do not believe in yourself. Through Youthly, we're committed to grow, heal, give, and rise together.</p>
          </blockquote>
        </div>
      )}
    </section>
  )
}
