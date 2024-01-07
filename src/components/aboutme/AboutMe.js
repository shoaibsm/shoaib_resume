import React from 'react'
import './AboutMe.scss'

function AboutMe() {
    return (
        <div className="AboutMe">
            <div className="about-me-heading">
                <h2 className='heading'>About Me</h2>
            </div>
            <hr className='rule' />
            <div className="about-me-desc">
                <p className='about-me'>I'm a dedicated and passionate MERN Stack Developer with a strong foundation in building dynamic and scalable web applications. </p>
            </div>
        </div>
    )
}

export default AboutMe