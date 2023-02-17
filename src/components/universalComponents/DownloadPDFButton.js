import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class DownloadPDFButton extends React.Component {
    handleDownloadPDF = () => {
        const targetDiv = document.getElementById(this.props.targetDivId);

        html2canvas(targetDiv, {
            scale: 1
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();

                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save('download.pdf');
            });
    }

    render() {
        return (
            <button onClick={this.handleDownloadPDF}>
                Download PDF
            </button>
        );
    }
}

export default DownloadPDFButton;
