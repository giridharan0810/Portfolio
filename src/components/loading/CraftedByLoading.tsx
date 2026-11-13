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
              {/* Luminous Gold Signature Gradient from Giri's Reference */}
              <linearGradient id="goldSigGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fcedb4" />
                <stop offset="50%" stopColor="#e6c670" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>

              {/* Ambient Warm Golden Glow */}
              <filter id="goldSigGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. Capital Letter G — Authentic cursive loop, apex crown, body bowl & lower swoosh */}
            <path
              className={styles.strokeG}
              d="M 125 148 C 108 128, 128 58, 160 40 C 178 30, 192 42, 186 65 C 178 95, 142 122, 168 138 C 192 148, 208 126, 200 95 C 196 82, 184 82, 179 92 C 170 110, 184 145, 168 180 C 156 204, 134 200, 128 182 C 122 160, 148 148, 196 146"
              stroke="url(#goldSigGradient)"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldSigGlow)"
            />

            {/* 2. Letter i (first) — Natural connected entry, stem, exit */}
            <path
              className={styles.strokeI1}
              d="M 196 146 C 206 132, 218 108, 226 100 C 229 114, 227 138, 230 148 C 233 154, 240 156, 248 146"
              stroke="url(#goldSigGradient)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldSigGlow)"
            />

            {/* 3. Letter r — Organic cursive crest and stem */}
            <path
              className={styles.strokeR}
              d="M 248 146 C 254 134, 262 106, 272 101 C 277 98, 288 100, 291 106 C 292 115, 288 136, 292 148 C 295 154, 302 156, 310 146"
              stroke="url(#goldSigGradient)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldSigGlow)"
            />

            {/* 4. Letter i (second) — Connected stem flowing toward flourish */}
            <path
              className={styles.strokeI2}
              d="M 310 146 C 316 134, 326 108, 334 100 C 337 114, 335 138, 338 148 C 341 154, 348 156, 358 146"
              stroke="url(#goldSigGradient)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldSigGlow)"
            />

            {/* 5. Golden pen dots on both i's */}
            <g className={styles.strokeDots}>
              <circle cx="227" cy="85" r="3.2" fill="#fcedb4" />
              <circle cx="335" cy="85" r="3.2" fill="#fcedb4" />
            </g>

            {/* 6. Curved Flourish Arrow — Flowing convex underline arch matching Giri reference image */}
            <path
              className={styles.strokeArrow}
              d="M 40 185 Q 260 166, 480 182"
              stroke="url(#goldSigGradient)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldSigGlow)"
            />

            {/* 7. Stylish Hand-drawn Arrowhead */}
            <path
              className={styles.strokeArrowhead}
              d="M 445 170 Q 470 178, 480 182 C 476 195, 468 208, 472 216"
              stroke="url(#goldSigGradient)"
              strokeWidth="3.0"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldSigGlow)"
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
