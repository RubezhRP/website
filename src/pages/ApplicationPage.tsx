import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем хук для безопасного перехода

type Role = "Стажер" | "Хелпер" | "Модератор" | "Администратор" | "Куратор";
type LeaderRole = "Правительство" | "Армия" | "Министерство внутренних дел" | "Тюрьма строгого режима";

const ADMIN_ROLES: { role: Role; enabled: 1 | 0 }[] = [
  { role: "Стажер", enabled: 1 },
  { role: "Хелпер", enabled: 1 },
  { role: "Модератор", enabled: 1 },
  { role: "Администратор", enabled: 1 },
  { role: "Куратор", enabled: 1 },
];

const LEADER_ROLES: { role: LeaderRole; enabled: 1 | 0 }[] = [
  { role: "Правительство", enabled: 1 },
  { role: "Армия", enabled: 1 },
  { role: "Министерство внутренних дел", enabled: 1 },
  { role: "Тюрьма строгого режима", enabled: 1 },
];

export function ApplicationPage() {
  const navigate = useNavigate(); // Инициализируем навигацию React Router
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
    // Валидация: Добавлена проверка поля хакерского опыта (hasExperience)
    if (
      !formData.nickname.trim() ||
      !formData.realName.trim() ||
      !formData.age.trim() ||
      !formData.hasExperience ||
      !formData.contacts.trim() ||
      formData.confirmRisk !== "yes"
    ) {
      setMessage("❌ Заполните все поля анкеты");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setSending(true);
    setMessage("📤 Отправка...");

    const text = `
╔════════════
║📋 НОВАЯ ЗАЯВКА НА ДОЛЖНОСТЬ  
╚════════════

┌────────────
│👤 ИНФОРМАЦИЯ ОБ ИГРОКЕ      
├────────────
│ Игровой никнейм: ${formData.nickname}
│ Реальное имя: ${formData.realName}
│ Возраст: ${formData.age} лет
└────────────

┌────────────
│🎯 ВЫБРАННАЯ ДОЛЖНОСТЬ      
├────────────
│ Тип должности: ${formData.type === "admin" ? "Администратор" : "Лидер"}
│ Конкретная роль: ${formData.type === "admin" ? formData.adminRole : formData.leaderRole}
└────────────

┌────────────
│💼 ОПЫТ РАБОТЫ             
├────────────
│ Наличие опыта: ${formData.hasExperience === "yes" ? "✅ Да, есть опыт" : "❌ Нет, опыта нет"}
└────────────

┌────────────
│📱 КОНТАКТЫ ДЛЯ СВЯЗИ       
├────────────
│ ${formData.contacts}
└────────────

┌────────────
│⚠️ ПОДТВЕРЖДЕНИЕ           
├────────────
│ Подтверждение риска: ${formData.confirmRisk === "yes" ? "✅ Да, подтверждаю" : "❌ Нет, не подтверждаю"}
└────────────

⏰ Время заявки: ${new Date().toLocaleString()}
    `;

    // ⚠️ Внимание: токен виден в коде фронтенда. Рекомендуется спрятать в Environment Variables на Vercel
    const botToken = "8991135570:AAFp2HydH0iXJAeePHRh5OVeFSuqq--pfIg";
    const chatIds = ["8690476378", "8725676472"];

    const sendRequests = chatIds.map(async (chatId) => {
      try {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=HTML`;
        const response = await fetch(url);
        return response.ok;
      } catch (error) {
        console.error(`Ошибка отправки в чат ${chatId}:`, error);
        return false;
      }
    });

    const results = await Promise.all(sendRequests);
    const success = results.some(result => result === true);

    setSending(false);

    if (success) {
      setMessage("✅ Заявка успешно отправлена!");
      setTimeout(() => {
        navigate("/"); // Мягкий переход на главную без перезагрузки страницы
      }, 2000);
    } else {
      setMessage("❌ Ошибка отправки. Попробуйте позже.");
      setTimeout(() => setMessage(""), 4000);
    }
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
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white focus:border-red-500/50 outline-none"
                placeholder="Nick_Name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Ваше имя</label>
              <input
                type="text"
                value={formData.realName}
                onChange={e => updateField("realName", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white focus:border-red-500/50 outline-none"
                placeholder="Иван"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Возраст (14+)</label>
              <input
                type="number"
                value={formData.age}
                onChange={e => updateField("age", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white focus:border-red-500/50 outline-none"
                placeholder="16"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button 
                onClick={() => {
                  if(formData.nickname && formData.realName && formData.age) setStep(2);
                  else { setMessage("❌ Заполните поля шага"); setTimeout(() => setMessage(""), 2000); }
                }} 
                className="flex-1 rounded-xl bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold hover:from-red-500 hover:to-red-700 transition"
              >
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
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-white hover:border-red-500/50 transition text-left"
              >
                👑 Администратор
              </button>
              <button
                onClick={() => { updateField("type", "leader"); setStep(3); }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-white hover:border-red-500/50 transition text-left"
              >
                🏛️ Лидер
              </button>
            </div>
            <button onClick={() => setStep(1)} className="w-full mt-4 rounded-xl bg-white/5 py-2 text-sm text-white/60 hover:bg-white/10">
              Назад к инфо
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {formData.type === "admin" ? "Выбери роль в администрации" : "Выбери лидерскую позицию"}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {formData.type === "admin"
                ? ADMIN_ROLES.filter(r => r.enabled === 1).map(r => (
                    <button
                      key={r.role}
                      onClick={() => { updateField("adminRole", r.role); setStep(4); }}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50 transition"
                    >
                      {r.role}
                    </button>
                  ))
                : LEADER_ROLES.filter(r => r.enabled === 1).map(r => (
                    <button
                      key={r.role}
                      onClick={() => { updateField("leaderRole", r.role); setStep(4); }}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-white hover:border-red-500/50 transition"
                    >
                      {r.role}
                    </button>
                  ))}
            </div>
            <button onClick={() => setStep(2)} className="w-full mt-4 rounded-xl bg-white/5 py-2 text-sm text-white/60 hover:bg-white/10">
              Назад к выбору категории
            </button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Дополнительная информация</h3>
            <div>
              <label className="block text-sm text-white/60 mb-1">Есть ли опыт на данной должности?</label>
              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => updateField("hasExperience", "yes")}
                  className={`flex-1 rounded-xl border py-3 transition ${formData.hasExperience === "yes" ? "border-red-500 bg-red-500/20 text-white" : "border-white/10 bg-white/5 text-white/60"}`}
                >
                  Да
                </button>
                <button
                  type="button"
                  onClick={() => updateField("hasExperience", "no")}
                  className={`flex-1 rounded-xl border py-3 transition ${formData.hasExperience === "no" ? "border-red-500 bg-red-500/20 text-white" : "border-white/10 bg-white/5 text-white/60"}`}
                >
                  Нет
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Твой Telegram / Discord / VK для связи</label>
              <input
                type="text"
                value={formData.contacts}
                onChange={e => updateField("contacts", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-white focus:border-red-500/50 outline-none"
                placeholder="@username"
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Подтверждаешь риск мошенничества?</label>
              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => updateField("confirmRisk", "yes")}
                  className={`flex-1 rounded-xl border py-3 transition ${formData.confirmRisk === "yes" ? "border-red-500 bg-red-500/20 text-white" : "border-white/10 bg-white/5 text-white/60"}`}
                >
                  Да
                </button>
                <button
                  type="button"
                  onClick={() => updateField("confirmRisk", "no")}
                  className={`flex-1 rounded-xl border py-3 transition ${formData.confirmRisk === "no" ? "border-red-500 bg-red-500/20 text-white" : "border-white/10 bg-white/5 text-white/60"}`}
                >
                  Нет
                </button>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              {/* Исправлено: теперь возвращает на шаг 2, избегая зацикливания шага 3 */}
              <button type="button" onClick={() => setStep(2)} className="flex-1 rounded-xl bg-white/10 py-3 text-white hover:bg-white/20 transition">
                Назад к выбору
              </button>
              <button type="button" onClick={sendToTelegram} disabled={sending} className="flex-1 rounded-xl bg-gradient-to-r from-red-600 to-red-800 py-3 text-white font-semibold hover:from-red-500 hover:to-red-700 transition">
                {sending ? "Отправка..." : "Отправить заявку"}
              </button>
            </div>
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
            <div className={`mb-4 rounded-xl border p-3 text-center transition ${
              message.includes("✅") ? "bg-green-500/20 border-green-500/50 text-green-300" :
              message.includes("❌") ? "bg-red-500/20 border-red-500/50 text-red-300" :
              "bg-blue-500/20 border-blue-500/50 text-blue-300"
            }`}>
              {message}
            </div>
          )}
          {renderStep()}
        </div>
      </div>
    </section>
  );
}