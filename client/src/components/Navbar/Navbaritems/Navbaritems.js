import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbaritems = () => {
  return (
    <div class='md:flex md:items-center md:justify-between'>
      <ul class='flex flex-wrap items-center mt-3 text-sm text-gray-700  sm:mt-0'>
        <li class="mr-4 hover:text-gray-900 md:mr-6 ">Categorias</li>
        <li class="mr-4 hover:text-gray-900 md:mr-6 ">Ofertas</li>
        <li class="mr-4 hover:text-gray-900 md:mr-6 ">Historial</li>
        <li class="mr-4 hover:text-gray-900 md:mr-6 ">Moda</li>
        <li class="mr-4 hover:text-gray-900 md:mr-6 ">Vender</li>
        <li class="mr-4 hover:text-gray-900 md:mr-6 ">Ayuda</li>
      </ul>
      <ul class='flex flex-wrap items-center mt-3 text-sm sm:mt-0'>
      <Link to={'/auth'}><li class="mr-4 hover:text-gray-900 md:mr-6 " >Crea tu cuenta</li></Link>
      <Link to={'/auth'}><li class="mr-4 hover:text-gray-900 md:mr-6 " >Ingresa</li></Link>
      <Link to={'/auth'}><li class="mr-4 hover:text-gray-900 md:mr-6 ">Mis compras</li></Link>
      <Link to={'/auth'}><li class="mr-4 hover:text-gray-900 md:mr-6 ">cart</li></Link>
      </ul>
    </div>
  )
};

export default Navbaritems;