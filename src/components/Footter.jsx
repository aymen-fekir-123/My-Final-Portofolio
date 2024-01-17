
import React , {useEffect, useState, useRef} from 'react'
import logo from '../assets/logo.svg'

import { footerLinks, sociallicon } from '../Constants'


function Footter() {

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
    <footer className={`bg-black padding flex justify-start gap-20 ${isElementVisble ? `animate-opacityw`: ``}`} id='Contect_Us' ref={refwork}>
      <div className=' text-white w-[30%]'>
        <div className='flex gap-5 items-center '>
          <img src={logo} alt='logo' className='w-10 h-10'/>
          <h2 className='text-xl font-semibold font-palanquin'>My Portofolio</h2>
        </div>
        <p className='mt-10 text-lg leading-10 font-planquin'>
            You Also Can Contact Us in Soicial Medea Like Facebook Instgram And Twitter We Are Very Happy To Receive your opinion About Our Work And About Us 
        </p>
        <div className='mt-10 flex gap-6'>
          {sociallicon.map((icon) => (
            
            <div key={icon.label} className='w-10 h-10 bg-white rounded-full cursor-pointer '>
                <a href={icon.href} className=' w-full h-full flex justify-center items-center' target='_blank'>
                  <img src={icon.url}  />
                </a>

            </div>
            
            
         
          ))}
        </div>

        
      </div>
      <div className='flex justify-evenly w-[70%]'>
          {footerLinks.map((fotter, index) => (
            <div key={index}>
              <h4 className='text-xl font-palanquin text-white mt-7'>{fotter.title}</h4>
              <ul className='list-none'>
                {fotter.links.map((link, index) => (
                  <li key={index} className='text-lg text-slate-gray mt-5'>
                    <a href={link.link} className='cursor-pointer hover:text-white-400 transition-colors' target='_blank'>{link.name}</a>
                  </li>
                ))}
              </ul>
    
            </div>
          ))}
        </div>
    </footer>
  )
}

export default Footter