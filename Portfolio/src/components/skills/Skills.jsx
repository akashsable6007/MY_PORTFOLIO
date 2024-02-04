import React from 'react';
import './skills.css';
import 'animate.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.avif';


const Skills = () => {
  return (
    <>
        <section className='skills' id='skills'>
            <div className="skills-name"><h3>Skills</h3></div>
            <div className="skill-container">
                <div className="html-skill">
                    <div className="html-name animate__animated animate__bounceInLeft">HTML
                    <img src={html} className='html-img' />
                    </div>
                </div>
                <div className="html-skill">
                    <div className="css-name animate__animated animate__bounceInDown">CSS
                    <img src={css} className='css-img' />
                    </div>
                </div>
                <div className="html-skill">
                    <div className="js-name animate__animated  animate__flip">Java-Script
                    <img src={js} className='js-img' />
                    </div>
                </div>
                <div className="html-skill">
                    <div className="react-name animate__animated animate__bounceInUp">REACT.JS
                    <img src={react} className='react-img' />
                    </div>
                </div>
                <div className="html-skill">
                    <div className="redux-name animate__animated animate__bounceInRight">REDUX
                    <img src={redux} className='redux-img' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills;