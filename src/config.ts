// ============================================================
//  НАСТРОЙКИ САЙТА — меняй значения здесь
// ============================================================

// Ссылка на форум
export const FORUM_URL = "https://whg114269.sampproject.ru/index.php";

// Ссылки на установщик (.exe).
// Файл лежит в папке public/ — просто замени файл с тем же именем
// при каждом обновлении, и ссылка останется рабочей.
//
// Например, положи новый установщик в:  public/downloads/launcher.exe
// и резервный (если нужно) в:           public/downloads/launcher_backup.exe
export const DOWNLOAD_LINKS = {
  // Основная ссылка на скачивание
  main: "/downloads/launcher.exe",
  // Резервная ссылка на скачивание
  backup: "/downloads/launcher_backup.exe",
};

// Имя, под которым будет сохраняться файл у пользователя
export const DOWNLOAD_FILENAME = "RubezhLauncher.exe";

// Системные требования (Windows)
export const REQUIREMENTS_WINDOWS = [
  { label: "ОС", value: "Windows 10 (64 бит)" },
  { label: "Процессор", value: "Intel Core i5-6600K / AMD FX-6300" },
  { label: "Оперативная память", value: "4 ГБ" },
  { label: "Видеокарта", value: "От 2 ГБ. видеопамяти" },
  { label: "Место на диске", value: "12 ГБ" },
];

// Системные требования (Android)
export const REQUIREMENTS_ANDROID = [
  { label: "ОС", value: "Скоро" },
  { label: "Процессор", value: "Скоро" },
  { label: "Оперативная память", value: "Скоро" },
  { label: "Место на диске", value: "Скоро" },
];
