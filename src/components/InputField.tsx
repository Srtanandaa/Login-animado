import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

type PropriedadesCampoEntrada = InputHTMLAttributes<HTMLInputElement> & {
  icone?: LucideIcon;
  mobileActive?: boolean;
  mobileTriggerLabel?: string;
  onMobileTrigger?: () => void;
};

export function CampoEntrada({
  icone: Icone,
  id,
  mobileActive = false,
  mobileTriggerLabel,
  onMobileTrigger,
  ...propriedades
}: PropriedadesCampoEntrada) {
  const idCampo = id ?? "email";

  return (
    <label
      className={`relative flex h-12 items-center gap-3 rounded-xl border bg-[#050914]/85 px-3.5 text-cyan-100/45 shadow-inner shadow-cyan-100/[0.03] ring-1 transition focus-within:border-cyan-200/40 focus-within:ring-[#9bddd4]/45 sm:h-14 sm:px-4 ${
        mobileActive
          ? "border-cyan-200/40 ring-[#9bddd4]/45"
          : "border-cyan-200/10 ring-transparent"
      }`}
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
      {onMobileTrigger ? (
        <button
          type="button"
          aria-label={mobileTriggerLabel ?? propriedades["aria-label"]}
          data-mobile-field-trigger="true"
          className="absolute inset-0 z-10 rounded-xl lg:hidden"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onMobileTrigger();
          }}
          onPointerDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onMobileTrigger();
          }}
        />
      ) : null}
    </label>
  );
}
