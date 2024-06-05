import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import DataDiri from './components/DataDiri'
import Recommendation from './components/Recommendation'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/data-diri' element={<DataDiri />} />
        <Route path='/recommendations' element={<Recommendation />} />
      </Routes>
    </Router>
  )
}

export default App