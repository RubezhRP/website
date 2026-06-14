export function Donate() {
  return (
    <section
      id="donate"
      className="relative overflow-hidden px-4 py-24"
    >
      {/* Фоновые блики */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-red-700/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Заголовок */}
        <span className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300">
          ПОДДЕРЖИ ПРОЕКТ
        </span>

        <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Пополнение счёта
        </h2>

        <p className="mt-3 text-white/50">
          Введи свой никнейм и выбери сумму пополнения
        </p>

        {/* Блок с ником */}
        <div className="mt-10 max-w-md mx-auto">
          <div className="rounded-2xl border border-white/10 bg-[#15101d]/80 p-6 backdrop-blur-xl">
            <label className="block text-left text-sm font-medium text-white/60 mb-2">
              Ваш никнейм
            </label>
            <input
              type="text"
              placeholder="Введите ваш игровой ник"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-red-500 focus:outline-none"
            />
            
            <div className="mt-6">
              <h3 className="text-left text-lg font-semibold text-white mb-3">
                Выберите сумму
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors hover:border-red-500/50 hover:bg-red-500/10">
                  100 ₽
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors hover:border-red-500/50 hover:bg-red-500/10">
                  250 ₽
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors hover:border-red-500/50 hover:bg-red-500/10">
                  500 ₽
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors hover:border-red-500/50 hover:bg-red-500/10">
                  1000 ₽
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-left text-lg font-semibold text-white mb-3">
                Или своя сумма
              </h3>
              <input
                type="number"
                placeholder="Введите сумму"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-red-500 focus:outline-none"
              />
            </div>

            <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/30 transition-transform hover:scale-[1.02]">
              Перейти к оплате
            </button>
          </div>
        </div>

        {/* Юридическая информация */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/30">
          <a href="#" className="hover:text-white/50 transition-colors">
            Политика конфиденциальности
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white/50 transition-colors">
            Условия пользования
          </a>
        </div>
      </div>
    </section>
  );
}