import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportToPDF = async (
  elementRef: HTMLDivElement | null,
  filename: string = 'assessment-results.pdf'
): Promise<{ success: boolean; message: string }> => {
  if (!elementRef) {
    return { success: false, message: "Element reference not found" };
  }

  try {
    const canvas = await html2canvas(elementRef, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
    return { success: true, message: "PDF downloaded successfully!" };
  } catch (error) {
    console.error('Error generating PDF:', error);
    return { success: false, message: "Error generating PDF. Please try again." };
  }
};
