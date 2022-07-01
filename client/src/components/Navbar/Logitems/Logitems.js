import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const Logitems = () => {
  let newUser = true;
  
  const handleShit = () => {
    console.log(newUser);
  }

  return (
    <ul className='flex flex-wrap items-center mt-11 text-sm'>
      <Link to={{ pathname: '/auth', newUser: true }} onClick={() =>handleShit}><li className="mr-4 hover:text-gray-900 md:mr-6 " >Crea tu cuenta</li></Link>
      <Link to={{ pathname: '/auth', newUser: false }} onClick={() =>handleShit}><li className="mr-4 hover:text-gray-900 md:mr-6 " >Ingresa</li></Link>
      <Link to={'/fgdg'}><li className="mr-4 hover:text-gray-900 md:mr-6 ">Mis compras</li></Link>
      <Link to={'/auth'}><li className="mr-4 hover:text-gray-900 md:mr-6 ">cart</li></Link>
    </ul>
  )
};

export default Logitems;