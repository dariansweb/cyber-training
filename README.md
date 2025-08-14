# Red ↔ Blue Web Security Curriculum — Overview

**What this is:** an interactive, single-page curriculum (the main `page.tsx`) that presents a **mirrored Web Security course** from two angles:

* **Red Team (Offense):** how vulnerabilities are discovered, exploited, and chained.
* **Blue Team (Defense):** how to prevent, detect, contain, and learn from the exact same attacks.

The page includes:

* A **track toggle** (Red/Blue)
* **Expandable modules** with concise lesson breakdowns
* A **Correlation Map** showing 1:1 pairings of Red modules to Blue counter-modules
  Think of it as a pedagogical dueling-pianos: offense plays a riff, defense answers with harmony.

---

## Audience & Ethos

**For:** instructors, security analysts, pentesters-in-training, and devs who want a lucid tour of modern web threats and their countermeasures.

**Tone:** pragmatic, hands-on, lab-centric.
**Philosophy:** *Offense demonstrates. Defense institutionalizes. Purple Team synthesizes.*

---

## Learning Outcomes

By the end of this curriculum, learners should be able to:

* Recognize the anatomy of common and advanced **web attacks** (from XSS to request smuggling).
* Design **preventive controls** (CSP, prepared statements, strict CORS, RBAC/ABAC, rate limiting).
* **Detect** suspicious behavior via logs, telemetry, and rules/heuristics.
* **Respond** under pressure: contain, eradicate, recover, and run honest postmortems.
* Chain offense ↔ defense into **Purple Team exercises** that harden real systems.

---

## Tracks & Modules

### 🔴 Red Team — Offense (How to Break It)

0. **Foundations & Mindset** – Attacker recon, HTTP anatomy, safe lab setup.
1. **Injection Attacks** – XSS (reflected/stored/DOM), SQLi/NoSQLi, Command Injection, SSRF & metadata, SSTI, XXE.
2. **Auth & Access Control** – IDOR, session/session fixation, MFA bypass, JWT pitfalls, OAuth/OIDC misconfig, password reset flaws, rate-limit bypass, mass assignment.
3. **Data Exposure & Misconfig** – Secrets in code/logs/buckets, directory listing, cookie scope/flags, vulnerable dependencies, debug modes, hardcoded creds, verbose errors.
4. **Client-Side Exploits** – Clickjacking, CSRF, CORS abuse, DOM clobbering, HTML injection, insecure file download.
5. **Advanced Web Layer** – HTTP request smuggling, cache poisoning, CRLF/response splitting, host header injection, GraphQL abuse, API verb tampering, cache deception.
6. **Exotic & Logic-Based** – Business logic abuse, race conditions, prototype pollution, unrestricted file upload, privilege escalation.
7. **Capstone: Black-Box Pentest** – Multi-service target, chained exploits, report & live demo.

### 🔵 Blue Team — Defense (How to Stop It)

0. **Foundations of Web Defense** – SOC workflows, SIEM/WAF/EDR/APM, incident lifecycle & roles.
1. **Defending Injection** – Input validation, output encoding, CSP strategy; prepared statements; DB anomaly rules; SSRF allowlists; template sandboxing; XXE hardening.
2. **Identity & Access Defense** – MFA enforcement, robust session management, RBAC/ABAC, JWT key hygiene, OAuth/OIDC config linting, secure reset flows, rate limiting, schema allowlists.
3. **Data Security & Configuration** – Secret scanning & vaulting, CSPM/storage policies, cookie flags & scope, SBOM/dependency scanning, safe error handling.
4. **Browser-Side Defenses** – Framebusting (`X-Frame-Options`/`frame-ancestors`), CSRF tokens & origin checks, strict CORS, DOM integrity & CSP nonces.
5. **Monitoring & Mitigation** – Reverse proxy sanity, strict message framing, cache key validation, header normalization, host header sanitization, API gateway schema enforcement, GraphQL depth/complexity limits, verb allowlists.
6. **Logic & Resilience** – Transaction locks, idempotency keys, risk engines, upload scanning & isolation, privilege change alerts and approvals.
7. **Capstone: Incident War Game** – Detect, contain, and remediate the exact Red chain; postmortem and lessons learned.

---

## The Correlation Map (Why This Page Shines)

For every Red module, there is a mirrored Blue module:

| Red Focus          | Blue Counterpoint                     | What Learners See                        |
| ------------------ | ------------------------------------- | ---------------------------------------- |
| Recon & lab        | SOC & incident lifecycle              | Shared vocabulary; rules of engagement   |
| Injection exploits | Input/Output hygiene + WAF/SIEM rules | Payload vs. sanitization & alerting      |
| Auth/Access bypass | MFA/RBAC/session rigor                | Bypass path vs. enforcement              |
| Data exposure      | Secrets mgmt & config hygiene         | Exposure vs. prevention baselines        |
| Client-side tricks | Browser hardening                     | UI pwnage vs. frame/CSRF/CORS shields    |
| Layer-7 weirdness  | Gateway hardening & detection         | Desync/poisoning vs. normalized handling |
| Logic & edge cases | Controls, locks, anomaly detection    | Creativity vs. resilience patterns       |
| Red capstone       | Blue war game                         | Offense chain vs. response & recovery    |

This **1:1 mapping** is the spine of the page: flip tracks, expand modules, and the pedagogy snaps into place.

---

## Capstone Experiences

* **Red Capstone:** black-box engagement against a deliberately flawed multi-service app; demonstrate exploit chains and articulate risk/impact.
* **Blue Capstone:** live incident handling of the same attack chain; triage, containment, eradication, recovery, and a blameless postmortem with durable follow-ups.

---

## Pedagogical Notes

* **Hands-on first:** show the exploit or the log artifact, then unpack theory.
* **Anomaly literacy:** students learn what “weird” looks like in real telemetry.
* **Purple Team rhythm:** pair Red demos with Blue detections in the same session for immediate feedback.
* **Ethical boundaries:** everything happens in an isolated, lawful lab environment.

---

## Ethics & Safety

This curriculum discusses offensive techniques **for education** in **controlled environments**.
Never test systems without **explicit permission**. Follow all laws, policies, and codes of conduct.
The ultimate aim is resilience, not chaos.

---

## Attributions

* Curriculum design: mirrored Red ↔ Blue structure with correlation mapping.
* Built to be presented via a single interactive `page.tsx` with track toggle, module accordions, and a correlation table.

---

**TL;DR:** The `page.tsx` is a **course map** for modern web security — offense teaches the break, defense teaches the fix, and the correlation map stitches them into one intelligible, formidable whole.
