import React from 'react'
import './SocialProfile.scss'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub } from "react-icons/fa";
import { AiFillFacebook } from 'react-icons/ai'
import { BiLogoInstagramAlt } from 'react-icons/bi'

function SocialProfile() {
    return (
        <section className="SocialProfile">
            <div className="SocialProfile__heading">
                <h2 className='SocialProfile__headingText'>Social Profiles</h2>
            </div>
            <hr className='rule' />

            <ul className='flex'>
                <li className='flex'>
                    <a href="https://www.linkedin.com/in/shoaib-mohammed95/" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <AiFillLinkedin />
                        </div>
                        <p>Linkedin</p>
                    </a>
                </li>

                <li className='flex'>
                    <a href="https://github.com/shoaibsm/shoaib_resume" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <FaGithub />
                        </div>
                        <p>Github</p>
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
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <BiLogoInstagramAlt />
                        </div>
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default SocialProfile