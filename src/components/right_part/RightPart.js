import React from 'react'
import './RightPart.scss'
import Experience from '../experience/Experience';
import SoftSkills from '../softSkills/SoftSkills';
import Education from '../education/Education';

function RightPart() {
    return (
        <div className='RightPart'>
            <SoftSkills />
            <hr className='rule' />
            <Experience />
            <hr className='rule' />
            <Education />
        </div>
    )
}

export default RightPart