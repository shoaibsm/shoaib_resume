import React from 'react'
import './SoftSkills.scss'
import { MdPlayArrow } from "react-icons/md";

function SoftSkills() {
    return (
        <div className="SoftSkills">
            <div className="SoftSkills__skills">
                <h2 className="SoftSkills__headingText">MERN Stack Skills</h2>
                <ul>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>React.js: Building dynamic and interactive user interfaces.</p>
                        </div>
                    </li>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>Node.js: Server-side JavaScript for scalable applications.</p>

                        </div>
                    </li>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>MongoDB: NoSQL database for flexible and scalable data storage.</p>
                        </div>
                    </li>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>Express.js: Building robust and scalable backend APIs.</p>
                        </div>
                    </li>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>Deployment: Heroku, Netlify for cloud-based application hosting.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="SoftSkills__skills">
                <h2 className="SoftSkills__headingText">Frontend Skills</h2>
                <ul>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>HTML5: Crafting semantic and accessible markup.</p>
                        </div>
                    </li>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>CSS3: Styling with Flexbox, Grid, and responsive design principles.</p>

                        </div>
                    </li>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>Sass: Efficiently styling with the power of Sass preprocessor.</p>
                        </div>
                    </li>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>Tailwind CSS: Building dynamic and interactive user interfaces with utility-first CSS framework.</p>
                        </div>
                    </li>
                    <li>
                        <div className="SoftSkills__skillBox">
                            <div className="icon">
                                <MdPlayArrow />
                            </div>
                            <p>JavaScript (ES6+): Writing modern, efficient, and modular code.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default SoftSkills