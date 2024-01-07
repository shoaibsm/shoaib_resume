import React from 'react'
import './Foorter.scss'
import { BsFillBriefcaseFill, BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
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
                            <div className="icon">
                                <BsFillTelephoneFill />
                            </div>
                            <p>+91 7057866962</p>
                        </li>
                        <li>
                            <div className="icon">
                                <ImLocation />
                            </div>
                            <p>Malegaon, Nashik 423203</p>
                        </li>
                        <li>
                            <div className="icon">
                                <MdEmail />
                            </div>
                            <p>shoaib.sm6655@gmial.com</p>
                        </li>
                        <li>
                            <div className="icon">
                                <BsFillBriefcaseFill />
                            </div>
                            <p>www.shoaib_portfolio.com</p>
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
                <ul>
                    <li className='flex'>
                        <div className="icon">
                            <AiFillLinkedin />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <AiFillFacebook />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <FaXTwitter />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <BiLogoInstagramAlt />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer