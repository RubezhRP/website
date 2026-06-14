import { useState } from "react";
import { cn } from "../utils/cn";

interface DonateProps {
  onOpenAgreement: () => void;
  onOpenPrivacy: () => void;
}

export function Donate({ onOpenAgreement, onOpenPrivacy }: DonateProps) {
  // Состояния для полей формы
  const [nickname, setNickname] = useState("");
  const [amount, setAmount] = useState<string>("");

  // Список быстрых сумм (пресетов)
  const presets = [100, 250, 500, 1000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert("Пожалуйста, введите игровой никнейм");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      alert("Пожалуйста, укажите корректную сумму");
      return;
    }

    // Здесь будет происходить редирект на платежку (FreeKassa, Unitpay и т.д.)
    console.log(`Редирект на оплату: Игрок ${nickname}, Сумма ${amount} руб.`);
  };

  return (
    <section
      id="donate"
      className="relative overflow-hidden px-4 py-24 bg-[#0d0913]/20"
    >
      {/* Фоновые блики */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-red-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Заголовок */}
        <span className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300 backdrop-blur-sm">
          ПОДДЕРЖИ ПРОЕКТ
        </span>

        <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Пополнение счёта
        </h2>

        <p className="mt-3 text-lg text-white/50">
          Введи свой никнейм и выбери сумму пополнения
        </p>

        {/* Форма доната */}
        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
          <div className="rounded-3xl border border-white/10 bg-[#15101d]/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            
            {/* Поле никнейма */}
            <div>
              <label className="block text-left text-sm font-medium text-white/60 mb-2">
                Ваш никнейм
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Введите ваш игровой ник"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-red-500 focus:outline-none"
                required
              />
            </div>
            
            {/* Сетка быстрых кнопок */}
            <div className="mt-6">
              <h3 className="text-left text-sm font-medium text-white/60 mb-3">
                Выберите сумму
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {presets.map((preset) => {
                  const isSelected = amount === preset.toString();
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset.toString())}
                      className={cn(
                        "rounded-xl border py-3 text-sm font-semibold transition-all cursor-pointer",
                        isSelected
                          ? "border-red-500 bg-red-500/20 text-white shadow-lg shadow-red-500/10"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {preset} ₽
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Поле кастомной суммы */}
            <div className="mt-6">
              <h3 className="text-left text-sm font-medium text-white/60 mb-3">
                Или своя сумма
              </h3>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Введите сумму"
                  className="w-full rounded-xl border border-white/10 bg-black/40 pl-4 pr-10 py-3 text-white placeholder:text-white/30 transition-colors focus:border-red-500 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-white/40">
                  ₽
                </span>
              </div>
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Перейти к оплате
            </button>
          </div>
        </form>

        {/* Юридические документы привязаны к рабочим модалкам */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-white/30">
          <button
            onClick={onOpenPrivacy}
            className="hover:text-white/60 transition-colors cursor-pointer outline-none"
          >
            Политика конфиденциальности
          </button>
          <span>•</span>
          <button
            onClick={onOpenAgreement}
            className="hover:text-white/60 transition-colors cursor-pointer outline-none"
          >
            Пользовательское соглашение
          </button>
        </div>
      </div>
    </section>
  );
}