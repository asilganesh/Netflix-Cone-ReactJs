import React from 'react'
import logo from "../../assets/netflix-logo.png"
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"

const Header = () => {
    console.log(logo)
  return (
    <nav className="header">
        <img src={logo} alt="logo" />

        <div>
            <Link to="/tvShows" >TV Shows</Link>
            <Link to="/tvShows" >Movies</Link>
            <Link to="/tvShows" >Recently Added</Link>
            <Link to="/tvShows" >My List</Link>
        </div>

        <ImSearch />
    </nav>
  )
}

export default Header
