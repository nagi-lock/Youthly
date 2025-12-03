import React, {useState, useEffect} from 'react'

export default function Carousel({images}){
  const [i, setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setI(s => (s+1)%images.length), 4500)
    return ()=> clearInterval(t)
  },[images.length])

  return (
    <div className="relative overflow-hidden rounded-xl shadow-md">
      {images.map((img, idx)=> (
        <img key={idx} src={img} alt={`slide-${idx}`} className={`w-full h-64 md:h-96 object-cover transition-transform duration-700 ${idx===i? 'translate-x-0 opacity-100 relative' : 'translate-x-full opacity-0 absolute inset-0'}`} />
      ))}
      <div className="absolute bottom-4 left-4 bg-white/80 text-sm px-3 py-1 rounded-md backdrop-blur">Showing {i+1}/{images.length}</div>
      <div className="absolute right-4 top-4 flex gap-2">
        {images.map((_, idx)=> (
          <button key={idx} onClick={()=> setI(idx)} className={`w-3 h-3 rounded-full ${idx===i? 'bg-y-orange' : 'bg-white/60'}`}/>
        ))}
      </div>
    </div>
  )
}
