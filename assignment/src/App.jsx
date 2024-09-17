import { Profiler, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Profile } from './Components/Profile'
// import { Backgroundchanger } from './Components/Backgroundchanger'

function App() {
  const [colors,setColor] = useState('')

  useEffect(()=>{
    document.body.style.background=colors;
  },[colors])
  const changeBG= (e)=>{
    setColor(e.target.innerText.toLowerCase())
  }

  return (   
      <div className='span-Container'>
        {/* <Profile Profilename={"Manavdeep Singh"} age={"21"} countryname={"india"} followercount={"10K"} likescount={"220K"} imagecount={"1K"} > </Profile> */}
        <span onClick={changeBG}>Red</span>
        <span onClick={changeBG}>Yellow</span>
        <span onClick={changeBG}>Purple</span>
        <span onClick={changeBG}>Green</span>
        <span onClick={changeBG}>Blue</span>
        <span onClick={changeBG}>Orange</span>
      </div>
  )
}
export default App
