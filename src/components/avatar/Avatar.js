import React from 'react'
import './Avatar.scss'
import profileImg from '../../assets/profile.jpg'

function Avatar() {
    return (
        <div className='Avatar'>
            <div className="img-container">
                <img className='profile-img' src={profileImg} alt="" />
            </div>
            <div className="name-container">
                <div className="name-box">
                    <h2 className="name"><span>Shoaib</span> Mohammed</h2>
                    <p className='role'>MERN Stack Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Avatar