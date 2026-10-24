import Image from "next/image";

export type ImageSlotId =
  | "about-cabinet"
  | "banner"
  | "concern-hero"
  | "faq-side"
  | "doctor-portrait";

interface ImageSlotProps {
  slot: ImageSlotId;
  src?: string;
  alt: string;
  badgeText?: string;
  className?: string;
}

export function ImageSlot({
  slot,
  src,
  alt,
  badgeText,
  className = "",
}: ImageSlotProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-[24px] bg-blush-100 border border-line ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-line select-none ${className}`}
      style={{
        background:
          slot === "banner"
            ? "linear-gradient(135deg, #FFF8F8 0%, #FAD9DD 55%, #F4BFC7 100%)"
            : "linear-gradient(140deg, #FFFFFF 0%, #FDEEEE 52%, #FAD9DD 100%)",
        boxShadow: "0 14px 36px -18px rgba(176, 52, 77, 0.16)",
      }}
      role="img"
      aria-label={alt}
    >
      {/* Ambient light rays / plant shadow effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -end-12 w-64 h-64 rounded-full opacity-75 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.92) 0%, rgba(255,248,248,0) 70%)",
        }}
      />

      {slot === "about-cabinet" && (
        <svg
          viewBox="0 0 480 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Diagonal sunlight window beam */}
          <path
            d="M0 0L240 0L420 360L120 360L0 0Z"
            fill="#FFFFFF"
            fillOpacity="0.45"
          />
          {/* Minimalist clinic arch & consultation mirror */}
          <path
            d="M110 320V140C110 84.7715 154.772 40 210 40C265.228 40 310 84.7715 310 140V320H110Z"
            fill="#FFFFFF"
            fillOpacity="0.65"
            stroke="#B8975A"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
          {/* Sculptural vase + botanical stems */}
          <path
            d="M272 320H348L338 238C336 224 324 214 310 214C296 214 284 224 282 238L272 320Z"
            fill="#FFF8F8"
            stroke="#0E0E10"
            strokeWidth="1.4"
          />
          <path
            d="M310 214C310 172 332 134 364 108M310 186C286 164 268 140 264 116M324 162C344 154 366 156 382 168"
            stroke="#0E0E10"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Delicate botanical leaves */}
          <path
            d="M364 108C346 106 334 118 336 134C352 132 364 122 364 108Z"
            fill="#FAD9DD"
            stroke="#B8975A"
            strokeWidth="1.2"
          />
          <path
            d="M264 116C280 116 290 128 286 142C272 138 264 128 264 116Z"
            fill="#FAD9DD"
            stroke="#B8975A"
            strokeWidth="1.2"
          />
          {/* Pedestal tray on left */}
          <rect
            x="136"
            y="252"
            width="112"
            height="68"
            rx="12"
            fill="#FFFFFF"
            stroke="#F0E3E4"
            strokeWidth="1.2"
          />
          <line
            x1="164"
            y1="278"
            x2="220"
            y2="278"
            stroke="#B8975A"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <line
            x1="164"
            y1="294"
            x2="202"
            y2="294"
            stroke="#6B6B74"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      )}

      {slot === "banner" && (
        <svg
          viewBox="0 0 360 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <circle
            cx="190"
            cy="140"
            r="98"
            fill="#FFFFFF"
            fillOpacity="0.55"
            stroke="#B8975A"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
          {/* Gold hairline petals & harmonious facial silhouette */}
          <path
            d="M190 56C208 86 208 118 190 140C172 118 172 86 190 56Z"
            stroke="#B8975A"
            strokeWidth="1.4"
          />
          <path
            d="M264 140C234 158 202 158 180 140C202 122 234 122 264 140Z"
            stroke="#B8975A"
            strokeWidth="1.4"
          />
          <path
            d="M116 140C146 158 178 158 200 140C178 122 146 122 116 140Z"
            stroke="#0E0E10"
            strokeWidth="1.3"
          />
          <path
            d="M190 224C208 194 208 162 190 140C172 162 172 194 190 224Z"
            stroke="#0E0E10"
            strokeWidth="1.3"
          />
          <circle cx="190" cy="140" r="18" fill="#FFF8F8" stroke="#B8975A" strokeWidth="1.4" />
          {/* Marble platform base */}
          <rect
            x="92"
            y="224"
            width="196"
            height="22"
            rx="11"
            fill="#FFFFFF"
            fillOpacity="0.85"
            stroke="#F0E3E4"
          />
        </svg>
      )}

      {slot === "concern-hero" && (
        <svg
          viewBox="0 0 460 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <circle
            cx="230"
            cy="160"
            r="118"
            fill="#FFFFFF"
            fillOpacity="0.68"
            stroke="#B8975A"
            strokeOpacity="0.3"
            strokeWidth="1.2"
          />
          {/* Minimalist face & hands line illustration */}
          <path
            d="M192 92C214 82 246 82 268 92C284 102 292 124 288 152C284 182 260 212 230 216C200 212 176 182 172 152C168 124 176 102 192 92Z"
            stroke="#0E0E10"
            strokeWidth="1.5"
          />
          <path
            d="M196 136C206 130 218 130 224 136M236 136C242 130 254 130 264 136"
            stroke="#0E0E10"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M230 138V166C230 170 226 173 221 173"
            stroke="#0E0E10"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M214 188C224 193 236 193 246 188"
            stroke="#B8975A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Target aesthetic harmony points */}
          <circle cx="192" cy="158" r="3.5" fill="#B8975A" />
          <circle cx="268" cy="158" r="3.5" fill="#B8975A" />
          <circle cx="230" cy="112" r="3" fill="#B8975A" />
          <path
            d="M160 224C184 202 204 206 218 228M300 224C276 202 256 206 242 228"
            stroke="#0E0E10"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      )}

      {(slot === "faq-side" || slot === "doctor-portrait") && (
        <svg
          viewBox="0 0 440 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            d="M100 320V148C100 88.3532 148.353 40 208 40H232C291.647 40 340 88.3532 340 148V320H100Z"
            fill="#FFFFFF"
            fillOpacity="0.68"
            stroke="#B8975A"
            strokeOpacity="0.32"
            strokeWidth="1.2"
          />
          {/* Minimalist consultation notebook & botanical branch */}
          <rect
            x="156"
            y="116"
            width="128"
            height="164"
            rx="16"
            fill="#FFFDFD"
            stroke="#0E0E10"
            strokeWidth="1.4"
          />
          <line
            x1="182"
            y1="154"
            x2="258"
            y2="154"
            stroke="#B8975A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="182"
            y1="178"
            x2="246"
            y2="178"
            stroke="#0E0E10"
            strokeOpacity="0.65"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <line
            x1="182"
            y1="202"
            x2="252"
            y2="202"
            stroke="#0E0E10"
            strokeOpacity="0.65"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M196 242C208 232 224 236 238 242"
            stroke="#B8975A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Subtle gold sparkle */}
          <path
            d="M298 88L301 98L311 101L301 104L298 114L295 104L285 101L295 98L298 88Z"
            fill="#B8975A"
            fillOpacity="0.75"
          />
        </svg>
      )}

      {badgeText && (
        <div
          aria-hidden="true"
          className="absolute bottom-4 start-4 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-3.5 py-1.5 border border-white/80 text-xs font-medium text-ink-700"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span>{badgeText}</span>
        </div>
      )}
    </div>
  );
}
