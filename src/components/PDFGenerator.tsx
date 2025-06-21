'use client';

import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFGeneratorProps {
  children: React.ReactNode;
  filename?: string;
}

export default function PDFGenerator({ children, filename = 'Oleksii_Melnichuk_CV.pdf' }: PDFGeneratorProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!contentRef.current) return;

    try {
      // Показуємо індикатор завантаження
      const button = document.querySelector('[data-pdf-button]') as HTMLButtonElement;
      if (button) {
        button.disabled = true;
        button.textContent = 'Generating PDF...';
      }

      // Налаштування для html2canvas
      const canvas = await html2canvas(contentRef.current, {
        scale: 2, // Вища якість
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: contentRef.current.scrollWidth,
        height: contentRef.current.scrollHeight,
        scrollX: 0,
        scrollY: 0,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; // A4 ширина в мм
      const pageHeight = 295; // A4 висота в мм
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Додаємо першу сторінку
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Додаємо додаткові сторінки якщо потрібно
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Завантажуємо PDF
      pdf.save(filename);

      // Відновлюємо кнопку
      if (button) {
        button.disabled = false;
        button.textContent = 'Download CV';
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Відновлюємо кнопку в разі помилки
      const button = document.querySelector('[data-pdf-button]') as HTMLButtonElement;
      if (button) {
        button.disabled = false;
        button.textContent = 'Download CV';
      }
    }
  };

  return (
    <div>
      <button
        onClick={generatePDF}
        data-pdf-button
        className="px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Download CV
      </button>
      <div ref={contentRef} className="hidden">
        {children}
      </div>
    </div>
  );
} 