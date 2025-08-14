"use client";

import { useMemo, useState } from "react";

type Lesson = {
  title: string;
  points?: string[];
};

type Module = {
  id: string;
  name: string;
  summary: string;
  lessons: Lesson[];
};

type Track = "red" | "blue";

export default function Page() {
  const [track, setTrack] = useState<Track>("red");
  const [openModule, setOpenModule] = useState<string | null>(null);

  const titleIdeas = useMemo(
    () => ({
      red: [
        "Web Hackers’ Arsenal: From XSS to RCE",
        "Exploiting the Web: Advanced Offensive Security",
        "Payloads & Pwnage: Modern Web Hacking",
        "From Injection to Domination: Modern Web Attack Vectors",
        "Red Team WebOps: Offensive Application Security",
      ],
      blue: [
        "Defending the Web: Blue Team Operations & Resilience",
        "Web Defense Mastery: From Detection to Response",
        "Guardians of the Stack: Blue Team Strategies",
        "Countering the Kill Chain: Web Application Security Defense",
        "Blue Shield: Proactive Web Defense & Incident Response",
      ],
    }),
    []
  );

  // --- Red Team curriculum (condensed from your list, grouped by module) ---
  const redModules: Module[] = [
    {
      id: "red-0",
      name: "Foundations & Mindset",
      summary:
        "Threat modeling from an adversary perspective, recon workflow, HTTP anatomy, and a safe lab.",
      lessons: [
        {
          title: "Attacker Workflow & Recon",
          points: [
            "OSINT, asset mapping, subdomain enumeration",
            "Traffic interception; proxy setup (Burp/ZAP)",
          ],
        },
        {
          title: "Lab Setup",
          points: [
            "DVWA / Juice Shop",
            "Custom vulnerable services & seed data",
          ],
        },
      ],
    },
    {
      id: "red-1",
      name: "Injection Attacks",
      summary:
        "The greatest hits: XSS, SQLi, NoSQLi, Command Injection, SSRF/Cloud metadata, SSTI, XXE.",
      lessons: [
        {
          title:
            "XSS: Reflected, Stored, DOM; CSP bypasses; prototype pollution → XSS",
        },
        { title: "SQLi: classic, blind, time-based; WAF evasion" },
        { title: "NoSQL Injection: Mongo/Couch patterns, query tampering" },
        { title: "Command Injection: OS-level impact from unsanitized input" },
        { title: "SSRF: pivoting to internals; cloud metadata theft" },
        { title: "SSTI: template context escape → RCE" },
        { title: "XXE: file read, SSRF via XML entities" },
      ],
    },
    {
      id: "red-2",
      name: "Auth & Access Control",
      summary:
        "Break identity & authorization: IDOR/Broken Access Control, MFA bypass, JWT/OAuth gotchas.",
      lessons: [
        { title: "Broken Access Control / IDOR: horiz/vert privilege moves" },
        {
          title:
            "Authentication Bypass: weak sessions, forced browsing, missing MFA",
        },
        { title: "JWT Bugs: weak secrets, alg=none, kid injection" },
        { title: "OAuth/OIDC Misconfig: token leakage, account hijack" },
        { title: "Password Reset Flaws & Rate Limit Bypass" },
        { title: "Mass Assignment & Path Param Manipulation" },
      ],
    },
    {
      id: "red-3",
      name: "Data Exposure & Misconfig",
      summary:
        "Secrets & sensitive data in the wild; config sins; dependencies; cookie and storage blunders.",
      lessons: [
        {
          title: "Sensitive Data Exposure: secrets in code/logs/repos/buckets",
        },
        { title: "Cloud Storage Misconfig & Directory Listing" },
        { title: "Cookie Misconfig: flags/scope" },
        { title: "Insecure Dependencies & Service Misconfiguration" },
        { title: "Hardcoded Credentials & Information Disclosure via Errors" },
      ],
    },
    {
      id: "red-4",
      name: "Client-Side Exploits",
      summary:
        "Manipulate the browser boundary: Clickjacking, CSRF, CORS, DOM clobbering, HTML injection.",
      lessons: [
        { title: "Clickjacking (UI redressing)" },
        { title: "CSRF (state changes sans consent)" },
        { title: "CORS Misconfig (cross-origin data theft)" },
        { title: "DOM Clobbering & HTML Injection" },
        { title: "Insecure File Download" },
      ],
    },
    {
      id: "red-5",
      name: "Advanced Web Layer Manipulation",
      summary:
        "Mess with intermediaries & parsing: request smuggling, cache poisoning, CRLF, Host header, GraphQL, verbs.",
      lessons: [
        { title: "HTTP Request Smuggling & Web Cache Poisoning" },
        { title: "CRLF / HTTP Response Splitting" },
        { title: "Host Header Injection" },
        { title: "GraphQL Abuse: introspection, overfetching, resolver IDOR" },
        { title: "API Verb Tampering & Cache Deception" },
      ],
    },
    {
      id: "red-6",
      name: "Exotic & Logic-Based",
      summary:
        "Creative mayhem: business logic abuse, race conditions, prototype pollution, file upload, privilege escalation.",
      lessons: [
        { title: "Business Logic Abuse & Rate Limit Bypass" },
        { title: "Race Conditions (double spend / dup actions)" },
        { title: "Prototype Pollution (client/server gadget chains)" },
        { title: "Unrestricted File Upload (web shells, malware)" },
        { title: "Privilege Escalation (horizontal/vertical)" },
      ],
    },
    {
      id: "red-7",
      name: "Capstone: Full Black-Box Pentest",
      summary:
        "Students chain multiple vulns against a multi-service app and deliver a professional report.",
      lessons: [
        { title: "Recon → Exploit → Pivot → Exfiltrate → Report & demo" },
      ],
    },
  ];

  // --- Blue Team curriculum (mirrored to Red) ---
  const blueModules: Module[] = [
    {
      id: "blue-0",
      name: "Foundations of Web Defense",
      summary:
        "SOC workflows, SIEM/WAF/EDR, incident lifecycle, compliance context; shared language with Red.",
      lessons: [
        {
          title:
            "Incident Lifecycle: Prep → Detect → Contain → Eradicate → Recover → Learn",
        },
        { title: "Security Stack: SIEM, SOAR, EDR, WAF, APM" },
      ],
    },
    {
      id: "blue-1",
      name: "Defending against Injection",
      summary:
        "Prevent/Detect/Respond playbooks for XSS, SQLi, NoSQLi, Command Injection, SSRF, SSTI, XXE.",
      lessons: [
        { title: "Input Validation & Output Encoding; CSP strategy" },
        { title: "Prepared Statements; DB log anomalies & SIEM rules" },
        { title: "SSRF allowlists; metadata endpoint isolation" },
        { title: "Template sandboxing; XXE hardening" },
      ],
    },
    {
      id: "blue-2",
      name: "Identity & Access Defense",
      summary:
        "MFA enforcement, RBAC/ABAC, session hygiene, JWT & OAuth guardrails, password reset safety.",
      lessons: [
        { title: "RBAC/ABAC patterns; least privilege" },
        {
          title:
            "Session Management & Device Binding; anomaly-based login alerts",
        },
        { title: "JWT integrity; key rotation; OAuth/OIDC config linting" },
        { title: "Rate limiting & abuse detection; secure reset flows" },
        { title: "Mass Assignment prevention; schema allowlists" },
      ],
    },
    {
      id: "blue-3",
      name: "Data Security & Configuration",
      summary:
        "Secrets management, dependency hygiene, cookie flags, storage permissions, safe error handling.",
      lessons: [
        { title: "Secret scanning (pre-commit/CI); vaulting" },
        { title: "CSPM & storage policies; directory listing bans" },
        {
          title: "Cookie flags (HttpOnly, Secure, SameSite), scope discipline",
        },
        { title: "SBOMs, dependency scanning, patch cadence" },
        { title: "Error handling w/o leakage; canary tokens" },
      ],
    },
    {
      id: "blue-4",
      name: "Browser-Side Defenses",
      summary:
        "Framebusting for clickjacking, CSRF tokens & double-submit, strict CORS, DOM integrity monitors.",
      lessons: [
        {
          title: "Clickjacking defenses (X-Frame-Options/CSP frame-ancestors)",
        },
        { title: "CSRF tokens, origin checks, state-binding" },
        { title: "CORS: principle of least trust; preflight sanity" },
        { title: "DOM integrity & CSP nonces" },
      ],
    },
    {
      id: "blue-5",
      name: "Advanced Monitoring & Mitigation",
      summary:
        "Rules and runbooks for request smuggling, cache poisoning, CRLF, host header, GraphQL, verb tampering.",
      lessons: [
        {
          title:
            "Reverse proxy sanity; strict message framing; cache key correctness",
        },
        { title: "Header normalization; Host header sanitization" },
        { title: "API gateway schemas; GraphQL depth/complexity limits" },
        { title: "Verb allowlists; deception & honeytokens" },
      ],
    },
    {
      id: "blue-6",
      name: "Business Logic & Resilience",
      summary:
        "Transaction locks, idempotency keys, anomaly detection, upload validation, privilege change audits.",
      lessons: [
        { title: "Fraud/risk engines; rules for coupon/price flows" },
        { title: "Race condition mitigation (locks, queues, retries)" },
        {
          title:
            "File upload scanning, content-type validation, isolated storage",
        },
        { title: "JIT access, approvals, privilege event alerts" },
      ],
    },
    {
      id: "blue-7",
      name: "Capstone: Incident War Game",
      summary:
        "Students detect, contain, and remediate the exact Red-chain; full incident report & tabletop.",
      lessons: [
        {
          title:
            "SIEM hunt → Containment playbooks → Root cause → Lessons learned",
        },
      ],
    },
  ];

  // Red↔Blue correlation by module index
  const correlation = [
    { red: redModules[0], blue: blueModules[0] },
    { red: redModules[1], blue: blueModules[1] },
    { red: redModules[2], blue: blueModules[2] },
    { red: redModules[3], blue: blueModules[3] },
    { red: redModules[4], blue: blueModules[4] },
    { red: redModules[5], blue: blueModules[5] },
    { red: redModules[6], blue: blueModules[6] },
    { red: redModules[7], blue: blueModules[7] },
  ];

  const modules = track === "red" ? redModules : blueModules;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs tracking-wide text-slate-300">
            <span>⚔️</span> cyber-course
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Red vs Blue: A Mirrored Web Security Curriculum
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Offense shows <em>how</em> to break it. Defense shows <em>how</em>{" "}
            to stop it — in lockstep. Toggle tracks, expand modules, and scan
            the correlation map to run sizzling Purple Team sessions.
          </p>

          {/* Track Toggle */}
          <div className="mt-8 inline-flex overflow-hidden rounded-lg border border-slate-700">
            <button
              onClick={() => setTrack("red")}
              className={`px-4 py-2 text-sm font-medium transition ${
                track === "red"
                  ? "bg-rose-600 text-white"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
              aria-pressed={track === "red"}
            >
              Red Team
            </button>
            <button
              onClick={() => setTrack("blue")}
              className={`px-4 py-2 text-sm font-medium transition ${
                track === "blue"
                  ? "bg-sky-600 text-white"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
              aria-pressed={track === "blue"}
            >
              Blue Team
            </button>
          </div>

          {/* Title ideas */}
          <div className="mt-6 text-sm text-slate-400">
            <div className="font-semibold uppercase tracking-wide">
              Title ideas
            </div>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {titleIdeas[track].map((t) => (
                <li
                  key={t}
                  className="rounded border border-slate-800 bg-slate-900/40 px-3 py-2"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold">
            {track === "red" ? "Red Team Modules" : "Blue Team Modules"}
          </h2>
          <p className="mt-1 text-slate-400">
            Click a module to expand its lessons. Use these as weekly anchors
            and attach labs/readings as you build out the repo.
          </p>
        </header>

        <div className="grid gap-4">
          {modules.map((m) => (
            <div
              key={m.id}
              className="rounded-xl border border-slate-800 bg-slate-900/40"
            >
              <button
                className="flex w-full items-start justify-between gap-4 rounded-t-xl px-5 py-4 text-left hover:bg-slate-900"
                onClick={() =>
                  setOpenModule((prev) => (prev === m.id ? null : m.id))
                }
                aria-expanded={openModule === m.id}
                aria-controls={`${m.id}-panel`}
              >
                <div>
                  <div className="text-lg font-semibold">{m.name}</div>
                  <div className="mt-1 text-sm text-slate-400">{m.summary}</div>
                </div>
                <span className="mt-1 text-slate-400">
                  {openModule === m.id ? "▾" : "▸"}
                </span>
              </button>

              <div
                id={`${m.id}-panel`}
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  openModule === m.id ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="border-t border-slate-800 px-5 py-4 text-sm">
                  <ul className="space-y-3">
                    {m.lessons.map((l, idx) => (
                      <li key={idx} className="rounded-lg bg-slate-900/60 p-3">
                        <div className="font-medium">{l.title}</div>
                        {l.points && l.points.length > 0 && (
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
                            {l.points.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Correlation Map */}
      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Red ↔ Blue Correlation Map</h2>
          <p className="mt-1 text-slate-400">
            Run in parallel for Purple Team drills: each Red module’s exploits
            map to a Blue module’s prevent/detect/respond playbooks.
          </p>

          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-800">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-900/60 text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-semibold">Red Module</th>
                  <th className="px-4 py-3 font-semibold">Blue Module</th>
                  <th className="px-4 py-3 font-semibold">Core Interaction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {correlation.map(({ red, blue }) => (
                  <tr key={red.id}>
                    <td className="px-4 py-3">
                      <div className="font-medium">{red.name}</div>
                      <div className="text-slate-400">{red.summary}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium">{blue.name}</div>
                      <div className="text-slate-400">{blue.summary}</div>
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {mapCoreInteraction(red.id)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footnotes / pedagogy cues */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Tip
              title="Hands-on first"
              body="Lead with the demo or log artifact, then unpack the theory. Curiosity detonates, then you diagram the shrapnel."
            />
            <Tip
              title="CTF energy"
              body="Flags/points per exploit or detection. Blue earns time-bonus for rapid MTTR, Red for creative chains."
            />
            <Tip
              title="Same app, two views"
              body="One vulnerable app; Red sees endpoints, Blue sees SIEM/APM. Identical events, opposite perspectives."
            />
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-slate-500">
        Built for teaching: add lab links, code snippets, and datasets per
        lesson as you grow.
      </footer>
    </main>
  );
}

function Tip({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
      <div className="font-semibold text-slate-200">{title}</div>
      <div className="mt-1 text-slate-400">{body}</div>
    </div>
  );
}

function mapCoreInteraction(redId: string) {
  // Tiny switchboard to summarize the “versus” dynamic in the table
  if (redId === "red-0")
    return "Shared vocabulary; lab parity; rules of engagement.";
  if (redId === "red-1")
    return "Payloads vs. sanitization, CSP, and SIEM signatures.";
  if (redId === "red-2")
    return "Bypass paths vs. MFA, RBAC/ABAC, token integrity.";
  if (redId === "red-3")
    return "Exposure scenarios vs. secrets mgmt & safe configs.";
  if (redId === "red-4")
    return "Browser pwnage vs. framebusting, CSRF tokens, strict CORS.";
  if (redId === "red-5")
    return "Parser/cache desync vs. gateway hardening & detection.";
  if (redId === "red-6")
    return "Creative abuse vs. locks, idempotency, and guardrails.";
  if (redId === "red-7")
    return "Red chain vs. Blue incident response & postmortem.";
  return "Offense vs. Defense, in stereo.";
}
