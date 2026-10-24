import path from "path";
import { fileURLToPath } from "url";
import createNextIntlPlugin from "next-intl/plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
