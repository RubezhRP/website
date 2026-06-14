import { useState } from "react";

export function DonatePage() {
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedServer, setSelectedServer] = useState("DRAGON");
  const [selectedPayment, setSelectedPayment] = useState("card");
  
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<"info" | "error" | "success">("info");
  const [activeTimeout, setActiveTimeout] = useState<NodeJS.Timeout | null>(null); // Для фикса бага с таймерами

  // Проверка ника (только латиница, цифры, нижнее подчёркивание, от 3 до 20 символов)
  const validateNickname = (nick: string) => {
    const nickRegex = /^[A-Za-z0-9_]{3,20}$/;
    if (!nick) {
      setNicknameError("Введите никнейм");
      return false;
    }
    if (!nickRegex.test(nick)) {
      setNicknameError("Никнейм может содержать только латиницу, цифры и _ (3-20 символов)");
      return false;
    }
    setNicknameError("");
    return true;
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    validateNickname(value);
  };

  // Исправленная функция вывода уведомлений
  const showMessage = (message: string, type: "info" | "error" | "success") => {
    // Если уже запущен таймер — сбрасываем его, чтобы уведомления не моргали
    if (activeTimeout) {
      clearTimeout(activeTimeout);
    }

    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);

    const timeoutId = setTimeout(() => {
      setShowNotification(false);
    }, 4000); // 4 секунды, чтобы успели прочитать длинный текст про тех. работы

    setActiveTimeout(timeoutId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateNickname(nickname)) {
      return;
    }
    
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount < 10 || numAmount > 500000) {
      showMessage("Сумма должна быть от 10 до 500 000 рублей", "error");
      return;
    }
    
    // Временно: оплата в разработке
    showMessage("🚧 Оплата временно недоступна. Ведутся технические работы. Скоро заработает!", "info");
  };

  const servers = [
    { id: "DRAGON", name: "🐉 DRAGON", description: "Онлайн: 0 / 100", status: "online" },
  ];

  const paymentMethods = [
    { id: "card", name: "РФ Карты", icon: "💳" },
    { id: "tpay", name: "TPay", icon: "🔷" },
    { id: "sber", name: "SberPay", icon: "🟢" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-32 pb-16">
      {/* Фоновые блики */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-red-700/20 blur-[120px]" />

      {/* Уведомление */}
      {showNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-5 duration-300 max-w-md w-full px-4">
          <div className={`rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-xl border ${
            notificationType === "error" 
              ? "bg-red-500/20 border-red-500/50 text-red-200" 
              : notificationType === "success"
              ? "bg-green-500/20 border-green-500/50 text-green-200"
              : "bg-blue-500/20 border-blue-500/50 text-blue-200"
          }`}>
            <div className="flex items-center gap-3">
              {notificationType === "error" && <span>❌</span>}
              {notificationType === "success" && <span>✅</span>}
              {notificationType === "info" && <span>ℹ️</span>}
              <p className="text-sm font-medium leading-relaxed">{notificationMessage}</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative mx-auto max-w-2xl">
        {/* Заголовок */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300">
            ПОДДЕРЖИ ПРОЕКТ
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Пополнение счёта
          </h2>
          <p className="mt-3 text-white/50">Введите данные для пополнения</p>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="rounded-2xl border border-white/10 bg-[#15101d]/80 p-6 backdrop-blur-xl">
            {/* Никнейм */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/60 mb-2">
                Ваш никнейм
              </label>
              <input
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
                placeholder="Nick_Name"
                className={`w-full rounded-xl border px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-all ${
                  nicknameError 
                    ? "border-red-500 bg-red-500/10 focus:border-red-500" 
                    : "border-white/10 bg-black/40 focus:border-red-500"
                }`}
                required
              />
              {nicknameError && (
                <p className="mt-2 text-xs text-red-400">{nicknameError}</p>
              )}
            </div>

            {/* Сервер */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/60 mb-3">
                Сервер
              </label>
              <div className="grid grid-cols-1 gap-3">
                {servers.map((server) => (
                  <button
                    key={server.id}
                    type="button"
                    onClick={() => setSelectedServer(server.id)}
                    className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                      selectedServer === server.id
                        ? "border-red-500 bg-gradient-to-r from-red-500/20 to-red-600/10 shadow-lg shadow-red-500/20"
                        : "border-white/10 bg-white/5 hover:border-red-500/50"
                    }`}
                  >
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{server.name.split(" ")[0]}</span>
                        <div className="text-left">
                          <p className={`font-semibold ${
                            selectedServer === server.id ? "text-white" : "text-white/80"
                          }`}>
                            {server.name}
                          </p>
                          <p className="text-xs text-white/40">{server.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs text-orange-400 font-medium">Тех.Работы</span>
                        {selectedServer === server.id && (
                          <span className="ml-2 text-red-400 font-bold">✓</span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Платёжная система */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/60 mb-3">
                Платёжная система
              </label>
              <div className="grid grid-cols-3 gap-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedPayment(method.id)}
                    className={`group relative overflow-hidden rounded-xl border-2 py-3 text-sm font-medium transition-all duration-300 ${
                      selectedPayment === method.id
                        ? "border-red-500 bg-gradient-to-r from-red-500/20 to-red-600/10 text-white shadow-lg shadow-red-500/20"
                        : "border-white/10 bg-white/5 text-white/60 hover:border-red-500/50 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{method.icon}</span>
                    <span className="ml-1">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Сумма */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/60 mb-2">
                Сумма (₽)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="от 10 до 500 000 ₽"
                min="10"
                max="500000"
                step="1"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-red-500 focus:outline-none transition-all"
                required
              />
              <p className="mt-2 text-xs text-white/40">Минимальная сумма: 10 ₽ • Максимальная: 500 000 ₽</p>
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="mt-4 w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-[1.01] hover:shadow-red-600/50 active:scale-[0.99]"
            >
              Перейти к оплате
            </button>
          </div>
        </form>

        {/* Юридические ссылки */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
          <button
            type="button"
            onClick={() => showMessage("📜 Политика конфиденциальности: Мы не передаём ваши данные третьим лицам. Все платежи полностью защищены.", "info")}
            className="hover:text-white/60 transition-colors outline-none"
          >
            Политика конфиденциальности
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => showMessage("⚖️ Условия пользования: Пополняя счёт, вы соглашаетесь с правилами игрового проекта. Возврат средств регламентируется внутренней политикой.", "info")}
            className="hover:text-white/60 transition-colors outline-none"
          >
            Условия пользования
          </button>
        </div>
      </div>
    </section>
  );
}