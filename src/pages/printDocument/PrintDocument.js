import React from 'react'
import './PrintDocument.scss'
import html2pdf from 'html2pdf.js';
import Resume from '../resume/Resume';

function PrintDocument() {

    const printDocument = () => {
        const element = document.getElementById('page-content'); // The ID of the HTML content you want to convert
        const options = {
            margin: 2,
            filename: 'shoaib_resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'] }
        };

        html2pdf().set(options).from(element).toPdf().get('pdf').then(function (pdf) {
            const blob = new Blob([pdf], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);

            // Create an anchor tag and trigger a click event to open the PDF in a new tab
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank'; // Open in a new tab
            a.download = 'shoaib_resume.pdf'; // Set the desired filename
            a.click();

            // Cleanup
            URL.revokeObjectURL(url);
        });
    };

    return (
        <section className='PrintDocument'>
            <div className="PrintDocument__resumeContent" id="page-content">
                <Resume />
            </div>
            <div className="PrintDocument__cv-btn" onClick={printDocument}>
                <p className='PrintDocument__btnText'>Download CV</p>
            </div>
        </section>
    )
}

export default PrintDocument