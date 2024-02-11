import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-name">
            <h3>About Me and Education</h3>
          </div>
          <div className="about-info">
          <table border="8px" cellspecing="10" cellpadding="10" id="table">
            <tr>
              <th>Position/course</th>
              <th>College/School</th>
              <th>Percentage</th>
              <th>Passing Year</th>
            </tr>
            <tr>
              <th>10th</th>
              <td>Gajanan vidyalay</td>
              <td>86.20%</td>
              <td>2017</td>
            </tr>
            <tr>
              <th>12th</th>
              <td>Govt.College of Arts and Science</td>
              <td>61.36%</td>
              <td>2019</td>
            </tr>
            <tr>
              <th>B-Tech</th>
              <td>MIT college of Engg</td>
              <td>77%</td>
              <td>2023</td>
            </tr>
          </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
