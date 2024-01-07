import React from 'react'
import './SocialProfile.scss'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { BiLogoInstagramAlt } from 'react-icons/bi'

function SocialProfile() {
    return (
        <div className="SocialProfile">
            <div className="social-heading">
                <h2 className='heading'>Social Profiles</h2>
            </div>
            <hr className='horizontal-rol' />

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
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <BiLogoInstagramAlt />
                        </div>
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialProfile