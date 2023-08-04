import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
<Link to={"/signup"}>Signup</Link>

<Link to={"/login"}>LogIn</Link>
<Link to={"/dashboard"}>Dashboard</Link>

    </div>
  )
}
