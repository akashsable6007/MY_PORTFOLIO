import React from 'react';
import './project.css';
import parallax from '../../assets/parallax.png';
import portfolio from '../../assets/portfolio.png';
import weather from '../../assets/Weather-app.png';
import resto from '../../assets/resto.png';
import ecommers from '../../assets/ecommers.png';

const Project = () => {
  return (
    <>
    <section  id='projects'>
        <div className="project-name"><h3>Projects</h3></div>
        <div className="project-box">
        <div className="project-container">
            <img src={resto}  />
            <h3 className='title'>Restaurant Menu Website</h3>
            <div className="project-info">
                <h5>Tech-Stack: Html, Css, React.js </h5>
                <p>In this project According to day sheduale the menu is created.</p>
            </div>
            <a href="https://restaurant-website-using-react-hooks.vercel.app/">LIVE DEMO</a>
        </div>
        <div className="project-container">
            <img src={parallax}  />
            <h3 className='title' >Parallax Website</h3>
            <div className="project-info">
                <h5>Tech-Stack: Html, Css</h5>
                <p>In this project the background changes while scrolling website.</p>
            </div>
            <a href="https://05-parallax-website.vercel.app/">LIVE DEMO</a>
        </div>
        <div className="project-container">
            <img src={weather}  />
            <h3 className='title' >Weather-App</h3>
            <div className="project-info">
                <h5>Tech-Stack: Html, Css, React.js, Tailwind css</h5>
                <p>In the project we chacke weather condition of any place. In this real time api integration is done.</p>
            </div>
            <a href="https://weather-app-ecru-kappa-13.vercel.app/">LIVE DEMO</a>
        </div>
        <div className="project-container">
            <img src={ecommers}  />
            <h3 className='title' >E-Commers Site Add to Cart Functionilty</h3>
            <div className="project-info">
                <h5>Tech-Stack: Html, Css, Javascript</h5>
                <p>It Task project assign to me to create frontend part of Home page and implement add to cart function.</p>
            </div>
            <a href="https://e-commers-website-add-to-cart-gwzjtucbe-akashsables-projects.vercel.app/">LIVE DEMO</a>
        </div>
        <div className="project-container">
            <img src={portfolio}  />
            <h3 className='title' >Portfolio</h3>
            <div className="project-info">
                <h5>Tech-Stack: React.js, Html, Css</h5>
                <p>Created a personal portfolio website to showcase professional experience, skills, and projects.</p>
            </div>
            <a href="https://portfolio-hainqiugs-akashsables-projects.vercel.app/">LIVE DEMO</a>
        </div>
    </div>
    </section>
    </>
  )
}

export default Project;