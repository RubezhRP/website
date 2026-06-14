import { Logo } from "./Logo";
import { FORUM_URL } from "../config";

export function Footer(props: {
  onOpenAgreement: () => void;
  onOpenPrivacy: () => void;
}) {
  const { onOpenAgreement, onOpenPrivacy } = props;
  return (
    <footer className="border-t border-white/10 px-4 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[auto_1fr_1fr_auto]">
        {/* Лого */}
        <div>
          <Logo className="h-14 w-14" />
          <p className="mt-6 text-sm text-white/40">Rubezh Games © 2026</p>
        </div>

        {/* Проекты */}
        <div>
          <h4 className="text-sm font-bold text-white">Проекты</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/40">
            <li>
              <a href="#top" className="transition-colors hover:text-white">
                Rubezh RP
              </a>
            </li>
          </ul>
        </div>

        {/* Полезное */}
        <div>
          <h4 className="text-sm font-bold text-white">Полезное</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/40">
            <li>
              <a
                href={FORUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Форум
              </a>
            </li>
            <li>
              <button
                onClick={onOpenAgreement}
                className="text-left text-sm text-white/40 transition-colors hover:text-white"
              >
                Пользовательское соглашение
              </button>
            </li>
            <li>
              <button
                onClick={onOpenPrivacy}
                className="text-left text-sm text-white/40 transition-colors hover:text-white"
              >
                Политика конфиденциальности
              </button>
            </li>
          </ul>
        </div>

        {/* Контакты */}
        <div className="text-sm">
          <div className="flex gap-3 text-2xl">
            <span>▶️</span>
            <span>🗂️</span>
          </div>
          <p className="mt-6 text-rose-400">support@rubezh-rp.com</p>
          <p className="mt-3 text-white/40">
            По юридическим вопросам:
            <br />
            <span className="text-rose-400">doc@rubezh-rp.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
