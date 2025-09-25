import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Play, BookOpen, Users, Lightbulb } from 'lucide-react';
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
  const [showHomepage, setShowHomepage] = useState(true);

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

  const startStorytelling = () => {
    setShowHomepage(false);
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

  if (showHomepage) {
    return (
      <div className="homepage-container">
        <div className="homepage-content">
          <div className="hero-section">
            <div className="logo-container">
              <img src="/favicon.svg" alt="sCIna Logo" className="logo" />
              <h1 className="main-title">Hub Inteligente UFPE</h1>
              <p className="subtitle">Equipe sCIna - Storytelling Interativo</p>
            </div>
          </div>

          <div className="project-info">
            <div className="info-card">
              <div className="card-icon">
                <Lightbulb size={32} />
              </div>
              <h3>Inovação Acadêmica</h3>
              <p>Uma aplicação web revolucionária para transformar a experiência acadêmica dos estudantes da UFPE, superando as limitações do SIGAA atual.</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <Users size={32} />
              </div>
              <h3>Centrado no Usuário</h3>
              <p>Interface intuitiva e moderna com foco na experiência do usuário, garantindo acessibilidade e responsividade em todos os dispositivos.</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <BookOpen size={32} />
              </div>
              <h3>Hub Centralizado</h3>
              <p>Consolidação de informações acadêmicas em um local único: horários, notas, avisos e comunicação direta com chatbot inteligente.</p>
            </div>
          </div>

          <div className="cta-section">
            <button className="start-button" onClick={startStorytelling}>
              <Play size={20} />
              Iniciar Storytelling
            </button>
            <p className="cta-description">
              Descubra como nossa equipe sCIna está revolucionando a gestão acadêmica na UFPE
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="storytelling-container">
      <div className="flipbook-wrapper">
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


      </div>
    </div>
  );
}

export default App;
