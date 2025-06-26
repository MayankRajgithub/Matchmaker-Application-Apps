import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import ContactUs from './pages/ContactUs'
import Settings from './pages/Settings'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
        <Header />
        <div className="p-4 mt-5 bg-light">
          <Routes>
            
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
