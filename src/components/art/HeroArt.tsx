"use client";

import Image from "next/image";

interface HeroArtProps {
  src?: string;
  alt: string;
}

export function HeroArt({ src, alt }: HeroArtProps) {
  if (src) {
    return (
      <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-blush-100 border border-line shadow-[var(--shadow-card)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden border border-line select-none"
      style={{
        background:
          "linear-gradient(145deg, #FFFDFD 0%, #FDEEEE 48%, #F6D2D8 100%)",
        boxShadow: "0 20px 50px -20px rgba(176, 52, 77, 0.18)",
      }}
      role="img"
      aria-label={alt}
    >
      {/* Two soft blurred blobs */}
      <div
        aria-hidden="true"
        className="animate-blob-drift pointer-events-none absolute -top-12 -start-12 w-72 h-72 rounded-full opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(244,191,199,0.85) 0%, rgba(253,238,238,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-blob-drift pointer-events-none absolute bottom-10 -end-10 w-80 h-80 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,151,90,0.22) 0%, rgba(250,217,221,0) 72%)",
          animationDelay: "-5s",
        }}
      />

      {/* Subtle architectural arch & editorial light frame */}
      <svg
        viewBox="0 0 520 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="archGrad" x1="260" y1="60" x2="260" y2="590" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#FFF8F8" stopOpacity="0.24" />
          </linearGradient>
          <linearGradient id="goldStrokeGrad" x1="140" y1="120" x2="380" y2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D4B578" />
            <stop offset="50%" stopColor="#B8975A" />
            <stop offset="100%" stopColor="#9E7E43" />
          </linearGradient>
          <radialGradient id="glowCenter" cx="50%" cy="42%" r="44%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FDEEEE" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft luminous aura */}
        <circle cx="260" cy="280" r="220" fill="url(#glowCenter)" />

        {/* Inner arched frame echoing classical studio aesthetics */}
        <path
          d="M96 590V256C96 165.425 169.425 92 260 92C350.575 92 424 165.425 424 256V590H96Z"
          fill="url(#archGrad)"
          stroke="#B8975A"
          strokeOpacity="0.28"
          strokeWidth="1"
        />

        {/* Delicate gold orbital ring */}
        <ellipse
          cx="258"
          cy="288"
          rx="142"
          ry="178"
          transform="rotate(-8 258 288)"
          stroke="url(#goldStrokeGrad)"
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Subtle botanical leaf shadow at bottom-left */}
        <g opacity="0.22" fill="#C2415A">
          <path d="M84 540C115 510 148 492 178 495C154 522 122 544 84 540Z" />
          <path d="M72 508C98 474 132 454 162 456C140 486 108 506 72 508Z" />
          <path d="M105 566C136 544 168 532 195 538C172 558 140 572 105 566Z" />
        </g>

        {/* Minimalist sculptural pedestal lines at bottom-left (nod to Lumière hero composition) */}
        <g opacity="0.55">
          <rect
            x="108"
            y="498"
            width="84"
            height="56"
            rx="10"
            fill="#FFFFFF"
            stroke="#F0E3E4"
            strokeWidth="1"
          />
          <line
            x1="126"
            y1="520"
            x2="174"
            y2="520"
            stroke="#B8975A"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <line
            x1="134"
            y1="532"
            x2="166"
            y2="532"
            stroke="#6B6B74"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </g>

        {/* Self-drawing single-line female face & graceful hand ("Unlock Your Glow" motif) */}
        <path
          className="animate-draw-line"
          d="M214 148
             C244 134, 286 140, 304 168
             C314 184, 314 205, 309 224
             C306 236, 316 252, 326 272
             C332 284, 328 293, 315 296
             C308 298, 305 304, 311 312
             C317 319, 314 326, 304 329
             C312 334, 313 343, 302 348
             C293 352, 292 362, 296 374
             C300 388, 288 404, 266 406
             C242 408, 220 396, 206 378
             C196 365, 190 346, 192 326
             C194 306, 208 292, 222 286
             C236 280, 246 286, 244 300
             C242 312, 228 320, 216 316
             M256 226
             C268 220, 286 220, 298 227
             M264 242
             C273 247, 285 247, 293 241
             M206 378
             C202 414, 194 452, 178 484
             M264 406
             C262 436, 270 468, 288 494"
          stroke="#0E0E10"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Secondary graceful hair & contour sweep */}
        <path
          className="animate-draw-line"
          d="M236 142
             C192 150, 162 192, 158 244
             C154 294, 172 336, 164 384
             C158 418, 142 444, 134 468"
          stroke="#0E0E10"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />

        {/* Champagne-gold accent stroke highlighting facial harmony (profile line, cheek glow, delicate star) */}
        <path
          className="animate-gold-glint"
          d="M314 212
             C312 228, 322 248, 333 270
             C338 281, 334 291, 321 295
             M234 274
             C254 268, 276 276, 286 294
             M292 328
             C300 328, 308 329, 314 326"
          stroke="url(#goldStrokeGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Delicate 4-point gold sparkle near cheek contour */}
        <path
          className="animate-gold-glint"
          d="M354 202L357 212L367 215L357 218L354 228L351 218L341 215L351 212L354 202Z"
          fill="#B8975A"
          fillOpacity="0.75"
        />
        <circle cx="182" cy="212" r="2.5" fill="#B8975A" fillOpacity="0.55" />
        <circle cx="348" cy="364" r="2" fill="#B8975A" fillOpacity="0.55" />
      </svg>

      {/* Subtle top-start signature badge echoing her "Unlock Your Glow" emblem */}
      <div
        aria-hidden="true"
        className="absolute top-5 start-5 inline-flex items-center gap-2 rounded-full bg-white/75 backdrop-blur-md px-3.5 py-1.5 border border-white/80 shadow-xs"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
        <span className="font-signature text-lg leading-none text-gold-500">
          Unlock Your Glow
        </span>
      </div>
    </div>
  );
}
