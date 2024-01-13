import React from 'react'
import './Education.scss'
import { RiGraduationCapFill } from 'react-icons/ri'

function Education() {
    return (
        <section className="Education">
            <div className="Education__heading flex">
                <div className="icon">
                    <RiGraduationCapFill />
                </div>
                <h2>Education</h2>
            </div>
            <div className="Education__content">
                <ul>
                    <li>
                        <div className="Education__collageDesc">
                            <p className='Education__degree'>Electronics and Telecommunication | 2015</p>
                            <p className='Education__collageName'>Dilkap Reseach Institiute of Engineering, Mumbai</p>
                        </div>
                    </li>
                    <li>
                        <div className="Education__collageDesc ">
                            <p className='Education__degree'>Electronics and Telecommunication | 2012</p>
                            <p className='Education__collageName'>K.B.H Polytechnic, Malegoan, Nashik</p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Education