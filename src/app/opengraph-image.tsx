import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background:
            "linear-gradient(135deg, #FFF8F8 0%, #FDEEEE 48%, #FAD9DD 100%)",
          color: "#0E0E10",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 28,
                letterSpacing: "0.18em",
                fontWeight: 500,
                color: "#0E0E10",
              }}
            >
              DR LEILA GUEBLI
            </span>
            <span
              style={{
                fontSize: 13,
                letterSpacing: "0.26em",
                color: "#6B6B74",
                marginTop: 6,
                fontFamily: "sans-serif",
              }}
            >
              MÉDECINE ESTHÉTIQUE · CHÉRAGA, ALGER
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: 999,
              backgroundColor: "#FAD9DD",
              color: "#B0344D",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.12em",
              fontFamily: "sans-serif",
            }}
          >
            CABINET MÉDICO-ESTHÉTIQUE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 860,
          }}
        >
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              color: "#0E0E10",
            }}
          >
            Un visage harmonieux, naturellement sublimé.
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.5,
              color: "#2D2D33",
              marginTop: 22,
              fontFamily: "sans-serif",
            }}
          >
            Injectables, rhinoplastie médicale et soins de la peau à Chéraga,
            Alger.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #F0E3E4",
            paddingTop: 24,
            fontSize: 18,
            color: "#6B6B74",
            fontFamily: "sans-serif",
          }}
        >
          <span>{SITE_CONFIG.address.fullFr}</span>
          <span style={{ color: "#B8975A", fontWeight: 600 }}>
            Tél. {SITE_CONFIG.phoneDisplay}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
