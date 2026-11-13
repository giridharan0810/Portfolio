"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./NameAnimation.css";

interface CraftedByLoadingProps {
  onComplete?: () => void;
  durationMs?: number;
}

export default function CraftedByLoading({
  onComplete,
  durationMs = 2800,
}: CraftedByLoadingProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, durationMs);

    return () => clearTimeout(timer);
  }, [onComplete, durationMs]);

  return (
    <motion.div
      key="crafted-by-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="crafted-loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio, Crafted by Giri"
    >
      <div className="flex flex-col items-center justify-center relative">
        {/* 1. Center Text: CRAFTED BY */}
        <h2 className="crafted-text">CRAFTED BY</h2>

        {/* 2. Signature "Giri" + Curved Arrow from Reference Image */}
        <svg
          className="signature-svg-container"
          viewBox="0 0 540 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Luminous Warm Gold Gradient matching uploaded reference */}
            <linearGradient id="warmGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cfab4c" />
              <stop offset="30%" stopColor="#fae392" />
              <stop offset="68%" stopColor="#ebd078" />
              <stop offset="100%" stopColor="#caa646" />
            </linearGradient>

            {/* Handwriting stroke reveal mask */}
            <mask id="giriHandwritingMask">
              <path
                className="stroke-reveal-mask"
                d="M 155 125 C 155 70, 200 48, 225 48 C 255 48, 265 85, 245 125 C 220 155, 185 155, 185 120 C 185 85, 275 85, 275 140 C 275 165, 245 180, 230 165 C 215 148, 240 125, 280 125 C 300 125, 310 90, 318 90 C 324 90, 318 140, 330 140 C 342 140, 348 95, 362 95 C 378 95, 368 140, 382 140 C 396 140, 402 95, 412 95 C 424 95, 418 140, 430 140"
                stroke="white"
                strokeWidth="56"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </mask>
          </defs>

          {/* 2a. Calligraphy Text "Giri" from Charm font */}
          <g mask="url(#giriHandwritingMask)">
            <text
              x="270"
              y="148"
              textAnchor="middle"
              fontFamily="'Charm', cursive"
              fontSize="138"
              fontWeight="700"
              fill="url(#warmGoldGradient)"
            >
              Giri
            </text>
          </g>

          {/* 2b. The Arched Arrow Shaft running underneath */}
          <path
            className="stroke-arrow-shaft"
            d="M 22 192 C 160 178, 330 180, 485 196"
            stroke="url(#warmGoldGradient)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2c. Hand-drawn Arrowhead with upper barb and hooked lower barb */}
          <path
            className="stroke-arrowhead"
            d="M 454 184 C 472 190, 481 194, 485 196 C 491 210, 493 222, 482 232"
            stroke="url(#warmGoldGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Subtle skip button */}
        <button
          onClick={() => onComplete && onComplete()}
          className="skip-loading-btn"
          aria-label="Skip loading animation"
        >
          Skip
        </button>
      </div>
    </motion.div>
  );
}
