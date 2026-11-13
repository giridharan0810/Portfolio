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

        {/* 2. Signature animation: Giri + Curved Flowing Arrow Flourish */}
        <svg
          className="signature-svg-container"
          viewBox="0 0 460 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Signature Stroke Gradient: Indigo into Soft Violet into Cyan */}
            <linearGradient id="giriSigGradient" x1="0%" y1="10%" x2="100%" y2="90%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="55%" stopColor="#a5b4fc" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="sigGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 2a. Handwritten Signature: "Giri" */}
          <path
            className="stroke-signature"
            d="M 70 100 C 60 70, 78 36, 102 36 C 126 36, 132 64, 118 88 C 102 112, 76 108, 70 94 C 64 82, 85 75, 108 77 C 118 78, 114 105, 104 128 C 92 152, 72 150, 66 138 C 60 124, 76 112, 110 102 C 122 98, 132 80, 138 72 C 140 84, 139 96, 142 104 C 144 108, 148 110, 154 104 C 158 98, 164 82, 170 74 C 174 70, 184 72, 186 78 C 187 86, 183 98, 186 104 C 188 108, 194 110, 200 104 C 204 98, 210 82, 216 72 C 218 84, 217 96, 220 104 C 222 108, 226 109, 230 105"
            stroke="url(#giriSigGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#sigGlow)"
          />

          {/* 2b. Dots on the two 'i' letters */}
          <g className="stroke-dots">
            <circle cx="140" cy="56" r="2.8" fill="#38bdf8" />
            <circle cx="218" cy="56" r="2.8" fill="#38bdf8" />
          </g>

          {/* 2c. Beautiful Curved Flourishing Arrow extending from the signature */}
          <path
            className="stroke-arrow-curve"
            d="M 230 105 C 240 118, 232 130, 200 138 C 150 148, 88 146, 44 138 C 26 134, 22 146, 32 154 C 52 166, 122 168, 206 160 C 292 150, 368 132, 412 94 C 432 76, 440 56, 430 40"
            stroke="url(#giriSigGradient)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#sigGlow)"
          />

          {/* 2d. Stylish Curved Arrowhead */}
          <path
            className="stroke-arrowhead"
            d="M 408 46 C 420 42, 428 40, 430 40 C 429 48, 426 58, 420 64"
            stroke="#38bdf8"
            strokeWidth="2.6"
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
