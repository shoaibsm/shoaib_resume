import React from 'react'
import './Experience.scss'
import { FaBuilding } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Experience() {

    return (
        <section className='Experience'>
            <h2 className='Experience__heading'>Experience</h2>
            <div className='Experience__container'>
                <div className="Experience__companyContent">
                    <div className="Experience__companyTitle">
                        <div className="Experience__companyIcon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='Experience__companyName'>Cablesmith</h3>
                    </div>
                    <div className='Experience__jobTitle'>
                        <div className="Experience__jobTitleIcon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='Experience__jobProfile'>Software Engineer | April 2021 - Present</p>
                    </div>
                    <p className='Experience__jobSummary'>
                        At Cablesmith, I have worked as a Full Stack Developer, significantly contributing to the development of robust and scalable web applications using the MERN stack, alongside my telecom experience.
                    </p>

                    <p className='Experience__jobDescHeading'>Software Development Responsibilities (1.5 years):</p>
                    <ul className='Experience__jobDesc'>
                        <li>Designed and implemented RESTful APIs using Node.js and Express.js for seamless communication between the frontend and backend.</li>

                        <li>Developed dynamic and responsive user interfaces using React.js, ensuring an optimal user experience across devices.</li>

                        <li>Integrated MongoDB databases to store and manage application data efficiently.</li>

                        <li>Implemented authentication and authorization mechanisms to enhance the security of the applications.</li>

                        <li>Conducted code reviews and provided constructive feedback to maintain code quality.</li>
                    </ul>
                    <p className='Experience__jobDescHeading'>Key Projects:</p>
                    <ul className='Experience__jobDesc'>
                        <li><strong>Case Study Paper Download Application (June 2022 - December 2022):</strong> </li>
                        <li> Built a web application that allows users to download case study papers from Google Drive by entering their email addresses. Technologies used: MongoDB, Express.js, React.js, Node.js.</li>

                        <li><strong>Optical Fiber Network Design Tool (January 2023 - Present):</strong> </li>

                        <li> Developed an interactive tool for designing optical fiber networks using Google Maps API. Users can register and create designs directly on the map. Technologies used: MongoDB, Express.js, React.js, Node.js, Google Maps API.</li>
                    </ul>

                    <p className='Experience__jobDescHeading'>Telecom Responsibilities:</p>
                    <ul className='Experience__jobDesc'>
                        <li>Designed and optimized optical fiber networks to improve efficiency and connectivity.</li>
                        <li>Provided technical expertise and support for optical fiber switch automation.</li>
                        <li>Design In-Building cellular network on iBwave tool.</li>
                    </ul>

                    <p className='Experience__bottomSummary'>
                        Through these experiences, I honed my skills in telecom network design and MERN stack technologies, contributing to the successful delivery of high-quality software solutions and innovative network designs.
                    </p>
                </div>
                <hr className='rule' />
                <div className="Experience__companyContent">
                    <div className="Experience__companyTitle">
                        <div className="Experience__companyIcon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='Experience__companyName'>Micreatel</h3>
                    </div>
                    <div className='Experience__jobTitle'>
                        <div className="Experience__jobTitleIcon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='Experience__jobProfile'>Network Design | Sep 2017 - March 2021</p>
                    </div>
                    <p className='Experience__jobSummary'>
                        As an Network Design Engineer, I desing wireless communication systems using iBwave software. My responsibilities included planning and implementing in-building solutions, deploying DAS. This work aligned with Micratel's commitment to robust in-building wireless network design.
                    </p>
                </div>
                <hr className='rule' />
                <div className="Experience__companyContent">
                    <div className="Experience__companyTitle">
                        <div className="Experience__companyIcon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='Experience__companyName'>Vedang Cellular Services</h3>
                    </div>
                    <div className='Experience__jobTitle'>
                        <div className="Experience__jobTitleIcon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='Experience__jobProfile'>IBS Engineer | Aug 2015 - Aug 2017</p>
                    </div>
                    <p className='Experience__jobSummary'>
                        At Vedang Cellular Services, I served as an IBS Engineer, optimizing wireless communication systems. Deploying DAS, small cells, and repeaters for enhanced coverage. Known for troubleshooting and maintaining in-building networks. seamlessly integrated with outdoor cellular systems.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Experience