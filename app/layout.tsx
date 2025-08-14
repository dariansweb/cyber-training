import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileSidebar from "@/components/MobileSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red ↔ Blue Web Security Curriculum",
  description:
    "A mirrored Red Team & Blue Team course: modules, labs, and capstones for offensive and defensive web security.",
  applicationName: "Cyber Course",
  category: "education",
  keywords: [
    "web security",
    "red team",
    "blue team",
    "pentesting",
    "defense",
    "OWASP",
    "curriculum",
  ],
  authors: [{ name: "Cyber Course" }],
  openGraph: {
    title: "Red ↔ Blue Web Security Curriculum",
    description:
      "Offense shows how to break it. Defense shows how to stop it—run in parallel for Purple Team drills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-slate-800 text-slate-100`}
      >
        {/* Skip link for a11y */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-slate-900 focus:px-3 focus:py-2 focus:outline-none"
        >
          Skip to content
        </a>

        {/* Header / Top Bar */}
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Brand / Title */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-lg">
                  ⚔️
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-slate-400">
                    Cyber Course
                  </div>
                  <h1 className="text-base font-semibold leading-tight">
                    Red <span className="text-rose-400">↔</span> Blue Web
                    Security Curriculum
                  </h1>
                </div>
              </div>

              {/* Right side: meta badges (desktop) & mobile syllabus trigger */}
              <div className="flex items-center gap-3">
                {/* Desktop badges */}
                <div className="hidden items-center gap-2 sm:flex">
                  <Badge>Red Team</Badge>
                  <Badge tone="sky">Blue Team</Badge>
                  <Badge tone="violet">Purple Labs</Badge>
                  <span
                    className="mx-2 hidden h-5 w-px bg-slate-800 sm:inline"
                    aria-hidden
                  />
                  {/* <MetaPill label="Duration" value="8 Modules" />
                  <MetaPill label="Level" value="Intermediate → Advanced" />
                  <MetaPill label="Format" value="Hands-on + Capstone" /> */}
                </div>

                {/* Mobile: Syllabus drawer trigger */}
                <div className="sm:hidden">
                  <MobileSidebar />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Shell */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[280px_minmax(0,1fr)]">
          {/* Sidebar: Syllabus / Outline (desktop only) */}
          <aside className="hidden md:sticky md:top-[4.5rem] md:block md:self-start">
            <nav
              aria-label="Curriculum Outline"
              className="rounded-xl border border-slate-800 bg-slate-900/40"
            >
              <div className="border-b border-slate-800 px-4 py-3">
                <div className="text-xs uppercase tracking-wide text-slate-400">
                  Syllabus
                </div>
                <div className="mt-1 text-sm text-slate-300">
                  Jump to modules
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1 p-2">
                <SectionLabel>Red Team</SectionLabel>
                <SyllabusLink href="#red-0" label="Foundations & Mindset" />
                <SyllabusLink href="#red-1" label="Injection Attacks" />
                <SyllabusLink href="#red-2" label="Auth & Access Control" />
                <SyllabusLink href="#red-3" label="Data Exposure & Misconfig" />
                <SyllabusLink href="#red-4" label="Client-Side Exploits" />
                <SyllabusLink href="#red-5" label="Advanced Web Layer" />
                <SyllabusLink href="#red-6" label="Exotic & Logic-Based" />
                <SyllabusLink
                  href="#red-7"
                  label="Capstone: Black-Box Pentest"
                />

                <div className="my-2 h-px bg-slate-800" />

                <SectionLabel tone="sky">Blue Team</SectionLabel>
                <SyllabusLink href="#blue-0" label="Foundations of Defense" />
                <SyllabusLink href="#blue-1" label="Defending Injection" />
                <SyllabusLink
                  href="#blue-2"
                  label="Identity & Access Defense"
                />
                <SyllabusLink href="#blue-3" label="Data Security & Config" />
                <SyllabusLink href="#blue-4" label="Browser-Side Defenses" />
                <SyllabusLink href="#blue-5" label="Monitoring & Mitigation" />
                <SyllabusLink href="#blue-6" label="Logic & Resilience" />
                <SyllabusLink
                  href="#blue-7"
                  label="Capstone: Incident War Game"
                />
              </div>

              <div className="border-t border-slate-800 p-3">
                <div className="grid gap-2">
                  <a
                    href="#correlation-map"
                    className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700"
                  >
                    🧭 View Correlation Map
                  </a>
                  <a
                    href="#"
                    className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm opacity-60 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-700"
                    aria-disabled
                  >
                    📄 Export Syllabus (coming soon)
                  </a>
                </div>
              </div>
            </nav>

            {/* Course Notes Card */}
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/30 p-4">
              <div className="text-sm font-semibold">Teaching Notes</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li>Lead with demos/logs, then formalize theory.</li>
                <li>Track MTTD/MTTR for Blue; creativity chains for Red.</li>
                <li>Run weekly Purple Team labs with shared telemetry.</li>
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <main id="main" className="min-h-[70vh]">
            {/* Page-level intro wrapper for child pages that don't have their own hero */}
            <div className="mb-4 rounded-xl border border-slate-800 bg-slate-900/30 p-4">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                <span className="rounded-full border border-slate-800 px-2 py-0.5">
                  Curriculum
                </span>
                <span className="rounded-full border border-slate-800 px-2 py-0.5">
                  Web App Sec
                </span>
                <span className="rounded-full border border-slate-800 px-2 py-0.5">
                  Hands-on
                </span>
              </div>
            </div>

            {children}

            <footer className="mt-10 border-t border-slate-800 py-8 text-sm text-slate-400">
              <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
                <div>
                  Built for instructors: attach labs, datasets, and reading
                  lists per module.
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>CC-BY Teaching Use</Badge>
                  <Badge tone="slate">v1.0</Badge>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}

/* ---------- Tiny UI helpers (server-safe) ---------- */

function Badge({
  children,
  tone = "rose",
}: {
  children: React.ReactNode;
  tone?: "rose" | "sky" | "violet" | "slate";
}) {
  const tones: Record<string, string> = {
    rose: "border-rose-800/50 text-rose-300",
    sky: "border-sky-800/50 text-sky-300",
    violet: "border-violet-800/50 text-violet-300",
    slate: "border-slate-700 text-slate-300",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-xs ${tones[tone]} bg-slate-900/40`}
    >
      {children}
    </span>
  );
}


function SectionLabel({
  children,
  tone = "rose",
}: {
  children: React.ReactNode;
  tone?: "rose" | "sky";
}) {
  const cls =
    tone === "sky"
      ? "text-sky-300 border-sky-800/50"
      : "text-rose-300 border-rose-800/50";
  return (
    <div
      className={`mt-2 mb-1 rounded-md border bg-slate-900/50 px-2 py-1 text-xs font-semibold uppercase tracking-wide ${cls}`}
    >
      {children}
    </div>
  );
}

function SyllabusLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between rounded-md px-2 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-700"
    >
      <span className="truncate">{label}</span>
      <span
        aria-hidden
        className="translate-x-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-slate-300"
      >
        ↗
      </span>
    </a>
  );
}
