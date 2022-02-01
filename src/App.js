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
  /* eslint-disable jsx-a11y/anchor-is-valid */

  function App() {
    return (
      <div>
        <header>
          <Router>
            <Navbar />
            <Header />
            <div className='pages'>
              <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route path="/destinos" element={<Destinos />} />
                <Route path="/promocoes" element={<Promocoes />} />
                <Route path="/contato" element={<Contato />} />
              </Routes>
            </div>
          </Router>
        </header>
        <Avaliacoes/>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }

export default App;
