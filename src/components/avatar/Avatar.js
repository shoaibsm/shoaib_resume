import React from 'react'
import './Avatar.scss'
import profileImg from '../../assets/profile.jpg'

function Avatar() {
    return (
        <section className='Avatar'>
            <div className="Avatar__imgContainer">
                <img className='Avatar__profileImg' src={profileImg} alt="profile_image" />
            </div>
            <div className="Avatar__nameContainer">
                <div className="Avatar__nameBox">
                    <h2 className="Avatar__name"><span>Shoaib</span> Mohammed</h2>
                    <p className='Avatar__role'>MERN Stack Developer</p>
                </div>
            </div>
        </section>
    )
}

export default Avatar