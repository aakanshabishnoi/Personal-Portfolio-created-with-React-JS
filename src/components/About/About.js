import React, {useContext} from 'react'

import './About.css'
import{ThemeContext} from '../../contexts/ThemeContext'
import{aboutData} from '../../data/aboutData'

function About() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className="about" id="about">
      <div className="line-styling">
        <div className="style-circle"></div>
        <div className="style-circle"></div>
        <div className="style-line"></div>
      </div>

      <div className="about-body">
        <div className="about-description">
          <h2>{aboutData.title}</h2>
          <p>{aboutData.description1}<br></br> {aboutData.description2}</p>
        </div>

        <div className="about-img">
          <img 
          src={aboutData.img==1? theme.aboutimg1: theme.aboutimg2}
          alt="" />
        </div>
      </div>
    </div>
  )
}

export default About