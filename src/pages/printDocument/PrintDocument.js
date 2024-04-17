import React from 'react'
import './PrintDocument.scss'
import html2pdf from 'html2pdf.js';
import Resume from '../resume/Resume';

import { useRef } from 'react';

function PrintDocument() {

    const contentRef = useRef(null);

    const convertToPdf = () => {
        const content = contentRef.current;

        const options = {
            margin: 1,
            filename: 'Shoaib_MERN_Stack_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        html2pdf().set(options).from(content).save();
    };

    return (
        <section className='PrintDocument'>
            <div className="PrintDocument__resumeContent" id="page-content" ref={contentRef}>
                <Resume />
            </div>
            <div className="PrintDocument__cv-btn" onClick={convertToPdf}>
                <p className='PrintDocument__btnText'>Download CV</p>
            </div>
        </section>
    )
}

export default PrintDocument