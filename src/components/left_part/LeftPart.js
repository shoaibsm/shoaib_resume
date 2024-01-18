import React from 'react'
import './LeftPart.scss'
import Avatar from '../avatar/Avatar'
import AboutMe from '../aboutme/AboutMe'
import ContactInfo from '../contactInfo/ContactInfo'
import SocialProfile from '../socialProfile/SocialProfile'

function LeftPart() {
    return (
        <div className='LeftPart'>
            <Avatar />
            <AboutMe />
            <ContactInfo />
            <SocialProfile />

        </div>
    )
}

export default LeftPart