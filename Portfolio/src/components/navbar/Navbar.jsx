import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className="portfolio-name"> <h3>My Portfolio</h3> </div>
            <div className="menu">
                <Link 
                className='navlinks'
                activeClass='active'
                to='intro'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >Home
                </Link>

                <Link 
                className='navlinks'
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >Skills
                </Link>

                <Link
                 className='navlinks'
                 activeClass='active'
                 to='projects'
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={500}
                >Projects
                </Link>

                <Link
                 className='navlinks'
                 activeClass='active'
                 to='about'
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={500}
                >About
                </Link>

                <Link
                 className='navlinks'
                 activeClass='active'
                 to='contact'
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={500}
                >Contact
                </Link>
            </div>
            <div className="github-btn">
                <button className='git-btn'>
                  <a href="https://github.com/akashsable6007">MY GIT-HUB</a> 
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar;