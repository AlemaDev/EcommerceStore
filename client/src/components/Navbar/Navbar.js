import React from 'react';
import { Link } from 'react-router-dom';
import Navbaritems from './Navbaritems/Navbaritems';

import Logitems from './Logitems/Logitems';
import Searchbar from './Searchbar/Searchbar';
import Logo from './Logo/Logo';

const Navbar = () => {
  return (
    <div className='md:flex md:justify-between'>
      <Logo />
      <div className='md:flex flex-col'>
        <Searchbar/>
        <Navbaritems />        
      </div>
      <div className='md:flex flex-col'>
        <Link to={`/`} class='mr-10 mt-4 mb-0'><span className="text-xl text-yellow-600">Encontra aca lo </span><span className="text-xl text-red-600">mejor de CYBERLUNES</span></Link>
        <Logitems/>
      </div>
    </div>
  )
};



export default Navbar;