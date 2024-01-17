import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
function Header() {

  const l = ["text-black", "text-coral-red"]
 
  const [count, setCount] = useState(0)

  const [colore, setColore] = useState({col1 : "text-black", col2 : "text-black", col3 : "text-black"})

  const handellCount =  () => (
    setCount(priv => 1 - priv)
  
  ) 

  useEffect(() => {
    let pretime = setInterval(() => {
      handellCount()
      
      setColore({...colore, col1 : l[count]})
    
      setTimeout(() => {
        setColore({...colore, col2 : l[count]})
      }, 500);
      setTimeout(() => {
        setColore({...colore, col3 : l[count]})
      }, 1000);
      
    }, 1500);

    return(() => (clearInterval(pretime)))
  }, [count])


  return (
    <header className='flex w-full min-h-screen gap-16  padding-l' id='home'>
      <div className='flex flex-col padding-x py-40 relative w-2/5'>
        <p className='text-coral-red mt-10 font-palanquin text-xl font-semibold'>My Portofolio Web Site</p>
        <h1 className='text-8xl mt-10'><span className={`pb-5 pr-5 z-10 whitespace-nowrap relative bg-white`}> <span className={`${colore.col1}`}>My</span> <span className={`${colore.col2} `}>Final</span> <span className={`${colore.col3}`}>Portofolio</span>  </span> <br/><span className='text-coral-red mt-7 inline-block'>review</span></h1>
        <p className='font-palanquin text-2xl text-slate-gray mt-10 leading-10 font-semibold'>
          My name is <span className='text-coral-red'>Aymen Fekir</span> and i'm  <span className='text-coral-red'>front end devoloper</span>  front end devoloper with experience in react and JavaScript,
          I'm a quick learner and collaborate closely with clients to create efficient, scalable, 
          and user-friendly solutions that solve <span className='text-coral-red'>real world problems. </span>
         Let's work together to bring your ideas to life!
          and i hope you like My work
          </p>
      </div>

      <div className='bg-primary min-h-screen w-full flex py-40 justify-end items-center'>
        <img src={logo} alt='photo' width={350} height={400} className='animate-wiggle'/>
      </div>

    </header>
  )
}

export default Header