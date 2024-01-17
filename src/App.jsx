import Faverote from "./components/Faverote"
import Footter from "./components/Footter"
import Header from "./components/Header"
import MySkills from "./components/MySkills"
import Mywork from "./components/Mywork"
import NavBar from "./components/NavBar"

import { useRef, useState, useEffect } from "react"




function App() {

 
  // const MyRef = useRef(null)
  // const [ElemntVisible, setElemntVisible] = useState(false)
  // useEffect(() => {
  //   const observ = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setElemntVisible(entry.isIntersecting)
  //   })
  //   observ.observe(MyRef.current)
    
  // }, [])

  

  return (

    


   
    
      <main className="relative w-full" >
          <NavBar/>
          <Header/>
          <Mywork/>
          <Faverote/>
          <MySkills/>
          <Footter/>
        

      </main>
    
    
  )
    
  
}

export default App
