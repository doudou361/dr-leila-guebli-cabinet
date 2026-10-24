"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  variant: "rhinoplastie" | "levres";
  beforeTag: string;
  afterTag: string;
  illustrationTag: string;
  ariaLabel: string;
  beforeSrc?: string;
  afterSrc?: string;
}

export function BeforeAfterSlider({
  variant,
  beforeTag,
  afterTag,
  illustrationTag,
  ariaLabel,
  beforeSrc,
  afterSrc,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateFromClientX = (clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(8, Math.min(92, raw));
    setPosition(clamped);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => {
        setDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!dragging) return;
        updateFromClientX(e.clientX);
      }}
      onPointerUp={(e) => {
        if (!dragging) return;
        setDragging(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => setDragging(false)}
      className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden border border-line select-none touch-pan-y cursor-ew-resize bg-blush-50"
    >
      {/* AFTER LAYER (Full width base) */}
      <div className="absolute inset-0">
        {afterSrc ? (
          <Image
            src={afterSrc}
            alt={afterTag}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <DiagramLayer variant={variant} state="after" />
        )}
      </div>

      {/* BEFORE LAYER (Clipped from left to position%) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeSrc ? (
          <Image
            src={beforeSrc}
            alt={beforeTag}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <DiagramLayer variant={variant} state="before" />
        )}
      </div>

      {/* Top Tags: Gold AVANT / APRÈS + Illustration pill */}
      <div className="pointer-events-none absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-20">
        <span
          className="inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-xs"
          style={{
            background: "linear-gradient(135deg, #B8975A 0%, #9A7B42 100%)",
          }}
        >
          {beforeTag}
        </span>

        <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-xs border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-700">
          {illustrationTag}
        </span>

        <span
          className="inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-xs"
          style={{
            background: "linear-gradient(135deg, #B8975A 0%, #9A7B42 100%)",
          }}
        >
          {afterTag}
        </span>
      </div>

      {/* Vertical Divider Line + Accessible Slider Handle with Gold Ring */}
      <div
        style={{ left: `${position}%` }}
        className="absolute inset-y-0 -translate-x-1/2 z-20 flex items-center justify-center"
      >
        <div
          aria-hidden="true"
          className="w-[1.5px] h-full bg-gold-500 shadow-[0_0_8px_rgba(184,151,90,0.5)]"
        />

        <button
          type="button"
          role="slider"
          aria-label={ariaLabel}
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={Math.round(position)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              setPosition((p) => Math.max(8, p - 5));
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              setPosition((p) => Math.min(92, p + 5));
            } else if (e.key === "Home") {
              e.preventDefault();
              setPosition(10);
            } else if (e.key === "End") {
              e.preventDefault();
              setPosition(90);
            }
          }}
          className="absolute w-11 h-11 rounded-full bg-white border-2 border-gold-500 shadow-md flex items-center justify-center text-ink-950 hover:scale-105 transition-transform cursor-ew-resize"
        >
          <MoveHorizontal className="w-4 h-4 text-gold-500" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function DiagramLayer({
  variant,
  state,
}: {
  variant: "rhinoplastie" | "levres";
  state: "before" | "after";
}) {
  const isAfter = state === "after";

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: isAfter
          ? "linear-gradient(135deg, #FFF8F8 0%, #FDEEEE 55%, #F7D4DA 100%)"
          : "linear-gradient(135deg, #FFFFFF 0%, #FFF8F8 60%, #FDEEEE 100%)",
      }}
    >
      <svg
        viewBox="0 0 420 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Architectural guide grid */}
        <line
          x1="60"
          y1="130"
          x2="360"
          y2="130"
          stroke="#B8975A"
          strokeOpacity="0.2"
          strokeDasharray="4 4"
        />
        <circle
          cx="210"
          cy="130"
          r="84"
          fill="#FFFFFF"
          fillOpacity="0.65"
          stroke="#B8975A"
          strokeOpacity="0.28"
        />

        {variant === "rhinoplastie" ? (
          <g>
            {/* Nasal profile diagram: before shows a small dorsal bump; after shows a smooth harmonized bridge */}
            {isAfter ? (
              <>
                <path
                  d="M180 62C190 70 194 82 194 96C194 112 214 134 228 152C233 158 228 166 216 168C206 170 202 176 206 184C210 190 204 198 192 204"
                  stroke="#0E0E10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Gold harmony line */}
                <path
                  d="M198 92L234 150"
                  stroke="#B8975A"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeDasharray="3 3"
                />
                <circle cx="212" cy="116" r="3.5" fill="#B8975A" />
                <circle cx="231" cy="153" r="3.5" fill="#B8975A" />
              </>
            ) : (
              <>
                <path
                  d="M180 62C190 70 194 82 192 96C191 104 206 112 214 124C219 132 215 140 226 154C230 160 225 168 214 170C205 171 202 177 206 184C210 190 204 198 192 204"
                  stroke="#2D2D33"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Subtle indicator on dorsal irregularity */}
                <circle
                  cx="213"
                  cy="123"
                  r="9"
                  stroke="#B8975A"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
              </>
            )}
          </g>
        ) : (
          <g>
            {/* Lip balance diagram: before has flatter vermilion border; after has defined cupid's bow & hydrated fullness */}
            {isAfter ? (
              <>
                <path
                  d="M138 130C158 112 182 104 198 114C205 118 215 118 222 114C238 104 262 112 282 130C260 158 236 168 210 168C184 168 160 158 138 130Z"
                  fill="#FAD9DD"
                  fillOpacity="0.55"
                  stroke="#0E0E10"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M142 130C170 134 192 130 210 132C228 130 250 134 278 130"
                  stroke="#0E0E10"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M178 106C190 100 200 103 210 109C220 103 230 100 242 106M182 152C198 158 222 158 238 152"
                  stroke="#B8975A"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <path
                  d="M142 130C162 120 184 116 198 121C205 123 215 123 222 121C236 116 258 120 278 130C258 148 236 154 210 154C184 154 162 148 142 130Z"
                  stroke="#2D2D33"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M144 130C172 132 192 130 210 131C228 130 248 132 276 130"
                  stroke="#2D2D33"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
