import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { FORUM_URL } from "../config";

interface FooterProps {
  onOpenAgreement: () => void;
  onOpenPrivacy: () => void;
}

export function Footer({ onOpenAgreement, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="border-t border-white/10 px-4 py-14 bg-[#0d0913]/50 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-[auto_1fr_1fr_auto]">
        
        {/* Логотип и копирайт */}
        <div className="space-y-4">
          <Logo className="h-14 w-14" />
          <p className="text-sm text-white/40">Rubezh Games © 2026</p>
        </div>

        {/* Проекты */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-wider uppercase">Проекты</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/40">
            <li>
              <Link to="/#top" className="transition-colors hover:text-white">
                Rubezh RP
              </Link>
            </li>
          </ul>
        </div>

        {/* Полезное */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-wider uppercase">Полезное</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/40">
            <li>
              <a
                href={FORUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Форум
              </a>
            </li>
            <li>
              <button
                onClick={onOpenAgreement}
                className="text-left text-sm text-white/40 transition-colors hover:text-white outline-none"
              >
                Пользовательское соглашение
              </button>
            </li>
            <li>
              <button
                onClick={onOpenPrivacy}
                className="text-left text-sm text-white/40 transition-colors hover:text-white outline-none"
              >
                Политика конфиденциальности
              </button>
            </li>
          </ul>
        </div>

        {/* Контакты и Соцсети */}
        <div className="text-sm space-y-4">
          <div className="flex gap-4 items-center">
            {/* Ссылка на ВК */}
            <a 
              href="https://vk.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 transition-all hover:text-[#0077ff] hover:scale-110"
              aria-label="Мы ВКонтакте"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.925 1c5.965 0 7.075 1.11 7.075 7.075v5.85c0 5.965-1.11 7.075-7.075 7.075h-7.85C2.11 21 1 19.89 1 13.925v-5.85C1 2.11 2.11 1 8.075 1zm3.69 13.56c.15-.3.15-.52 0-.82-.12-.19-.52-.6-1.04-1.13-.53-.52-.8-1-1.04-1.34-.14-.2-.11-.3 0-.48 0 0 1.62-2.28 1.78-3.07.03-.15 0-.37-.23-.37h-2.52c-.22 0-.39.11-.48.33 0 0-1.28 3.12-3.1 5.14-.15.15-.3.3-.41.3-.07 0-.15-.04-.15-.3V8.3c0-.3-.08-.52-.33-.52h-3.95c-.18 0-.33.12-.33.26 0 .3.41.37.45 1.22v1.83c0 .41-.08.48-.23.48-.41 0-1.42-1.42-2.02-3.04-.08-.23-.26-.37-.49-.37H4.03c-.3 0-.37.15-.37.33 0 .34 1.72 4.14 3.71 6.94C8.71 17.1 10.5 18 12.15 18c.98 0 1.2-.22 1.2-1.2v-1.6c0-.3.12-.37.37-.37.19 0 .52.07.94.48.97.98 1.34 1.7 2.13 1.7h2.52c.3 0 .37-.23.23-.45z"/>
              </svg>
            </a>
            
            {/* Ссылка на Телеграм (Исправленная SVG-строка) */}
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 transition-all hover:text-[#229ED9] hover:scale-110"
              aria-label="Наш Telegram канал"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.58.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12a.4.4 0 01.12.27c0 .06.01.14 0 .22z"/>
              </svg>
            </a>
          </div>

          <div>
            <p className="font-semibold text-red-400 transition-colors hover:text-red-300 cursor-pointer">
              support@rubezh-rp.com
            </p>
            <p className="mt-3 text-white/40 leading-relaxed">
              По юридическим вопросам:
              <br />
              <span className="font-semibold text-red-400 transition-colors hover:text-red-300 cursor-pointer">
                doc@rubezh-rp.com
              </span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}