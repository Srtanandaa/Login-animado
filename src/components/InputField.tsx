import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

type PropriedadesCampoEntrada = InputHTMLAttributes<HTMLInputElement> & {
  icone?: LucideIcon;
};

export function CampoEntrada({
  icone: Icone,
  id,
  ...propriedades
}: PropriedadesCampoEntrada) {
  const idCampo = id ?? "email";

  return (
    <label
      className="flex h-12 items-center gap-3 rounded-xl border border-cyan-200/10 bg-[#050914]/85 px-3.5 text-cyan-100/45 shadow-inner shadow-cyan-100/[0.03] ring-1 ring-transparent transition focus-within:border-cyan-200/40 focus-within:ring-[#9bddd4]/45 sm:h-14 sm:px-4"
      htmlFor={idCampo}
    >
      {Icone ? (
        <Icone aria-hidden className="size-6 shrink-0" strokeWidth={1.8} />
      ) : null}
      <span className="h-7 w-px bg-[#9bddd4]/80" />
      <input
        id={idCampo}
        className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-cyan-100/28 sm:text-base"
        {...propriedades}
      />
    </label>
  );
}
