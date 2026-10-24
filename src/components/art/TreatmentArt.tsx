import Image from "next/image";
import { TreatmentIconKey } from "@/content/treatments";

interface TreatmentArtProps {
  icon: TreatmentIconKey;
  image?: string;
  alt: string;
}

export function TreatmentArt({ icon, image, alt }: TreatmentArtProps) {
  if (image) {
    return (
      <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden bg-blush-100 border border-line">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 80vw, 25vw"
          className="object-cover transition-transform duration-500 ease-[var(--ease-luxury)] group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden border border-line flex items-center justify-center transition-transform duration-500 ease-[var(--ease-luxury)] group-hover:scale-[1.03]"
      style={{
        background:
          "linear-gradient(145deg, #FFFDFD 0%, #FDEEEE 55%, #FAD9DD 100%)",
      }}
      role="img"
      aria-label={alt}
    >
      {/* Subtle radial glow in center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(253,238,238,0) 70%)",
        }}
      />

      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-4/5 h-4/5"
        aria-hidden="true"
      >
        {/* Subtle studio pedestal frame */}
        <rect
          x="32"
          y="28"
          width="136"
          height="184"
          rx="68"
          stroke="#B8975A"
          strokeOpacity="0.22"
          strokeWidth="1"
        />

        {icon === "face-lines" && (
          <g>
            {/* Upper face & brow harmony */}
            <path
              d="M58 118C72 104 92 104 100 114C108 104 128 104 142 118"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M66 132C76 126 88 126 95 132M105 132C112 126 124 126 134 132"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M62 104C62 72 80 56 100 56C120 56 138 72 138 104C138 144 122 176 100 182C78 176 62 144 62 104Z"
              stroke="#0E0E10"
              strokeWidth="1.5"
            />
            {/* Gold accent stroke: serene forehead arc */}
            <path
              d="M76 86C88 80 112 80 124 86M84 96C94 92 106 92 116 96"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        )}

        {icon === "lips" && (
          <g>
            {/* Balanced lips contour */}
            <path
              d="M52 120C66 108 82 102 93 110C97 113 103 113 107 110C118 102 134 108 148 120C132 142 116 150 100 150C84 150 68 142 52 120Z"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M54 120C74 123 88 120 100 122C112 120 126 123 146 120"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Gold accent stroke: cupid's bow & lower highlight */}
            <path
              d="M78 101C86 96 94 98 100 103C106 98 114 96 122 101M82 137C94 142 106 142 118 137"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        )}

        {icon === "nose-profile" && (
          <g>
            {/* Delicate nasal profile & brow-to-chin line */}
            <path
              d="M84 62C94 68 98 80 96 94C95 106 108 124 116 138C120 145 116 152 106 154C98 155 94 160 98 166C102 172 96 178 88 182"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Gold accent stroke: harmonized dorsal line */}
            <path
              d="M104 90C110 108 118 124 125 138C128 144 124 151 116 154"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="3 3"
            />
            <circle cx="112" cy="116" r="2.5" fill="#B8975A" />
          </g>
        )}

        {icon === "droplet" && (
          <g>
            {/* Deep hydration droplet */}
            <path
              d="M100 66C100 66 66 108 66 134C66 152.778 81.2223 168 100 168C118.778 168 134 152.778 134 134C134 108 100 66 100 66Z"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Gold accent ripple & inner highlight */}
            <path
              d="M82 136C82 146 90 154 100 154M60 178C84 186 116 186 140 178"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        )}

        {icon === "sparkle-water" && (
          <g>
            {/* Vortex wave + radiance */}
            <path
              d="M62 126C78 112 94 112 106 124C118 136 130 132 140 120"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M66 144C82 132 98 132 110 142C120 150 130 148 138 140"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Gold sparkle star */}
            <path
              d="M100 72L104 88L120 92L104 96L100 112L96 96L80 92L96 88L100 72Z"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </g>
        )}

        {icon === "layers" && (
          <g>
            {/* Epidermal renewal layers */}
            <path
              d="M58 102L100 80L142 102L100 124L58 102Z"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M58 122L100 144L142 122"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M58 142L100 164L142 142"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        {icon === "dot-grid" && (
          <g>
            {/* Collagen matrix & micro-channels */}
            {[84, 108, 132].map((y) =>
              [72, 100, 128].map((x) => (
                <circle
                  key={`${x}-${y}`}
                  cx={x}
                  cy={y}
                  r="3"
                  stroke="#0E0E10"
                  strokeWidth="1.5"
                />
              ))
            )}
            {/* Gold accent connecting collagen network */}
            <path
              d="M72 154C90 144 110 144 128 154M72 108L100 84L128 108L100 132L72 108Z"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}

        {icon === "drop-plasma" && (
          <g>
            {/* PRP regeneration droplet & cellular ring */}
            <path
              d="M100 76C100 76 76 108 76 128C76 141.255 86.7452 152 100 152C113.255 152 124 141.255 124 128C124 108 100 76 100 76Z"
              stroke="#0E0E10"
              strokeWidth="1.5"
            />
            <circle
              cx="100"
              cy="124"
              r="42"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeDasharray="6 5"
            />
            <circle cx="100" cy="128" r="6" stroke="#B8975A" strokeWidth="1.5" />
          </g>
        )}

        {icon === "beam" && (
          <g>
            {/* Targeted light beam */}
            <path
              d="M74 70L100 138L126 70"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M62 152C86 144 114 144 138 152"
              stroke="#0E0E10"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Gold focal point & axis */}
            <line
              x1="100"
              y1="66"
              x2="100"
              y2="138"
              stroke="#B8975A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="100" cy="138" r="5" stroke="#B8975A" strokeWidth="1.5" />
          </g>
        )}

        {icon === "cells" && (
          <g>
            <circle cx="92" cy="112" r="22" stroke="#0E0E10" strokeWidth="1.5" />
            <circle cx="116" cy="132" r="16" stroke="#0E0E10" strokeWidth="1.5" />
            <circle cx="92" cy="112" r="6" stroke="#B8975A" strokeWidth="1.5" />
            <circle cx="116" cy="132" r="4" stroke="#B8975A" strokeWidth="1.5" />
          </g>
        )}
      </svg>
    </div>
  );
}
