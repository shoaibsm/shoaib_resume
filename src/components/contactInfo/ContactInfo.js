import React from 'react'
import './ContactInfo.scss'
import { BsFillBriefcaseFill, BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'

function ContactInfo() {
    return (
        <div className="ContactInfo">
            <div className="contact-heading">
                <h2 className='heading'>Get in Touch </h2>
            </div>
            <hr className='horizontal-rol' />
            <ul className='flex'>
                <li className='flex'>
                    <div className="icon">
                        <BsFillTelephoneFill />
                    </div>
                    <p>+91 7057866962</p>
                </li>
                <li>
                    <div className="icon">
                        <ImLocation />
                    </div>
                    <p>Malegaon, Nashik 423203</p>
                </li>
                <li>
                    <div className="icon">
                        <MdEmail />
                    </div>
                    <p>shoaib.sm6655@gmial.com</p>
                </li>
                <li>
                    <div className="icon">
                        <BsFillBriefcaseFill />
                    </div>
                    <p>www.shoaib_portfolio.com</p>
                </li>
            </ul>
        </div>
    )
}

export default ContactInfo