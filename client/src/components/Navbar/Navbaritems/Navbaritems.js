import React from 'react'
import { Link } from 'react-router-dom'

const Navbaritems = () => {
  return (
    <ul className='flex flex-wrap items-center md:mt-4 text-sm text-gray-700  sm:mt-0'>
        <Link to={`/`}><li className="mr-4 hover:text-gray-900 md:mr-6 ">Categorias</li></Link>
        <Link to={`/`}><li className="mr-4 hover:text-gray-900 md:mr-6 ">Ofertas</li></Link>
        <Link to={`/`}><li className="mr-4 hover:text-gray-900 md:mr-6 ">Historial</li></Link>
        <Link to={`/`}><li className="mr-4 hover:text-gray-900 md:mr-6 ">Moda</li></Link>
        <Link to={`/`}><li className="mr-4 hover:text-gray-900 md:mr-6 ">Vender</li></Link>
        <Link to={`/`}><li className="mr-4 hover:text-gray-900 md:mr-6 ">Ayuda</li></Link>
    </ul>
  )
}

export default Navbaritems