import React from 'react';
import './project.css';
import ecommers from '../../assets/ecommers.png';
import parallax from '../../assets/parallax.png';
import blog from '../../assets/blog.png';
import productpage from '../../assets/productpage.png';
import portfolio from '../../assets/portfolio.png';

const Project = () => {
  return (
    <>
    <section  id='projects'>
        <div className="project-name"><h3>Projects</h3></div>
        <div className="project-box">
        <div className="project-container">
            <img src={ecommers}  />
            <h3 className='title' >E-Commers Site</h3>
            <div className="project-info">
                <h5>Tech-Stack: Html, Css, Java-Script</h5>
                <p>In this project i created UI of e-comm site.</p>
                <p>Added add to cart function on site.</p>
                <p>To show data on UI in this project the data is passed from JS file.</p>
            </div>
            <a href="https://github.com/akashsable6007/E_Commers_website">Source Code</a>
        </div>
        <div className="project-container">
            <img src={parallax}  />
            <h3 className='title' >Parallax Website</h3>
            <div className="project-info">
                <h5>Tech-Stack: Html, Css</h5>
                <p>This is parallax website.</p>
                <p>Using css properties website having osm effect on client side. While scrolling content up direction background images also changing.</p>
            </div>
            <a href="https://github.com/akashsable6007/Html_Css_Projects/tree/main/05_PARALLAX_WEBSITE">Source Code</a>
        </div>
        <div className="project-container">
            <img src={blog}  />
            <h3 className='title' >Blog Website</h3>
            <div className="project-info">
                <h5>Tech-Stack: Html, Css</h5>
                <p>This is Sigle Page Blog Website.</p>
                <p>Only UI part Created</p>
                <p>I learn from this project Multiple Info how to arrange in any website.</p>
            </div>
            <a href="https://github.com/akashsable6007/Html_Css_Projects/tree/main/11_BLOG_WEBSITE">Source Code</a>
        </div>
        <div className="project-container">
            <img src={productpage}  />
            <h3 className='title' >Shoe Product landing page</h3>
            <div className="project-info">
                <h5>Tech-Stack: Html, Css, React.js</h5>
                <p>This is Shoe Product Landing page UI.</p>
                <p>Only UI part Created</p>
                <p>I learn from this project how to use components in react.</p>
            </div>
            <a href="https://github.com/akashsable6007/React_Projects/tree/main/shoe_brand_page">Source Code</a>
        </div>
        <div className="project-container">
            <img src={portfolio}  />
            <h3 className='title' >Portfolio</h3>
            <div className="project-info">
                <h5>Tech-Stack: React.js, Html, Css</h5>
                <p>In React.js i created my full portfolio.</p>
                <p>Understant how the compoenets work.</p>
                <p>With React.js Code will be well managed and readable.</p>
            </div>
            <a href="https://github.com/akashsable6007/MY_PORTFOLIO/tree/main/Portfolio">Source Code</a>
        </div>
    </div>
    </section>
    </>
  )
}

export default Project;