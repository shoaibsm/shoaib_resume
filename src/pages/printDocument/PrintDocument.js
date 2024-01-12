import React from 'react'
import './PrintDocument.scss'
import Resume from '../Resume'
import html2pdf from 'html2pdf.js';

function PrintDocument() {

    const printDocument = () => {
        const element = document.getElementById('page-content'); // The ID of the HTML content you want to convert
        const options = {
            margin: 2,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'] }
        };

        // New Promise-based usage:
        html2pdf().set(options).from(element).toPdf().get('pdf').then(function (pdf) {
            window.open(pdf.output('bloburl')); // to open in new tab
        });
    };

    return (
        <div className='PrintDocument'>
            <div className="resume-content" id="page-content">
                <Resume />
            </div>
            <div className="cv-btn" onClick={printDocument}>
                <p className='btn-text'>Download CV</p>
            </div>
        </div>
    )
}

export default PrintDocument