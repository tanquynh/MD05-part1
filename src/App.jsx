import { useState } from 'react'
import './App.css'
import Dashboard from './pages/private/admin-homepage/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
