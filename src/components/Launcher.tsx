import { useState } from "react";
import { cn } from "../utils/cn";
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  ChevronRight,
  CheckCircle2,
  Construction
} from "lucide-react";
import {
  REQUIREMENTS_WINDOWS,
  REQUIREMENTS_ANDROID,
} from "../config";

export function Launcher() {
  const [os, setOs] = useState<"windows" | "android">("windows");
  const reqs = os === "windows" ? REQUIREMENTS_WINDOWS : REQUIREMENTS_ANDROID;

  return (
    <section
      id="launcher"
      className="relative overflow-hidden py-24 px-4"
    >
      {/* Атмосферная фоновая подсветка */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-red-600/30 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-red-700/30 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300 backdrop-blur-sm">
            СКОРО РЕЛИЗ
          </span>
          <h2 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Установи наш лаунчер
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Доступно для Windows и Android
          </p>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#15101d]/90 to-[#0a0710]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent" />
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-600/20 blur-[100px]" />

          <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-500" />
                  Системные требования
                </h3>
                <p className="text-white/40 text-sm mt-1">
                  {os === "windows" ? "Подойдет даже для слабого ПК" : "Характеристики мобильной версии"}
                </p>
              </div>

              {/* Переключатель платформ */}
              <div className="relative inline-flex rounded-2xl bg-black/40 p-1.5 backdrop-blur-sm">
                <div
                  className={cn(
                    "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl bg-gradient-to-r from-red-600 to-red-600 transition-all duration-300 ease-out shadow-lg shadow-red-500/50",
                    os === "windows" ? "left-1.5" : "left-[calc(50%+1.5px)]"
                  )}
                />
                <button
                  onClick={() => setOs("windows")}
                  className={cn(
                    "relative z-10 flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer",
                    os === "windows" ? "text-white" : "text-white/50 hover:text-white"
                  )}
                >
                  <Monitor className="w-4 h-4" />
                  Windows
                </button>
                <button
                  onClick={() => setOs("android")}
                  className={cn(
                    "relative z-10 flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer",
                    os === "android" ? "text-white" : "text-white/50 hover:text-white"
                  )}
                >
                  <Smartphone className="w-4 h-4" />
                  Android
                </button>
              </div>

              {/* Универсальный список требований для ПК и Android */}
              <div className="space-y-3 rounded-2xl bg-black/20 p-5 backdrop-blur-sm">
                {reqs.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-white/50 text-sm flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-red-400" />
                      {r.label}
                    </span>
                    <span className="font-semibold text-white text-sm flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Информационная плашка с иконкой стройки */}
              <div className="rounded-xl bg-amber-500/5 border border-amber-500/10 p-4 flex items-center gap-3">
                <Construction className="w-5 h-5 text-amber-500 shrink-0" />
                <p className="text-xs text-white/60">
                  {os === "windows" 
                    ? "Наш ПК-лаунчер находится на стадии финальной сборки. Совсем скоро откроем скачивание!" 
                    : "Мобильный клиент дорабатывается и проходит закрытые тесты стабильности."}
                </p>
              </div>

              {/* Мощная кнопка-заглушка "Скоро всё будет!" */}
              <button
                disabled
                className="w-full rounded-2xl bg-gradient-to-r from-red-600/20 to-red-800/20 p-4 text-base font-black uppercase tracking-wider text-red-400/60 cursor-not-allowed backdrop-blur-sm flex items-center justify-center gap-2 border border-red-500/20"
              >
                <Zap className="w-5 h-5 text-red-500 animate-pulse" />
                Скоро всё будет!
              </button>
            </div>

            {/* Блок графики */}
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 via-transparent to-transparent rounded-3xl" />
              
              {/* Ноутбук (Windows) */}
              <div
                className={cn(
                  "absolute transition-all duration-500 ease-out",
                  os === "windows"
                    ? "opacity-100 scale-100 translate-y-0 z-10"
                    : "opacity-0 scale-75 translate-y-8 pointer-events-none"
                )}
              >
                <img
                  src="/images/laptop-game.png"
                  alt="Windows версия"
                  className="w-full max-w-[420px] drop-shadow-2xl"
                />
              </div>

              {/* Телефон (Android) */}
              <div
                className={cn(
                  "absolute transition-all duration-500 ease-out",
                  os === "android"
                    ? "opacity-100 scale-100 translate-y-0 z-10"
                    : "opacity-0 scale-75 translate-y-8 pointer-events-none"
                )}
              >
                <img
                  src="/images/phone-game.png"
                  alt="Android версия"
                  className="w-full max-w-[420px] drop-shadow-2xl"
                />
              </div>

              {/* Точки-индикаторы */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
                <button
                  onClick={() => setOs("windows")}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    os === "windows" ? "w-8 bg-red-500" : "w-2 bg-white/30"
                  )}
                />
                <button
                  onClick={() => setOs("android")}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    os === "android" ? "w-8 bg-red-500" : "w-2 bg-white/30"
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Чек-лист преимуществ */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/30">
          <span className="flex items-center gap-1">✓ Без вирусов</span>
          <span className="flex items-center gap-1">✓ Бесплатная установка</span>
          <span className="flex items-center gap-1">✓ Автообновления</span>
          <span className="flex items-center gap-1">✓ Поддержка 24/7</span>
        </div>
      </div>
    </section>
  );
}