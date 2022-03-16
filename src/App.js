import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Destinos from './components/Destinos'
import Promocoes from './components/Promocoes'
import Contato from './components/Contato'
import Avaliacoes from './components/Avaliacoes'
import ScrollTop from './components/ScrollTop'
import Login from './components/Login'
import ForgotPassword from './components/Forgot'
import Register from './components/Register'
/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <div>
      
      <Router>
      <ScrollTop/>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/destinos" element={<Destinos/>} />
          <Route path="/promocoes" element={<Promocoes/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot" element={<ForgotPassword/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
      <Avaliacoes />
      <Footer />
    </div>
  )
}

export default App;
