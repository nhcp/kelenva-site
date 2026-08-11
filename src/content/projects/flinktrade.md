---
title: "FlinkTrade"
summary: "Personal algorithmic trading platform, self-hosted end to end with a strict validation pipeline"
tags: ["Trading", "Python", "Docker", "VPS", "Automation"]
stack: ["Python", "Flask", "XGBoost", "Gunicorn", "Nginx", "systemd", "SQLite", "Cloudflare"]
demoUrl: "https://flinktrade.com"
date: 2026-08-10
featured: true
---

An algorithmic trading platform I built and operate end to end — strategy
research, live execution, and infrastructure are all self-managed on a
dedicated Hetzner VPS.

The engineering side is the real focus: Flask services run under Gunicorn
and Nginx via systemd, SQLite in WAL mode for local persistence, Cloudflare
in front with strict SSL, and Fail2ban for basic hardening. Everything is
deployed and monitored the same way I'd want production infrastructure run
anywhere else.

The more interesting discipline is on the research side. Every strategy
goes through walk-forward validation against realistic trading costs, with
pass/fail thresholds pre-registered and enforced by git commit *before*
any backtest is run — so there's no room to move the goalposts after
seeing results. Every verdict, pass or kill, is logged permanently in an
append-only kill log. Most strategies get killed; that's the system
working as intended, not a failure of it.
