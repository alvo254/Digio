import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>


<h1 className='pic'> <Link to="/"> Fitness Hero</Link> </h1>
        <ul className='header-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>

        </ul>
    </div>
  )
}

export default Nav