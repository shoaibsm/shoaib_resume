import React from 'react'
import './AboutMe.scss'

function AboutMe() {
    return (
        <section className="AboutMe">
            <div className="AboutMe__heading">
                <h2 className='AboutMe__headingText'>About Me</h2>
            </div>
            <hr className='AboutMe__rule rule' />
            <div className="AboutMe__desc">
                <p className='AboutMe__text'>I'm a dedicated and passionate MERN Stack Developer with a strong foundation in building dynamic and scalable web applications. </p>
            </div>
        </section>
    )
}

export default AboutMe