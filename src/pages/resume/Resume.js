import React from 'react'
import './Resume.scss'
import LeftPart from '../../components/left_part/LeftPart'
import RightPart from '../../components/right_part/RightPart'
import Footer from '../../components/footer/Footer'

function Resume() {

    return (
        <section className='Resume'>
            <div className="Resume__resumeContainer" >
                <LeftPart />
                <RightPart />
                <Footer />
            </div>
        </section>
    )
}

export default Resume