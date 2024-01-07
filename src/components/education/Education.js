import React from 'react'
import './Education.scss'
import { RiGraduationCapFill } from 'react-icons/ri'

function Education() {
    return (
        <div>
            <div className="Education">
                <div className="education-heading flex">
                    <div className="icon">
                        <RiGraduationCapFill />
                    </div>
                    <h2>Education</h2>
                </div>
                <div className="education-box">
                    <ul>
                        <li>
                            <div className="collage-desc ">
                                <p className='degree'>Electronics and Telecommunication | 2015</p>
                                <p className='collage-name'>Dilkap Reseach Institiute of Engineering, Mumbai</p>
                            </div>
                        </li>
                        <li>
                            <div className="collage-desc ">
                                <p className='degree'>Electronics and Telecommunication | 2012</p>
                                <p className='collage-name'>K.B.H Polytechnic, Malegoan, Nashik</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Education