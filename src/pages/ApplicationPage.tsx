import { useState } from "react";

export function ApplicationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nickname: "",
    realName: "",
    age: "",
    type: "admin",
    adminRole: "Стажер",
    leaderRole: "Правительство",
    hasExperience: "",
    contacts: "",
    confirmRisk: "",
  });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendToTelegram = async () => {
    // Проверка заполнения всех полей
    if (
      !formData.nickname ||
      !formData.realName ||
      !formData.age ||
      !formData.contacts ||
      formData.confirmRisk !== "yes"
    ) {
      setMessage("❌ Заполните все поля");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setSending(true);
    // Временно просто показываем сообщение
    setTimeout(() => {
      setSending(false);
      setStep(5);
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Основная информация</h3>
            <div>
              <label className="block text-sm text-white/60 mb-1">Никнейм (Nick_Name)</label>
              <input
                type="text"
                value={formData.nickname}
                onChange={e => updateField("nickname", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white"
                placeholder="Nick_Name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Ваше имя</label>
              <input
                type="text"
                value={formData.realName}
                onChange={e => updateField("realName", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white"
                placeholder="Иван"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Возраст (14+, с 13 лет исключение)</label>
              <input
                type="number"
                value={formData.age}
                onChange={e => updateField("age", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white"
                placeholder="16"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setStep(2)} className="flex-1 rounded-xl bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold">
                Далее
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Куда хочешь пойти?</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { updateField("type", "admin"); setStep(3); }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-white hover:border-red-500/50"
              >
                👑 Администратор
              </button>
              <button
                onClick={() => { updateField("type", "leader"); setStep(3); }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-white hover:border-red-500/50"
              >
                🏛️ Лидер
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {formData.type === "admin" ? "Выбери роль в администрации" : "Выбери лидерскую позицию"}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {formData.type === "admin" ? (
                <>
                  <button onClick={() => { updateField("adminRole", "Стажер"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">Стажер</button>
                  <button onClick={() => { updateField("adminRole", "Хелпер"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">Хелпер</button>
                  <button onClick={() => { updateField("adminRole", "Модератор"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">Модератор</button>
                  <button onClick={() => { updateField("adminRole", "Администратор"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">Администратор</button>
                  <button onClick={() => { updateField("adminRole", "Куратор"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">Куратор</button>
                </>
              ) : (
                <>
                  <button onClick={() => { updateField("leaderRole", "Правительство"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">Правительство</button>
                  <button onClick={() => { updateField("leaderRole", "Армия"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">Армия</button>
                  <button onClick={() => { updateField("leaderRole", "Министерство внутренних дел"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">МВД</button>
                  <button onClick={() => { updateField("leaderRole", "Тюрьма строгого режима"); setStep(4); }} className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50">Тюрьма</button>
                </>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Дополнительная информация</h3>
            <div>
              <label className="block text-sm text-white/60 mb-1">Есть ли опыт на данной должности?</label>
              <div className="flex gap-3 mt-2">
                <button onClick={() => updateField("hasExperience", "yes")} className={`flex-1 rounded-xl border py-3 ${formData.hasExperience === "yes" ? "border-red-500 bg-red-500/20" : "border-white/10 bg-white/5"}`}>Да</button>
                <button onClick={() => updateField("hasExperience", "no")} className={`flex-1 rounded-xl border py-3 ${formData.hasExperience === "no" ? "border-red-500 bg-red-500/20" : "border-white/10 bg-white/5"}`}>Нет</button>
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Твой Telegram / Discord / VK для связи</label>
              <input type="text" value={formData.contacts} onChange={e => updateField("contacts", e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white" placeholder="@username" />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Подтверждаешь риск мошенничества?</label>
              <div className="flex gap-3 mt-2">
                <button onClick={() => updateField("confirmRisk", "yes")} className={`flex-1 rounded-xl border py-3 ${formData.confirmRisk === "yes" ? "border-red-500 bg-red-500/20" : "border-white/10 bg-white/5"}`}>Да</button>
                <button onClick={() => updateField("confirmRisk", "no")} className={`flex-1 rounded-xl border py-3 ${formData.confirmRisk === "no" ? "border-red-500 bg-red-500/20" : "border-white/10 bg-white/5"}`}>Нет</button>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setStep(3)} className="flex-1 rounded-xl bg-white/10 py-3 text-white">Назад</button>
              <button onClick={sendToTelegram} disabled={sending} className="flex-1 rounded-xl bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold">
                {sending ? "Отправка..." : "Отправить заявку"}
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="py-10 text-center">
            <div className="mb-4 text-5xl">✅</div>
            <h3 className="text-2xl font-bold text-white">Заявка отправлена</h3>
            <p className="mt-3 text-white/60">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-32 pb-16">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-red-700/20 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300">
            ПОДАТЬ ЗАЯВКУ
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white">Анкета на должность</h2>
          <p className="mt-3 text-white/50">Заполни форму, и мы рассмотрим твою кандидатуру</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#15101d]/80 p-6 backdrop-blur-xl">
          {message && (
            <div className="mb-4 rounded-xl bg-red-500/20 border border-red-500/50 p-3 text-red-300 text-center">
              {message}
            </div>
          )}
          {renderStep()}
        </div>
      </div>
    </section>
  );
}