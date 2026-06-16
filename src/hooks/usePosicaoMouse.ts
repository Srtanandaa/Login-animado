"use client";

import { useEffect, useState } from "react";

type PosicaoMouse = {
  x: number;
  y: number;
};

export function usePosicaoMouse(): PosicaoMouse {
  const [posicao, definirPosicao] = useState<PosicaoMouse>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    function aoMoverMouse(evento: MouseEvent) {
      definirPosicao({
        x: evento.clientX / window.innerWidth,
        y: evento.clientY / window.innerHeight,
      });
    }

    window.addEventListener("mousemove", aoMoverMouse);

    return () => {
      window.removeEventListener("mousemove", aoMoverMouse);
    };
  }, []);

  return posicao;
}
