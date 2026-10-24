import type { ReactNode } from "react";
import { Allura, Inter, Newsreader } from "next/font/google";
import { getLocale } from "next-intl/server";
import { DEFAULT_LOCALE, SITE_CONFIG } from "@/config/site";
import { isValidLocale } from "@/lib/i18n";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const allura = Allura({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-allura",
});

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  let locale = DEFAULT_LOCALE;
  try {
    const resolved = await getLocale();
    if (isValidLocale(resolved)) {
      locale = resolved;
    }
  } catch {
    locale = DEFAULT_LOCALE;
  }

  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${newsreader.variable} ${inter.variable} ${allura.variable}`}
    >
      <body className="antialiased selection:bg-blush-200 selection:text-ink-950">
        {children}
      </body>
    </html>
  );
}
