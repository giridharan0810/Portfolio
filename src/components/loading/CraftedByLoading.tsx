"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./CraftedByLoading.module.css";

interface CraftedByLoadingProps {
  onComplete?: () => void;
  durationMs?: number;
}

export default function CraftedByLoading({
  onComplete,
  durationMs = 3200,
}: CraftedByLoadingProps) {
  const [penActive, setPenActive] = useState(true);

  useEffect(() => {
    // Pen disappears right as signature and arrow finish
    const penTimer = setTimeout(() => {
      setPenActive(false);
    }, 2850);

    // Complete loading and transition into website
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, durationMs);

    return () => {
      clearTimeout(penTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, durationMs]);

  return (
    <motion.div
      key="crafted-by-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.99,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      }}
      className={styles.screen}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio, Crafted by Giri"
    >
      <div className={styles.container}>
        {/* 1. Center text: CRAFTED BY */}
        <h2 className={styles.craftedLabel}>CRAFTED BY</h2>

        {/* 2. Authentic Handwritten Signature: "Giri" + Curved Arrow Flourish */}
        <div className={styles.svgWrapper}>
          <svg
            className={styles.svgCanvas}
            viewBox="0 0 540 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Luminous Signature Gradient */}
              <linearGradient id="realSigGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>

              {/* Ambient Glow */}
              <filter id="realSigGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. Letter G — Authentic cursive loop, bowl and descender */}
            <path
              className={styles.strokeG}
              d="M 90 85 C 80 50, 105 32, 130 32 C 155 32, 168 55, 155 82 C 142 108, 105 106, 94 92 C 86 80, 108 72, 134 74 C 146 75, 138 112, 126 142 C 112 172, 88 170, 78 155 C 68 138, 86 120, 130 108 C 142 104, 150 100, 156 96"
              stroke="url(#realSigGradient)"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#realSigGlow)"
            />

            {/* 2. Letter i (first) — Natural connected entry, stem, exit */}
            <path
              className={styles.strokeI1}
              d="M 156 96 C 160 88, 166 74, 172 68 C 174 78, 173 96, 176 106 C 178 110, 184 112, 190 106"
              stroke="url(#realSigGradient)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#realSigGlow)"
            />

            {/* 3. Letter r — Organic cursive crest and stem */}
            <path
              className={styles.strokeR}
              d="M 190 106 C 194 98, 200 76, 208 68 C 212 64, 222 66, 224 72 C 225 80, 221 96, 224 106 C 226 110, 232 112, 238 106"
              stroke="url(#realSigGradient)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#realSigGlow)"
            />

            {/* 4. Letter i (second) — Connected stem flowing toward flourish */}
            <path
              className={styles.strokeI2}
              d="M 238 106 C 242 98, 248 74, 254 68 C 256 78, 255 96, 258 106 C 260 110, 264 112, 270 106"
              stroke="url(#realSigGradient)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#realSigGlow)"
            />

            {/* 5. Natural pen dots on both i's */}
            <g className={styles.strokeDots}>
              <circle cx="173" cy="52" r="2.8" fill="#38bdf8" />
              <circle cx="255" cy="52" r="2.8" fill="#38bdf8" />
            </g>

            {/* 6. Curved Flourish Arrow — Natural continuation of the signature stroke */}
            <path
              className={styles.strokeArrow}
              d="M 270 106 C 282 120, 274 134, 236 144 C 176 158, 101 156, 51 146 C 30 142, 26 154, 36 164 C 60 178, 136 182, 231 172 C 326 162, 411 140, 464 100 C 486 82, 496 62, 488 44"
              stroke="url(#realSigGradient)"
              strokeWidth="3.0"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#realSigGlow)"
            />

            {/* 7. Hand-drawn Arrowhead */}
            <path
              className={styles.strokeArrowhead}
              d="M 464 50 C 478 46, 485 44, 488 44 C 486 54, 482 64, 478 70"
              stroke="#38bdf8"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* 8. Subtle Pen-Tip Indicator that follows the handwriting action */}
          {penActive && (
            <div className={styles.penTipGuide} aria-hidden="true">
              <span className={styles.penTipSpark} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
