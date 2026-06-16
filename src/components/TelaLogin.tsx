"use client";

import { type FocusEvent, useState } from "react";
import { Apple, Lock, Mail, Rocket } from "lucide-react";
import { CampoEntrada } from "@/components/InputField";
import { RobotMascot } from "@/components/MascoteRobo";
import { BotaoSocial } from "@/components/SocialButton";

type FocusedField = "email" | "password" | null;

export function LoginPage() {
  const [focusedField, setFocusedField] = useState<FocusedField>(null);
  const mobileMascotClass = `relative order-first sticky top-3 z-20 mb-3 min-h-0 overflow-hidden rounded-[1.5rem] bg-[#071a2f] shadow-2xl shadow-[#050713]/45 transition-[height,transform] duration-300 sm:top-4 lg:hidden ${
    focusedField ? "h-[128px] translate-y-0 sm:h-[190px]" : "h-[190px] sm:h-[260px]"
  }`;

  function handleFieldFocus(field: Exclude<FocusedField, null>) {
    return (event: FocusEvent<HTMLInputElement>) => {
      const input = event.currentTarget;

      setFocusedField(field);
      window.setTimeout(() => {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
      window.setTimeout(() => {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 420);
    };
  }

  return (
    <main className="min-h-svh overflow-y-auto bg-[radial-gradient(circle_at_20%_15%,#233b63_0,#111827_38%,#080b16_72%,#050713_100%)] px-3 py-3 text-white sm:px-6 sm:py-4 lg:h-screen lg:overflow-hidden lg:px-8">
      <section className="mx-auto flex min-h-[calc(100svh-1.5rem)] w-full max-w-6xl items-center justify-center sm:min-h-[calc(100svh-2rem)] lg:h-full">
        <div className="grid w-full overflow-visible rounded-3xl border border-cyan-200/10 bg-[#070b16] p-3 shadow-2xl shadow-cyan-950/40 sm:rounded-[2.5rem] sm:p-5 lg:h-full lg:max-h-[760px] lg:grid-cols-[1fr_1.08fr] lg:overflow-hidden lg:p-6">
          <div className="relative flex min-h-0 flex-col px-3 py-3 sm:px-8 lg:px-10 lg:py-7">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <span className="absolute left-[18%] top-[15%] size-1 rounded-full bg-cyan-100/70" />
              <span className="absolute left-[72%] top-[22%] size-1 rounded-full bg-white/60" />
              <span className="absolute left-[56%] top-[62%] size-1 rounded-full bg-cyan-200/60" />
              <span className="absolute left-[10%] top-[78%] size-1 rounded-full bg-white/50" />
              <span className="absolute right-[10%] top-[46%] size-1.5 rounded-full bg-cyan-100/50" />
              <span className="absolute -left-16 top-28 h-40 w-40 rounded-full border border-cyan-200/10" />
              <span className="absolute right-0 top-8 h-24 w-24 rounded-full border border-white/10" />
            </div>

            <div className="flex items-center justify-between">
              <div className="relative z-10 grid size-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-100/[0.08] text-cyan-100 shadow-inner shadow-cyan-100/10">
                <Rocket aria-hidden className="size-6" />
              </div>
              <p className="relative z-10 hidden text-sm font-medium text-cyan-100/45 sm:block">
                Ja tem uma conta?{" "}
                <a className="font-bold text-cyan-100" href="#">
                  Entrar
                </a>
              </p>
            </div>

            <form className="relative z-10 w-full pb-[max(1rem,env(safe-area-inset-bottom))] pt-6 transition-transform duration-300 focus-within:-translate-y-2 sm:max-w-[350px] sm:pt-10 lg:mt-auto lg:pb-2 lg:focus-within:translate-y-0">
              <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyan-200/70 sm:text-xs sm:tracking-[0.28em]">
                Pronto para a missao?
              </p>
              <h1 className="text-3xl font-black leading-tight tracking-normal text-white sm:text-5xl sm:leading-none">
                Entre ou cadastre-se
              </h1>

              <p className="mt-5 text-sm font-bold text-cyan-100 sm:mt-7">
                Continue com uma conta conectada
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
                <BotaoSocial  rotulo="Google" tom="google" />
                <BotaoSocial  icone={Apple} rotulo="Apple ID" tom="apple" />
              </div>

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent sm:my-6" />

              <p className="text-sm font-bold text-cyan-100">
                Ou acesse com e-mail e senha
              </p>

              <div className="mt-5">
                <CampoEntrada
                  id="email"
                  aria-label="Seu e-mail"
                  icone={Mail}
                  type="email"
                  placeholder="Seu e-mail"
                  onFocus={handleFieldFocus("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="mt-3">
                <CampoEntrada
                  id="password"
                  aria-label="Sua senha"
                  icone={Lock}
                  type="password"
                  placeholder="Sua senha"
                  onFocus={handleFieldFocus("password")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <button
                type="submit"
                className="mt-4 h-14 w-full rounded-xl bg-[#9bddd4] px-5 text-base font-black text-[#07121c] shadow-[0_18px_40px_rgba(155,221,212,0.22)] transition hover:bg-[#b8f2eb] focus:outline-none focus:ring-4 focus:ring-[#9bddd4]/25"
              >
                Continuar
              </button>
            </form>
          </div>

          <div className="relative hidden min-h-0 overflow-hidden rounded-[1.75rem] bg-[#071a2f] lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(155,221,212,0.34),transparent_24%),radial-gradient(circle_at_50%_60%,rgba(54,116,168,0.28),transparent_34%),linear-gradient(180deg,#0b2742_0%,#071a2f_52%,#04111f_100%)]" />
            <div className="absolute left-1/2 top-[17%] h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
            <div className="absolute left-1/2 top-[30%] h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-100/10 blur-2xl" />
            <div className="absolute bottom-[14%] left-1/2 h-20 w-[58%] -translate-x-1/2 rounded-full bg-black/24 blur-2xl" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_center,rgba(155,221,212,0.16),transparent_62%)]" />
            <svg
              aria-hidden
              className="absolute right-[8%] top-[5%] h-28 w-28 text-white/12"
              viewBox="0 0 160 160"
              fill="none"
            >
              <circle cx="80" cy="80" r="46" stroke="currentColor" strokeWidth="2" />
              <ellipse
                cx="80"
                cy="80"
                rx="70"
                ry="20"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(-16 80 80)"
              />
              <path
                d="M48 54 C66 66 95 69 116 58"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute left-[22%] top-[18%] size-1.5 animate-pulse rounded-full bg-cyan-100/80" />
            <span className="absolute right-[24%] top-[28%] size-1 animate-pulse rounded-full bg-white/70 [animation-delay:300ms]" />
            <span className="absolute left-[34%] bottom-[28%] size-1 animate-pulse rounded-full bg-cyan-200/70 [animation-delay:700ms]" />
            <span className="absolute right-[18%] bottom-[38%] size-2 animate-pulse rounded-full bg-white/50 [animation-delay:1000ms]" />
            <span className="absolute left-[14%] top-[42%] size-1 animate-pulse rounded-full bg-cyan-100/60 [animation-delay:1200ms]" />
            <span className="absolute right-[12%] top-[54%] size-1.5 animate-pulse rounded-full bg-cyan-200/50 [animation-delay:1500ms]" />
            <span className="absolute left-[48%] top-[14%] size-1 animate-pulse rounded-full bg-white/60 [animation-delay:1800ms]" />
            <span className="absolute left-[62%] bottom-[18%] size-1 animate-pulse rounded-full bg-cyan-100/55 [animation-delay:2100ms]" />
            <span className="absolute left-[18%] bottom-[18%] size-2 animate-pulse rounded-full bg-white/35 [animation-delay:2400ms]" />
            <RobotMascot mode={focusedField} />
          </div>

          <div className={mobileMascotClass}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(155,221,212,0.34),transparent_24%),radial-gradient(circle_at_50%_60%,rgba(54,116,168,0.28),transparent_34%),linear-gradient(180deg,#0b2742_0%,#071a2f_52%,#04111f_100%)]" />
            <div className="absolute left-1/2 top-[17%] h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
            <div className="absolute left-1/2 top-[30%] h-32 w-64 -translate-x-1/2 rounded-full bg-cyan-100/10 blur-2xl" />
            <div className="absolute bottom-[14%] left-1/2 h-16 w-[58%] -translate-x-1/2 rounded-full bg-black/24 blur-2xl" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-[radial-gradient(ellipse_at_center,rgba(155,221,212,0.16),transparent_62%)]" />
            <svg
              aria-hidden
              className="absolute right-[7%] top-[5%] h-20 w-20 text-white/12"
              viewBox="0 0 160 160"
              fill="none"
            >
              <circle cx="80" cy="80" r="46" stroke="currentColor" strokeWidth="2" />
              <ellipse
                cx="80"
                cy="80"
                rx="70"
                ry="20"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(-16 80 80)"
              />
              <path
                d="M48 54 C66 66 95 69 116 58"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute left-[22%] top-[18%] size-1.5 animate-pulse rounded-full bg-cyan-100/80" />
            <span className="absolute right-[24%] top-[28%] size-1 animate-pulse rounded-full bg-white/70 [animation-delay:300ms]" />
            <span className="absolute left-[34%] bottom-[28%] size-1 animate-pulse rounded-full bg-cyan-200/70 [animation-delay:700ms]" />
            <span className="absolute right-[14%] bottom-[34%] size-1.5 animate-pulse rounded-full bg-white/45 [animation-delay:1000ms]" />
            <span className="absolute left-[15%] top-[44%] size-1 animate-pulse rounded-full bg-cyan-100/60 [animation-delay:1300ms]" />
            <span className="absolute left-[58%] top-[16%] size-1 animate-pulse rounded-full bg-white/60 [animation-delay:1700ms]" />
            <div className="absolute inset-0 translate-y-1 scale-[1.08] sm:scale-100">
              <RobotMascot mode={focusedField} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
