import React from 'react'
import './Footer.scss'
import { BsFillBriefcaseFill, BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { BiLogoInstagramAlt } from 'react-icons/bi'

function Footer() {
    return (
        <footer className='Footer'>
            <div className="Footer__contactHeading">
                <h2 className='Footer__headingText'>Get in Touch </h2>
            </div>
            <section className="Footer__ContactInfo">
                <div className="Footer__getInTouch">
                    <ul className='flex'>
                        <li className='flex'>
                            <a href="tel:+917057866962">
                                <div className="icon">
                                    <BsFillTelephoneFill />
                                </div>
                                <p>+91 7057866962</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/place/Malegaon, Nashik 423203" target="_blank" rel="noopener noreferrer">
                                <div className="icon">
                                    <ImLocation />
                                </div>
                                <p>Malegaon, Nashik 423203</p>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:shoaib.sm6655@gmail.com">
                                <div className="icon">
                                    <MdEmail />
                                </div>
                                <p>shoaib.sm6655@gmail.com</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://shoaib-sm.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <div className="icon">
                                    <BsFillBriefcaseFill />
                                </div>
                                <p>Shoaib_Personal_Portfolio</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Footer__profileName">
                    <div className="Footer__nameContainer">
                        <h2 className="Footer__nameText"><span>Shoaib</span> Mohammed</h2>
                        <p className='role'>MERN Stack Developer</p>
                    </div>
                </div>
            </section>
            <section className="Footer__socialProfile">
                <ul className='flex'>
                    <li className='flex'>
                        <a href="https://www.linkedin.com/in/shoaib-mohammed95/" target="_blank" rel="noopener noreferrer">
                            <div className="icon">
                                <AiFillLinkedin />
                            </div>
                            <p>Linkedin</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/shoaib.mohammed.71271" target="_blank" rel="noopener noreferrer">
                            <div className="icon">
                                <AiFillFacebook />
                            </div>
                            <p>Facebook</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ansari_sm70/" target="_blank" rel="noopener noreferrer">
                            <div className="icon">
                                <BiLogoInstagramAlt />
                            </div>
                            <p>Instagram</p>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer