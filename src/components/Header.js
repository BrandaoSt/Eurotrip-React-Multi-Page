import React from 'react'
import Typed from 'react-typed'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-wraper'>
        <div className='main-info'>
            <h1>Viaje com menos planos e mais liberdade</h1>
            <Typed className='typed-text' strings={["França", "Inglaterra", "Itália", "Holanda"]} typeSpeed={40} backSpeed={60} loop/>
            <NavLink to='/contato' className='btn-promo'>Faça já sua reserva</NavLink>
        </div>
      
    </div>
  )
}

export default Header 