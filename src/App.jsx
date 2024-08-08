import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navigation from './navigation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    </>
  )
}

export default App
