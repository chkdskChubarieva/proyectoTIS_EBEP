import React from 'react'
import BotonNavbar from './BotonNavbar'

const Navbar = ({ botones = [] }) => {
  return (
    <div className="flex items-center justify-center h-12 fila-2 bg-slate-200">
      <ul className="flex items-center h-full gap-2 font-semibold text-md text-slate-500 sm:gap-4">
        {botones.map((boton, index) => (
          <BotonNavbar
            key={index}
            nombreBoton={boton.nombreBoton}
            hrefBoton={boton.hrefBoton}
          />
        ))}
      </ul>
    </div>
  )
}

export default Navbar
