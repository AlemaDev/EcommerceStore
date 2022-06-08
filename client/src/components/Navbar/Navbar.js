import React from 'react';
import { Link } from 'react-router-dom';

import Navbaritems from './Navbaritems/Navbaritems';
import Searchbar from './Searchbar/Searchbar';

const Navbar = () => {
  return (
    <div>
      <div className='md:flex md:justify-between'>
        <div className="">
          <Link to={`/`}>
          <img className="" src={require('../../images/logo.png')} alt={"a logo portraying an aeroplane"} />
              <h2 className="text-yellow-600">EcommerceStore</h2>
          </Link>
        </div>
        <Searchbar/>
      </div>
        
      <Navbaritems/>
    </div>
  )
};



export default Navbar;