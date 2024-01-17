import React, { useEffect, useRef, useState } from 'react'
import CardProject from '../tool/CardProject'

import star from '../assets/star.svg'
import { projects } from '../Constants'
function Mywork() {

  const Myref = useRef(null)

  const[isElementVisble, setElementVisble] = useState(false)



  useEffect(() => {
    const observ = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setElementVisble(entry.isIntersecting)
    })

    observ.observe(Myref.current)
  }, [])

  return (
    <section className= {`padding w-full flex ${isElementVisble ? ` animate-opacityw `: ``} flex-col justify-start`} id='MyWork' ref={Myref}>
      <div className=''>
        <h2 className='text-coral-red font-palanquin text-4xl font-semibold'> My first Projects </h2>
        <p className='text-xl text-slate-gray font-montserrat mt-10'> You can take a look to my first project heer and share your opinion with us</p>
      </div>
      <div className='mt-10 grid grid-cols-5 gap-10 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:items-center'>
        {projects.map((project) => (
          <CardProject key={project.label} href={project.url} imgurl={project.imgurl} star={star} rating={4.5} name={project.label} />
        ))}
        
        


      </div>
    </section>
  )
}

export default Mywork