import React from 'react'
import './Resume.scss'
import LeftPart from '../components/left_part/LeftPart'
import RightPart from '../components/right_part/RightPart'
import Footer from '../components/footer/Footer'

function Resume() {

    return (
        <div className='Resume'>
            <div className="resume-box" >
                <LeftPart />
                <RightPart />
                <Footer />
            </div>
        </div>
    )
}

export default Resume