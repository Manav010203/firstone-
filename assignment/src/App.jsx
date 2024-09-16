import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex center items-center">
        <Profile Profilename={"Manavdeep Singh"} age={"21"} countryname={"india"} followercount={"10K"} likescount={"220K"} imagecount={"1K"} > </Profile>
      </div>
    </>
  )
}

export default App
