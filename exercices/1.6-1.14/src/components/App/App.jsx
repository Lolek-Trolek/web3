import { useState } from 'react'
import Bouton from '../Bouton/Bouton'
import Stats from '../Stats/stats'
import './App.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Bouton onClick={()=>setGood(good+1)} text={"good"}/>
      <Bouton onClick={()=>setNeutral(neutral+1)} text={"neutral"}/>
      <Bouton onClick={()=>setBad(bad+1)} text={"bad"}/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App