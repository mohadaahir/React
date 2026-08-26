import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Greeting,Name} from './Greeting'

function App() {
  // const [count, setCount] = useState(0)
  const name='cali'

  return( <><h1 style={{color:'red'}}>this my first react project {name}{55+6}</h1>
  <p>{44+44} welcome to website</p>
  <User />
  <Greeting/>
  <Name/>
  </>
)
}
function  User(){
  const name="farah"
  return <h2>{name}</h2>
}

export default App
