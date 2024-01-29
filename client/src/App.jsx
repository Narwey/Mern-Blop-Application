import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SingIn'
import SignUp from './pages/SingUp'
import Header from './components/Header'

export default function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path ="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
  )
}
