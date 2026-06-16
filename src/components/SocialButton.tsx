import type { LucideIcon } from "lucide-react";

type TomBotao = "padrao" | "google" | "apple";

type PropriedadesBotaoSocial = {
  icone?: LucideIcon;
  rotulo: string;
  tom?: TomBotao;
};

export function BotaoSocial({
  icone: Icone,
  rotulo,
  tom = "padrao",
}: PropriedadesBotaoSocial) {
  return (
    <button
      type="button"
      className="flex h-12 items-center justify-center gap-2 rounded-xl border border-cyan-200/10 bg-cyan-100/[0.035] px-3 text-sm font-black text-cyan-50 shadow-inner shadow-cyan-100/[0.04] transition hover:border-cyan-200/25 hover:bg-cyan-100/[0.07] focus:outline-none focus:ring-4 focus:ring-cyan-100/10 sm:h-14 sm:gap-3 sm:px-4 sm:text-base"
    >
      {tom === "google" ? (
        <svg aria-hidden className="size-6" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84Z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38Z"
          />
        </svg>
      ) : Icone ? (
        <Icone
          aria-hidden
          className="size-6 text-white"
          fill={tom === "apple" ? "currentColor" : "none"}
          strokeWidth={tom === "apple" ? 0 : 2}
        />
      ) : null}
      {rotulo}
    </button>
  );
}
