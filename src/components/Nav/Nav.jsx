import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      {/* <h1 className='pic'> <Link to="/"> Digio</Link> </h1>
      <ul className='header-list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>

      </ul> */}
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Digio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/dashboard" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Management
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Tm">Add Tm</a></li>
            <li><a class="dropdown-item" href="/Students">Add Student</a></li>
            <li><a class="dropdown-item" href="/courses">Add Courses</a></li>
            <li><a class="dropdown-item" href="/review">Review Student</a></li>
          </ul>
        </li>
{/* 
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Dashboard</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/reviews">reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav