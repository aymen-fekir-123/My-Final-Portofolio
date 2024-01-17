import React, { useEffect, useRef, useState } from 'react'
import { project3d_2 } from '../assets/images'

function Faverote() {

  const refwork = useRef(null)

  const[isElementVisble, setElementVisble] = useState(false)



  useEffect(() => {
    const observ = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setElementVisble(entry.isIntersecting)
    })

    observ.observe(refwork.current)
  }, [])

  return (
    <section className={`padding flex xl:justify-start items-center gap-20 xl:flex-row flex-col ${isElementVisble ? `animate-opacityw` : ``}`} id='MyFavorite' ref={refwork}>
      <div className= 'w-2/5' >
        <h2 className='font-planquin text-4xl font-semibold text-coral-red'>My faverote Project</h2>
        <p className='mt-10 font-montserrat text-xl text-slate-gray font-semibold leading-7'>this might be the <span className='text-coral-red'>faverote Project</span> , you take look in this project and you can share your opinion, it's 3d Project using <span className='text-coral-red '>React fiber three js react moition and gsap</span></p>
        <p className='mt-16 font-montserrat text-xl text-slate-gray font-semibold leading-7'>Our dedication to detail and excellence ensures your satisfaction</p>
      </div>
      <div >
        <a href='https://deft-heliotrope-5cdb0b.netlify.app/' target='_blank' className='w-full h-full cursor-pointer flex justify-center'>
          <img src={project3d_2} alt='imgphotto'  className='rounded-xl w-[600px] h-[400px] cursor-pointer hover:scale-110 transition-transform'/>
        </a>
        
      </div>
    </section>
  )
}

export default Faverote