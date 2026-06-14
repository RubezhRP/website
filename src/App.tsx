import { HashRouter, Routes, Route, useLocation } from "react-router-dom"; 
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Launcher } from "./components/Launcher";
import { Footer } from "./components/Footer";
import { LegalModal, type LegalType } from "./components/LegalModal";
import { DonatePage } from "./pages/DonatePage";
import { ApplicationPage } from "./pages/ApplicationPage";
import { useState, useEffect } from "react";

// Выносим логику главной страницы в отдельный внутренний компонент
function HomePage() {
  const [legalType, setLegalType] = useState<LegalType>(null);
  const location = useLocation();

  // Функция плавного скролла до лаунчера
  const scrollToLauncher = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const element = document.getElementById("launcher");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Если пользователь перешел по ссылке с хешем #launcher с другой страницы
  useEffect(() => {
    if (location.hash === "#launcher" || location.state?.scrollToLauncher) {
      setTimeout(() => {
        const element = document.getElementById("launcher");
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <main>
        {/* Передаем функцию скролла в Hero, чтобы кнопка "Начать играть" листала вниз */}
        <Hero onScrollToLauncher={scrollToLauncher} />
        <Launcher />
      </main>
      <Footer
        onOpenAgreement={() => setLegalType("agreement")}
        onOpenPrivacy={() => setLegalType("privacy")}
      />
      {legalType && (
        <LegalModal type={legalType} onClose={() => setLegalType(null)} />
      )}
    </>
  );
}

// Главный компонент приложения
export default function App() {
  // Функция для скролла, которую можно вызывать из шапки (работает через проверку ID)
  const handleScrollToLauncher = (e: React.MouseEvent) => {
    const element = document.getElementById("launcher");
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0d0913] text-white selection:bg-red-600 selection:text-white">
        {/* Передаем скролл в навигационную панель для кнопки "Скачать" */}
        <Navbar onScrollToLauncher={handleScrollToLauncher} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/application" element={<ApplicationPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}