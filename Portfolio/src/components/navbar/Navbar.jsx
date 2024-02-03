import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className="portfolio-name"> <h3>My Portfolio</h3> </div>
            <div className="menu">
                <Link className='navlinks'>Home</Link>
                <Link className='navlinks' >Skills</Link>
                <Link className='navlinks' >Projects</Link>
                <Link className='navlinks' >Contact</Link>
            </div>
            <div className="github-btn">
                <button className='git-btn'> MY GIT-HUB</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar;