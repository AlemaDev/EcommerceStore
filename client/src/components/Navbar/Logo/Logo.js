import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='ml-5'>
      <Link to={`/`}>
        <img className="md:h-18 md:w-24" src={require('../../../images/logo.png')} alt={"a logo portraying two bags"} />
        <span className="text-yellow-600">E-</span><span className="text-red-600">commerce</span>
      </Link>
    </div>
  )
}

export default Logo