// ============================================================
//  НАСТРОЙКИ САЙТА — меняй значения здесь
// ============================================================

// Ссылка на форум проекта
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

// Имя, под которым будет сохраняться файл у пользователя при скачивании
export const DOWNLOAD_FILENAME = "RubezhLauncher.exe";

// Минимальные системные требования для ПК (оптимизировано под SAMP)
export const REQUIREMENTS_WINDOWS = [
  { label: "Операционная система", value: "Windows 7, 10, 11" },
  { label: "Процессор (CPU)", value: "Intel Core 2 Duo / AMD Athlon" },
  { label: "Оперативная память", value: "2 GB RAM" },
  { label: "Видеокарта (GPU)", value: "NVIDIA GT 710 / AMD Radeon" },
  { label: "Место на диске", value: "4.5 GB" },
];

// Минимальные системные требования для Android версии
export const REQUIREMENTS_ANDROID = [
  { label: "Операционная система", value: "Android 7.0 и выше" },
  { label: "Процессор (CPU)", value: "4 ядра (1.5 ГГц)" },
  { label: "Оперативная память", value: "3 GB RAM" },
  { label: "Место на диске", value: "2.5 GB" },
];