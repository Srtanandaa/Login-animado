"use client";

import { motion } from "framer-motion";
import { usePosicaoMouse } from "@/hooks/usePosicaoMouse";

type MascotMode = "email" | "password" | null;

type RobotMascotProps = {
  mode: MascotMode;
};

export function RobotMascot({ mode }: RobotMascotProps) {
  const { x: eyeMouseX, y: eyeMouseY } = usePosicaoMouse();
  const isEmail = mode === "email";
  const isPassword = mode === "password";
  const eyeX = isPassword ? 0 : (eyeMouseX - 0.5) * 18;
  const eyeY = isPassword ? 0 : (eyeMouseY - 0.5) * 9;
  const leftArmRotate = isPassword ? -76 : -12;
  const rightArmRotate = isPassword ? 76 : 12;

  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden">
      <motion.svg
        viewBox="0 0 800 600"
        role="img"
        aria-label="Mascote robo animado"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        animate={{ x: [0, 4, 0, -4, 0], y: [0, -16, 0], rotate: [0, 0.8, 0, -0.8, 0], scale: 1 }}
        transition={{
          y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <defs>
          <filter id="softRobotShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <g transform="translate(187 80) scale(0.82)">
          <motion.ellipse
            cx="260"
            cy="452"
            rx="118"
            ry="19"
            fill="#2995a4"
            opacity="0.38"
            filter="url(#softRobotShadow)"
            animate={{ scaleX: [1, 0.82, 1], opacity: [0.38, 0.24, 0.38] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <g>
          <rect x="256" y="96" width="8" height="34" rx="4" fill="#eee8cf" />
          <circle cx="260" cy="93" r="12" fill="#eee8cf" />
          <path
            d="M220 142 H300 Q320 142 324 173 H196 Q200 142 220 142Z"
            fill="#eee8cf"
          />
          </g>

          {!isPassword ? (
            <>
              <motion.g
                animate={
                  isEmail
                    ? { rotate: [70, 15, 70] }
                    : { rotate: leftArmRotate }
                }
                transition={
                  isEmail
                    ? {
                        duration: 1.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { type: "spring", stiffness: 150, damping: 16 }
                }
                style={{ originX: "39%", originY: "62%" }}
              >
                <path
                  d="M176 306 C130 330 108 379 101 407 C98 418 106 425 117 419 C156 398 189 369 224 332Z"
                  fill="#e1dcc3"
                />
              </motion.g>

              <motion.g
                animate={{ rotate: rightArmRotate }}
                transition={{ type: "spring", stiffness: 150, damping: 16 }}
                style={{ originX: "61%", originY: "62%" }}
              >
                <path
                  d="M344 306 C390 330 412 379 419 407 C422 418 414 425 403 419 C364 398 331 369 296 332Z"
                  fill="#e1dcc3"
                />
              </motion.g>
            </>
          ) : null}

          <path
          d="M178 292 C188 255 217 235 260 235 C303 235 332 255 342 292 C378 338 392 402 372 448 C353 493 318 514 260 514 C202 514 167 493 148 448 C128 402 142 338 178 292Z"
          fill="#eee8cf"
        />
        <path
          d="M164 344 H356 V382 H164Z"
          fill="#e6dfc6"
          opacity="0.55"
        />
        <rect x="204" y="352" width="112" height="88" rx="44" fill="#e6dfc6" />

        <ellipse cx="213" cy="510" rx="25" ry="18" fill="#d9d2b9" />
        <ellipse cx="307" cy="510" rx="25" ry="18" fill="#d9d2b9" />

        <path
          d="M145 173 H375 C418 173 444 207 444 260 C444 313 418 347 375 347 H145 C102 347 76 313 76 260 C76 207 102 173 145 173Z"
          fill="#eee8cf"
        />
        <rect x="100" y="188" width="320" height="144" rx="63" fill="#0f2b38" />

        <rect x="68" y="224" width="48" height="72" rx="24" fill="#eee8cf" />
        <rect x="404" y="224" width="48" height="72" rx="24" fill="#eee8cf" />

        {isPassword ? (
          <>
            <path
              d="M189 256 H220"
              stroke="#9bddd4"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M300 256 H331"
              stroke="#9bddd4"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <motion.circle
              cx="168"
              cy="278"
              r="22"
              fill="#ff7f97"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 0.82, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            />
            <motion.circle
              cx="352"
              cy="278"
              r="22"
              fill="#ff7f97"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 0.82, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            />
          </>
        ) : (
          <>
            <motion.circle
              cx="205"
              cy="255"
              r="17"
              fill="#9bddd4"
              animate={{ x: eyeX, y: eyeY }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            />
            <motion.circle
              cx="315"
              cy="255"
              r="17"
              fill="#9bddd4"
              animate={{ x: eyeX, y: eyeY }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            />
          </>
        )}

        <motion.path
          d="M238 267 C238 293 282 293 282 267"
          fill="none"
          stroke="#9bddd4"
          strokeWidth="13"
          strokeLinecap="round"
          animate={{
            d: isEmail
              ? "M236 270 C240 298 280 298 284 270"
              : "M238 267 C238 293 282 293 282 267",
          }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
        />

        {isPassword ? (
          <motion.g
            initial={{ opacity: 0, y: 58, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 17 }}
          >
            <path
              d="M144 333 C160 292 184 258 218 238"
              fill="none"
              stroke="#e1dcc3"
              strokeLinecap="round"
              strokeWidth="34"
            />
            <path
              d="M376 333 C360 292 336 258 302 238"
              fill="none"
              stroke="#e1dcc3"
              strokeLinecap="round"
              strokeWidth="34"
            />
            <ellipse cx="216" cy="239" rx="36" ry="27" fill="#eee8cf" />
            <ellipse cx="304" cy="239" rx="36" ry="27" fill="#eee8cf" />
            <circle cx="201" cy="238" r="4" fill="#d9d2b9" />
            <circle cx="216" cy="232" r="4" fill="#d9d2b9" />
            <circle cx="231" cy="238" r="4" fill="#d9d2b9" />
            <circle cx="289" cy="238" r="4" fill="#d9d2b9" />
            <circle cx="304" cy="232" r="4" fill="#d9d2b9" />
            <circle cx="319" cy="238" r="4" fill="#d9d2b9" />
          </motion.g>
        ) : null}
        </g>
      </motion.svg>
    </div>
  );
}
