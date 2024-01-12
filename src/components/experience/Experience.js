import React from 'react'
import './Experience.scss'
import { FaBuilding } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Experience() {
    return (
        <div className='Experience'>
            <h2 className='experience-heading'>Experience</h2>
            <div className='experience-container'>
                <div className="company">
                    <div className="company-title">
                        <div className="company-icon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='company-name'>Cablesmith</h3>
                    </div>

                    <div className='job-title'>
                        <div className="job-title-icon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='job-profile'>Software Engineer | Jan 2022 - Present</p>
                    </div>
                    <p className='job-summary'>
                        As a Full Stack Developer at Company Name, I played a key role in building robust and scalable web applications using the MERN stack.
                    </p>
                    <p className='job-desc-heading'>My responsibilities included:</p>
                    <ul className='job-desc'>
                        <li>Collaborating with cross-functional teams to gather and define project requirements.</li>
                        <li>Designing and implementing RESTful APIs using Node.js and Express.js for seamless communication between the frontend and backend.</li>
                        <li>Developing dynamic and responsive user interfaces using React.js, ensuring an optimal user experience across devices.</li>
                        <li>Integrating MongoDB databases to store and manage application data efficiently.</li>
                        <li>Implementing authentication and authorization mechanisms to enhance the security of the applications.</li>
                        <li>Optimizing application performance and addressing any scalability issues.</li>
                        <li>Conducting code reviews and providing constructive feedback to maintain code quality and standards.</li>
                    </ul>
                    <p className='bottom-summary'>
                        Through these experiences, I honed my skills in MERN stack technologies and contributed to the successful delivery of high-quality software solutions.
                    </p>
                </div>
                <hr className='rule' />
                <div className="company">
                    <div className="company-title">
                        <div className="company-icon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='company-name'>Micreatel</h3>
                    </div>
                    <div className='job-title'>
                        <div className="job-title-icon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='job-profile'>Network Design | Sep 2017 - Dec 2021</p>
                    </div>
                    <p className='job-summary'>
                        As an IBS Engineer at Micratel Solutions, I led the optimization of wireless communication systems using iBwave Design software. My role involved planning and implementing in-building solutions, deploying DAS, small cells, and repeaters for precise equipment placement. Leveraging iBwave's simulation tools, I ensured reliable network performance, aligning with Micratel's commitment to robust in-building wireless network design.
                    </p>
                </div>
                <hr className='rule' />
                <div className="company">
                    <div className="company-title">
                        <div className="company-icon">
                            <FaBuilding className='icon' />
                        </div>
                        <h3 className='company-name'>Vedang Cellular Services</h3>
                    </div>
                    <div className='job-title'>
                        <div className="job-title-icon">
                            <BsFillBriefcaseFill className='icon' />
                        </div>
                        <p className='job-profile'>IBS Engineer | Aug 2015 - Aug 2017</p>
                    </div>
                    <p className='job-summary'>
                        At Vedang Cellular Services, I served as a key IBS Engineer, optimizing wireless communication systems in diverse structures. Specializing in telecommunications, I design and implement wireless solutions, deploying DAS, small cells, and repeaters for enhanced coverage. Known for troubleshooting and maintaining in-building networks seamlessly integrated with outdoor cellular systems, meeting connectivity demands in diverse environments.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience