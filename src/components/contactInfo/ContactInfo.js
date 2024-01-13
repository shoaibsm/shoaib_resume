import React from 'react'
import './ContactInfo.scss'
import { BsFillBriefcaseFill, BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'

function ContactInfo() {
    return (
        <section className="ContactInfo">
            <div className="ContactInfo__heading">
                <h2 className='ContactInfo__headingText'>Get in Touch </h2>
            </div>
            <hr className='ContactInfo__rule rule' />
            <ul className='flex'>
                <li className='flex'>
                    <a href="tel:+917057866962">
                        <div className="icon">
                            <BsFillTelephoneFill />
                        </div>
                        <p>+91 7057866962</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/maps/place/Malegaon, Nashik 423203" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <ImLocation />
                        </div>
                        <p>Malegaon, Nashik 423203</p>
                    </a>
                </li>
                <li>
                    <a href="mailto:shoaib.sm6655@gmail.com">
                        <div className="icon">
                            <MdEmail />
                        </div>
                        <p>shoaib.sm6655@gmail.com</p>
                    </a>
                </li>
                <li>
                    <a href="https://shoaib-sm.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <BsFillBriefcaseFill />
                        </div>
                        <p>Shoaib_Personal_Portfolio</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default ContactInfo