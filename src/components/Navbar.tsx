import { Logo } from "./Logo";
import { FORUM_URL } from "../config";
import { useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/5 bg-[#15101d]/80 px-5 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <Logo />
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a
              href="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-white font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Главная
            </a>
            <a
              href="/donate"
              className={`transition-colors ${
                isActive("/donate")
                  ? "text-white font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Донат
            </a>
            <a
              href="/application"
              className={`transition-colors ${
                isActive("/application")
                  ? "text-white font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Заявка
            </a>
            <a
              href={FORUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              Форум
            </a>
          </div>
        </div>

        <a
          href="/#launcher"
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-transform hover:scale-[1.03]"
        >
          Начать игру
          <span className="text-base leading-none">↓</span>
        </a>
      </nav>
    </header>
  );
}