import React from 'react'
import './SocialProfile.scss'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
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
                    <div className="icon">
                        <AiFillLinkedin />
                    </div>
                    <p>Linkedin</p>
                </li>
                <li>
                    <div className="icon">
                        <AiFillFacebook />
                    </div>
                    <p>Facebook</p>
                </li>
                <li>
                    <div className="icon">
                        <FaXTwitter />
                    </div>
                    <p>Twitter</p>
                </li>
                <li>
                    <div className="icon">
                        <BiLogoInstagramAlt />
                    </div>
                    <p>Instagram</p>
                </li>
            </ul>
        </div>
    )
}

export default SocialProfile