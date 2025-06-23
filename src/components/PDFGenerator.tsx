'use client';

import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFGeneratorProps {
  children: React.ReactNode;
  filename?: string;
}

export default function PDFGenerator({ children, filename = 'Oleksii_Melnichuk_CV.pdf' }: PDFGeneratorProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (!contentRef.current) {
      console.error('Content ref is not available');
      return;
    }

    setIsGenerating(true);

    try {
      console.log('Starting PDF generation...');
      
      // Показуємо контент тимчасово для рендерингу
      contentRef.current.style.display = 'block';
      contentRef.current.style.position = 'absolute';
      contentRef.current.style.left = '-9999px';
      contentRef.current.style.top = '0';

      // Даємо час для рендерингу
      await new Promise(resolve => setTimeout(resolve, 100));

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
        logging: true, // Додаємо логування для дебагу
      });

      console.log('Canvas created, generating PDF...');

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

      console.log('PDF generated, saving...');

      // Завантажуємо PDF
      pdf.save(filename);

      console.log('PDF saved successfully');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Помилка при генерації PDF. Перевірте консоль для деталей.');
    } finally {
      // Приховуємо контент знову
      if (contentRef.current) {
        contentRef.current.style.display = 'none';
        contentRef.current.style.position = 'static';
        contentRef.current.style.left = 'auto';
        contentRef.current.style.top = 'auto';
      }
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className="px-8 py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-200 text-lg font-semibold text-center cursor-pointer rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isGenerating ? 'Generating PDF...' : 'Download CV'}
      </button>
      <div 
        ref={contentRef} 
        className="hidden"
        style={{ 
          display: 'none',
          position: 'absolute',
          left: '-9999px',
          top: '0',
          zIndex: -1
        }}
      >
        {children}
      </div>
    </div>
  );
} 