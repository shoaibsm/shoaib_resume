import React from 'react'
import './Resume.scss'
import LeftPart from '../components/left_part/LeftPart'
import RightPart from '../components/right_part/RightPart'
import Footer from '../components/footer/Footer'

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Resume() {

    const printDocument = () => {
        const input = document.getElementById('resume-box');

        html2canvas(input, {
            width: input.scrollWidth, // Adjusting width to the scrollWidth of the element
            windowWidth: document.documentElement.offsetWidth,
            scale: window.devicePixelRatio, // Adjusting scale based on device pixel ratio
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0, 210, 0, '', 'NONE');
                pdf.save("resume.pdf");
            });
    }


    return (
        <div className='Resume'>
            <div className="resume-box" id="resume-box">
                <LeftPart />
                <RightPart />
                <Footer />
            </div>
            <div className="cv-btn" onClick={printDocument}>
                <p className='btn-text'>Download CV</p>
            </div>
        </div>
    )
}

export default Resume