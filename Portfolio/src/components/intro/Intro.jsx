import React from 'react';
import './intro.css';
import 'animate.css'
import AkashImg from '../../assets/AkashImg.jpg';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <>
        <section className="intro-section">
            <div className="intro-content">
                <span className='Hello' >Hello,</span>
                <span className="intro-text animate__animated animate__lightSpeedInLeft">I'm 
                    <span className="intro-name">Akash</span> <br />
                    Front-end Developer
                </span>
                <p className="intro-para">
                    I am a skilled and passionate frontend web developer.  
                </p>
                <Link> <button className='hire-btn' >👜 Hire Me</button> </Link>
            </div>
            <img src= {AkashImg}  className='into-img bg animate__animated animate__fadeInRight'  />
        </section>
    </>
  )
}

export default Intro;
