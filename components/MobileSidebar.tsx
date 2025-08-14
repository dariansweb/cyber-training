"use client";

import { useEffect, useState } from "react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  // Close on ESC & lock scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
        document.removeEventListener("keydown", onKey);
      };
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-syllabus"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700"
      >
        <span className="i">☰</span>
        <span>Syllabus</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <aside
        id="mobile-syllabus"
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum Syllabus"
        className={`fixed inset-y-0 left-0 z-50 w-[86%] max-w-xs transform border-r border-slate-800 bg-slate-950 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } h-screen`} // ← here, force full viewport height
      >
        <div className="flex h-full flex-col">
          {/* Header inside drawer */}
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400">
                Cyber Course
              </div>
              <div className="text-sm font-semibold">Syllabus</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1 text-sm text-slate-200 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700"
            >
              Close
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto p-2">
            <MobileSectionLabel>Red Team</MobileSectionLabel>
            <MobileLink
              href="#red-0"
              onClose={() => setOpen(false)}
              label="Foundations & Mindset"
            />
            <MobileLink
              href="#red-1"
              onClose={() => setOpen(false)}
              label="Injection Attacks"
            />
            <MobileLink
              href="#red-2"
              onClose={() => setOpen(false)}
              label="Auth & Access Control"
            />
            <MobileLink
              href="#red-3"
              onClose={() => setOpen(false)}
              label="Data Exposure & Misconfig"
            />
            <MobileLink
              href="#red-4"
              onClose={() => setOpen(false)}
              label="Client-Side Exploits"
            />
            <MobileLink
              href="#red-5"
              onClose={() => setOpen(false)}
              label="Advanced Web Layer"
            />
            <MobileLink
              href="#red-6"
              onClose={() => setOpen(false)}
              label="Exotic & Logic-Based"
            />
            <MobileLink
              href="#red-7"
              onClose={() => setOpen(false)}
              label="Capstone: Black-Box Pentest"
            />

            <div className="my-2 h-px bg-slate-800" />

            <MobileSectionLabel tone="sky">Blue Team</MobileSectionLabel>
            <MobileLink
              href="#blue-0"
              onClose={() => setOpen(false)}
              label="Foundations of Defense"
            />
            <MobileLink
              href="#blue-1"
              onClose={() => setOpen(false)}
              label="Defending Injection"
            />
            <MobileLink
              href="#blue-2"
              onClose={() => setOpen(false)}
              label="Identity & Access Defense"
            />
            <MobileLink
              href="#blue-3"
              onClose={() => setOpen(false)}
              label="Data Security & Config"
            />
            <MobileLink
              href="#blue-4"
              onClose={() => setOpen(false)}
              label="Browser-Side Defenses"
            />
            <MobileLink
              href="#blue-5"
              onClose={() => setOpen(false)}
              label="Monitoring & Mitigation"
            />
            <MobileLink
              href="#blue-6"
              onClose={() => setOpen(false)}
              label="Logic & Resilience"
            />
            <MobileLink
              href="#blue-7"
              onClose={() => setOpen(false)}
              label="Capstone: Incident War Game"
            />

            <div className="mt-3 grid gap-2">
              <a
                href="#correlation-map"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700"
              >
                🧭 View Correlation Map
              </a>
            </div>
          </nav>

          {/* Footer notes */}
          <div className="border-t border-slate-800 p-3 text-xs text-slate-400">
            Tip: Each Red module pairs with a Blue module for instant Purple
            drills.
          </div>
        </div>
      </aside>
    </>
  );
}

/* --- tiny mobile-only helpers --- */

function MobileSectionLabel({
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

function MobileLink({
  href,
  label,
  onClose,
}: {
  href: string;
  label: string;
  onClose: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClose}
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
