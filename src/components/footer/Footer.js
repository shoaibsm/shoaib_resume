import React from 'react'
import './Foorter.scss'
import { BsFillBriefcaseFill, BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { BiLogoInstagramAlt } from 'react-icons/bi'

function Footer() {
    return (
        <div className='Footer'>
            <div className="contact-heading">
                <h2 className='heading'>Get in Touch </h2>
            </div>
            <div className="ContactInfo">
                <div className="get-in-touch">
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
                <div className="profile-name">
                    <div className="name-box">
                        <h2 className="name"><span>Shoaib</span> Mohammed</h2>
                        <p className='role'>MERN Stack Developer</p>
                    </div>
                </div>
            </div>
            <div className="SocialProfile">
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
            </div>
        </div>
    )
}

export default Footer