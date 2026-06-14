import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Launcher } from "./components/Launcher";
import { Footer } from "./components/Footer";
import { DownloadModal } from "./components/DownloadModal";
import { LegalModal, type LegalType } from "./components/LegalModal";
import { DonatePage } from "./pages/DonatePage";
import { ApplicationPage } from "./pages/ApplicationPage";
import { useState } from "react";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [legalType, setLegalType] = useState<LegalType>(null);

  return (
    <>
      <main>
        <Hero />
        <Launcher onDownload={() => setShowModal(true)} />
      </main>
      <Footer
        onOpenAgreement={() => setLegalType("agreement")}
        onOpenPrivacy={() => setLegalType("privacy")}
      />
      {showModal && <DownloadModal onClose={() => setShowModal(false)} />}
      {legalType && (
        <LegalModal type={legalType} onClose={() => setLegalType(null)} />
      )}
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0d0913] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/application" element={<ApplicationPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}