import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-blush-50 text-ink-950">
      <div className="max-w-md w-full rounded-[28px] bg-white border border-line p-8 sm:p-10 text-center shadow-[var(--shadow-card)]">
        <span className="eyebrow-label">/ 404</span>
        <h1 className="heading-h2 mt-3">Page introuvable</h1>
        <p className="mt-3 text-sm text-ink-500">
          La page que vous recherchez n’existe pas ou a été déplacée. / The
          page you are looking for could not be found.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-pill btn-primary">
            <span>Accueil (FR)</span>
            <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
          </Link>
          <Link href="/en" className="btn-pill btn-secondary">
            <span>Home (EN)</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
