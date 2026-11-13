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
  durationMs = 2850,
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
      exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="crafted-loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio, Crafted by Giri"
    >
      <div className="flex flex-col items-center justify-center relative">
        {/* 1. Center Text: CRAFTED BY */}
        <h2 className="crafted-text">CRAFTED BY</h2>

        {/* 2. Signature "Giri" + Curved Flourishing Arrow */}
        <svg
          className="signature-svg-container"
          viewBox="0 0 580 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Luminous Warm Gold Gradient matching reference screenshot */}
            <linearGradient id="warmGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cfab4c" />
              <stop offset="35%" stopColor="#fae392" />
              <stop offset="70%" stopColor="#ebd078" />
              <stop offset="100%" stopColor="#caa646" />
            </linearGradient>

            {/* Soft Ambient Glow */}
            <filter id="inkGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Full-coverage unclipped reveal mask: covers full bounding box so G and i never clip */}
            <clipPath id="inkRevealClip">
              <rect className="clip-revealer" x="0" y="0" width="0" height="260" />
            </clipPath>
          </defs>

          {/* 2a. Calligraphy Text "Giri" from Charm font - 100% visible, no clipping on G or i */}
          <g clipPath="url(#inkRevealClip)" filter="url(#inkGlowFilter)">
            <text
              x="290"
              y="150"
              textAnchor="middle"
              fontFamily="'Charm', cursive"
              fontSize="144"
              fontWeight="700"
              fill="url(#warmGoldGradient)"
            >
              Giri
            </text>
          </g>

          {/* 2b. The Arched Arrow Shaft running underneath */}
          <path
            className="stroke-arrow-shaft"
            d="M 35 194 C 185 180, 360 182, 520 198"
            stroke="url(#warmGoldGradient)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2c. Handcrafted Arrowhead from Reference Image */}
          <path
            className="stroke-arrowhead"
            d="M 488 186 C 507 192, 516 196, 520 198 C 526 212, 528 224, 517 234"
            stroke="url(#warmGoldGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}
