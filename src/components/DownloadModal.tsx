import { useEffect } from "react";
import { DOWNLOAD_LINKS, DOWNLOAD_FILENAME } from "../config";

interface DownloadModalProps {
  onClose: () => void;
}

export function DownloadModal({ onClose }: DownloadModalProps) {
  
  // Управление скроллом страницы и закрытием по нажатию ESC
  useEffect(() => {
    // Блокируем прокрутку основного сайта
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Подчищаем эффекты при закрытии модального окна
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const download = (url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = DOWNLOAD_FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Задний размытый фон (Overlay) */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" />

      {/* Контентное окно */}
      <div
        className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-[#1a1322] p-7 shadow-2xl animate-[popIn_0.25s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-white/40 transition-colors hover:text-white outline-none"
          aria-label="Закрыть"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-black text-white">Выберите ссылку</h3>

        {/* Ссылки для загрузки лаунчера */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => download(DOWNLOAD_LINKS.main)}
            className="w-full rounded-full bg-gradient-to-r from-red-600 to-red-800 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Основная ссылка
          </button>
          
          <button
            onClick={() => download(DOWNLOAD_LINKS.backup)}
            className="w-full rounded-full bg-gradient-to-r from-red-600 to-red-800 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Резервная ссылка
          </button>
        </div>

        {/* Поясняющий текст под кнопками */}
        <p className="mt-5 text-center text-xs leading-relaxed text-white/40">
          * Если основная ссылка не работает,
          <br />
          используйте резервную
        </p>
      </div>
    </div>
  );
}