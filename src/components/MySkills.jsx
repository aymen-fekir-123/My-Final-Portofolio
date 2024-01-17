
import SkillCard from '../tool/SkillCard'
import { skills } from '../Constants'
import { useEffect, useRef, useState } from 'react'



function MySkills() {

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
    <section className={`padding flex gap-10 justify-center flex-wrap ${isElementVisble ? `animate-opacityw` : ``}`} id='MySkils' ref={refwork}>
      {skills.map((skill) => (
        <SkillCard key={skill.label} iconurl={skill.icon} label={skill.label} description={skill.description}/>

      ))}
  
    </section>
  )
}

export default MySkills