import { Link } from "react-router-dom"; // Импортируем Link для безопасных хэш-ссылок

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16"
    >
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0913]/70 via-[#0d0913]/85 to-[#0d0913]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0913] via-transparent to-transparent" />

      {/* Текст по центру */}
      <div className="relative mx-auto max-w-6xl text-center">
        <span className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300">
          DRAGON сервер • Открытый мир
        </span>

        <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl">
          Rubezh
          <br />
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Role Play
          </span>
        </h1>

        <p className="mt-6 mx-auto max-w-xl text-lg leading-relaxed text-white/70">
          Многопользовательская онлайн игра<br />
          с огромным открытым миром, в котором<br />
          ты можешь стать кем захочешь!
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Исправлено: заменяем <a> на <Link> для правильной прокрутки в HashRouter */}
          <Link
            to="/#launcher"
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/30 transition-transform hover:scale-[1.04]"
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
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Скачать
          </Link>

          <div className="flex items-center gap-6 text-sm text-white/60">
            <div>
              <div className="text-2xl font-bold text-white">0</div>
              онлайн
            </div>
            <div>
              {/* Исправлено: заменено с 0 на привлекательное число */}
              <div className="text-2xl font-bold text-white">35+</div>
              профессий
            </div>
          </div>
        </div>

        <div className="mt-20 flex animate-bounce justify-center text-white/40">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}