import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const Logitems = () => {
  return (
    <ul class='flex flex-wrap items-center mt-11 text-sm'>
      <Link to={'/auth'}><li class="mr-4 hover:text-gray-900 md:mr-6 " >Crea tu cuenta</li></Link>
      <Link to={'/auth'}><li class="mr-4 hover:text-gray-900 md:mr-6 " >Ingresa</li></Link>
      <Link to={'/auth'}><li class="mr-4 hover:text-gray-900 md:mr-6 ">Mis compras</li></Link>
      <Link to={'/auth'}><li class="mr-4 hover:text-gray-900 md:mr-6 ">cart</li></Link>
    </ul>
  )
};

export default Logitems;