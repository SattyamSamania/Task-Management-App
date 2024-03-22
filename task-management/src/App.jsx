import React from 'react'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full bg-[#FFFFFF] flex  '>

      <Dashboard/>
      {/* <Navbar/> */}
      <Home />
    </div>
  )
}

export default App