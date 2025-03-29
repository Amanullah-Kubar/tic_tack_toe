import { useState } from 'react'

import Tictaktoe from './components/tictaktoe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tictaktoe />
    </>
  )
}

export default App
