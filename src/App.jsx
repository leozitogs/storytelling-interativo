import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import './App.css';

// Importando as imagens
import page1 from './assets/1.png';
import page2 from './assets/2.png';
import page3 from './assets/3.png';
import page4 from './assets/4.png';
import page5 from './assets/5.png';
import page6 from './assets/6.png';
import page7 from './assets/7.png';
import page8 from './assets/8.png';

const pages = [page1, page2, page3, page4, page5, page6, page7, page8];

const Page = React.forwardRef(({ children, number }, ref) => {
  return (
    <div className="page" ref={ref} data-density="hard">
      <div className="page-content">
        {children}
      </div>
    </div>
  );
});

Page.displayName = 'Page';

function App() {
  const flipBook = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(pages.length);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento das imagens
    const loadImages = async () => {
      const imagePromises = pages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const nextPage = () => {
    console.log('nextPage called, current page:', currentPage);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    console.log('prevPage called, current page:', currentPage);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    console.log('goToFirstPage called');
    setCurrentPage(0);
  };

  useEffect(() => {
    if (flipBook.current && flipBook.current.getPageFlip) {
      try {
        flipBook.current.getPageFlip().flip(currentPage);
      } catch (error) {
        console.error('Erro ao sincronizar página:', error);
      }
    }
  }, [currentPage]);

  const onFlip = (e) => {
    console.log('onFlip called with:', e.data);
    setCurrentPage(e.data);
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="loading-content">
          <div className="loading-spinner-icon"></div>
          <div>Carregando apresentação...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="storytelling-container">
      <div className="flipbook-wrapper">
        <div className="page-indicator">
          Página {currentPage + 1} de {totalPages}
        </div>
        
        <HTMLFlipBook
          ref={flipBook}
          width={600}
          height={800}
          size="stretch"
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1200}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          onFlip={onFlip}
          className="flipbook"
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {pages.map((page, index) => (
            <Page key={index} number={index + 1}>
              <img 
                src={page} 
                alt={`Página ${index + 1} do storytelling`}
                draggable={false}
              />
            </Page>
          ))}
        </HTMLFlipBook>

        <div className="controls">
          <button 
            className="control-btn" 
            onClick={goToFirstPage}
            title="Voltar ao início"
          >
            <RotateCcw size={20} />
          </button>
          <button 
            className="control-btn" 
            onClick={prevPage}
            disabled={currentPage === 0}
            title="Página anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="control-btn" 
            onClick={nextPage}
            disabled={currentPage >= totalPages - 1}
            title="Próxima página"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
