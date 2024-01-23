// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
import Navbar from './components/navbar'
import Featured from './components/Featured'

function App() {
  return (
    <div className="flex flex-col w-screen h-screen p-6 font-poppins text-gray-800">
      <Navbar />
      <Featured/>
    </div>
  )
}

export default App
